import React from "react";
import "./Logo.scss"
import {useNavigate} from 'react-router-dom';
import Contactus from "../../pages/Contactus/Contactus";
const Logo =()=>{
    const history = useNavigate();
  const onContactUsClick = ()=>{
    // history('/ContactUs')
  }
    return(
        <div className="nav-bar">
          <div style={{display:"flex",alignItems:"center"}}>
          <img src={require(`../../assets/images/logo.png`)} style={{width:"40px",height:"40px",marginLeft:"15px"}}/>
            <div className="logo">
              <div>Athulith</div>
            </div>
            </div>
           
            {/* <div className="about-us">
                <div className="call">
                  <img src={require(`../../assets/images/call.png`)}/>
                  <a href="tel:+91 9392153622">
                    Call Us
            </a></div>
                

            </div> */}

        </div>
    )

};
export default Logo;