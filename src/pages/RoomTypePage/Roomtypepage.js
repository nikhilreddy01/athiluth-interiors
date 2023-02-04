import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import "./Roomtypepage.scss"
const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '600px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1
    }
];

const Roomtypepage = (props) => {
    const { selectedCard ,backToHomePage} = props;
    console.log(selectedCard)
    const [imagesCount, setImagesCount] = useState();
    useEffect(() => {
        let images = [];
        for (let i = 0; i < selectedCard.count; i++) {
            let index = i;
            images.push({
                image: index + 1
            })

        }
        setImagesCount(images)

    }, [selectedCard.subImagesBaseUrl]);

    const productTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <img src={require(`../../assets/images/${selectedCard.subImagesBaseUrl}/${item.image}.png`)} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div>
            <div onClick={backToHomePage}  className="back-to-home">

                <img src={require(`../../assets/images/homeicon.png`)} style={{height:"30px"}}/>
                
                Back </div>
                </div>
            <div className="card">
                <Carousel value={imagesCount} numVisible={2} numScroll={2} className="custom-carousel" circular
                    autoplayInterval={1500}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<h2>{selectedCard.subImagesBaseUrl.toUpperCase()}</h2>} />
                    
            </div>
            <div className='image-cards'>
                {imagesCount && imagesCount.map((item) => {
                    return productTemplate(item)
                })}

            </div>
        </div>
    )
};
export default Roomtypepage;