
import React from "react";
import NavBar from "../NavBar/NavBar";
import Dashboard from "../Dashboard/Dashboard";
import "./style.scss";
const HomePage = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Dashboard/>
           <div className="footer">
            <div className="scrolltotop" onClick={()=>window.scrollTo(0,20)}>
              <i className="pi pi-arrow-up"></i>
            </div>
            <div>
                <p>
                Copyright ©  2023 Athulith. | All Rights Reserved
                </p>
            </div>
           </div>
        </React.Fragment>
    )
};
export default HomePage;