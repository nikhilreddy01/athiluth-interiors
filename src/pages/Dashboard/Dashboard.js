import React, { useState,useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import content from "../../content.json";
import "./Dashboard.scss";
import Roomtypepage from "../RoomTypePage/Roomtypepage";
import Contactus from "../Contactus/Contactus";
// import icon from "../../assets/images/"
const Dashboard = () => {
    console.log(content)
    const { Cards = [] ,partners} = content;
    const [selectedCard, setSelectedCard] = useState("");
    const [imagesCount, setImagesCount] = useState();
    useEffect(() => {
        let images = [];
        for (let i = 0; i < partners.count; i++) {
            let index = i;
            images.push({
                image: index + 1
            })

        }
        setImagesCount(images)

    }, []);
    const onCardClick = (subImagesBaseUrl,count=0) => {

        setSelectedCard({subImagesBaseUrl:subImagesBaseUrl,count:count});
    }
    const backToHomePage = ()=>{
        setSelectedCard("")
    }
    return (<div>
        {selectedCard ? <Roomtypepage selectedCard={selectedCard} backToHomePage={backToHomePage} /> :
            <React.Fragment>
                <div style={{position:"relative"}}>
                <div style={{position:"absolute"}}>
                    <div  className="headers" style={{fontSize:"35px",color:"#fecc2a"}}>Bring home beautiful <b/>interiors that fit your dreams</div>
                    <h3 className='header-text'>Experience unmatched quality & timely delivery <b/>with livespace</h3>
                 </div>
                <img src={require('../../assets/images/cover.png')} className='cover-image'/>
                 
                </div>
                <h2 style={{
                    fontFamily: "open-sans"
                }}>Explore inspirational designs for every room to transform your home to a dream home.</h2>
                <div className='dashboard-cards'>
                    {Cards && Cards.map((card) => {
                        return (
                            <div className='cards' onClick={() => onCardClick(card.subImagesBaseUrl,card?.count)}>
                                <h3>{card.name}</h3>
                                <img src={require(`../../assets/images/${card.image}`)} />
                            </div>
                        )

                    })}
                </div>
                
                <div className='partners'>
                    <h2>Our trusted partners</h2>
                    <h5>Winning collaborations that produce winning designs.</h5>
                    <marquee>
                        {imagesCount && imagesCount.map((item)=>{
                            return(
                             <span>
                                <img src={require(`../../assets/images/partners/${item.image}.png`)}/>
                             </span>
                            )
                        })}
                    </marquee>

                </div>
                <div className='why'>
                    <h3>WHY CHOOSE US ?</h3>
                    <p>
                    At the Athulith interior, we believe that each client has unique needs and preferences. To cater to that, we add up the best and most creative designs to make your dream a reality. We can amaze you with fresh ideas at every turn. Our experts are trained professionals who will understand your taste and preferences better than anyone else can. They use their creativity to design home interiors from themed living rooms, villas, apartments, and bedrooms to elegant bathrooms. We deliver interior design projects promptly while maintaining a high level of quality service.
                    </p>


                </div>
                <div className='follow-us-in' style={{padding:"30px"}}>
                    <h2>Connect with us</h2>
                    <h5>Reach out on WhatsApp or Facebook or Instagram for the best home design experience.</h5>
                    <Contactus/>

                </div>
                <div className='about'>
                    <h2>ABOUT ATHULITH INTERIORS</h2>
                    
                    <h5>
                    Athulith Interiors is one of the most renowned interior design companies that provide the Premium Interior Designs. At Athulith Interiors we have the best interior designers and architects. As a team, we embrace the spirit of innovation. Challenges are accepted gladly and learning experiences are cherished and shared. It is our collective aim to serve our diverse clientele attentively and with the highest levels of professionalism.
                    </h5>
                    <h5>
                    We offer complete transparency, flexibility, reliability, and 100% commitment. Our team of dedicated and experienced Interior Designers combines their skills and works in harmony to create outstanding interior designs with a magnificent view.
                    </h5>
                    <h5>
                    We believe in cultivating long-lasting relationships. Your satisfaction is our success.
                    </h5>

                </div>
            </React.Fragment>
        }
    </div>

    )

};
export default Dashboard;