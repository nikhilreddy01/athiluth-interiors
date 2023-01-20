import React from "react";
import "./Navbar.scss"
import {useNavigate} from 'react-router-dom';
import Contactus from "../../pages/Contactus/Contactus";
const Navbar =()=>{
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
              <span> Interiors</span>
            </div>
            </div>
            {/* <div> */}
                {/* <marquee>contact Rajesh Reddy  at +91 8919281705</marquee> */}
            {/* </div> */}
            <div className="about-us">
                <div className="call">
                  <img src={require(`../../assets/images/call.png`)}/>
                  <a href="tel:+91 9392153622">
                    Call us
            </a></div>
                {/* <div onClick={onContactUsClick}>Follow Us</div> */}
                {/* <Contactus/> */}

            </div>

        </div>
    )

};
export default Navbar;