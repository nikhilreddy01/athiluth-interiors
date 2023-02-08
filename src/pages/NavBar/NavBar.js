import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
// import '../../index.css';
import ReactDOM from 'react-dom';
import Logo from '../../components/Logo/Logo';
import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import Contactus from "../Contactus/Contactus";
import "./style.scss";
class NavBar extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Services',
                items: [
                    {
                        label: 'Bedrooms',
                        items: [
                            {
                                label: 'Master Bedroom'
                            },
                            {
                                label: 'Children Bedroom'
                            },
                            {
                                label: 'Guest Bedrrom'
                            },
                            {
                                label: 'parent Bedroom'
                            }

                        ]
                    },
                    {
                        label: 'Kitchen',
                        items: [
                            {
                                label: "U Shaped"
                            },
                            {
                                label: "L Shaped"
                            },
                            {
                                label: "Parallel Kitchen"
                            },
                            {
                                label: "Island Kitchen"
                            },
                            {
                                label: "Straight Kitchen"
                            },
                            {
                                label: "Modular Kitchen"
                            }
                        ]
                    },
                    {
                        label:"Livingroom",
                        items:[
                            {
                                label:"Living Room"
                            },
                            {
                                label:"Dining Room"
                            },
                            {
                                label:"Foyer Area"
                            },
                            {
                                label:"Sliding door"
                            },
                            {
                                label:"Swing door"
                            },
                            {
                                label:"Walk in wadrobe"
                            }
                        ]
                    }
                    // {
                    //     separator: true
                    // },

                ]
            },
            {
                label: 'How It Works'
            },
            {
                label: 'Loactions',
                items: [
                    {
                        label: 'Hyderabad'
                    },
                    {
                        label: 'Bangalore'
                    },
                    {
                        label: 'Ananatapur'
                    },
                    {
                        label: 'All Locations In AndhraPradesh'
                    }
                ]
            },
            {
                label: 'Contact Us'
            },
            {
                label: 'About Us'
            }
        ];
    }

    render() {
        const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;

        return (
            <div className="Navbars">
                <div className=' contact-details-navbar'>
                    <div className=' email-call'>
                        <span className=' email'>
                            athulithinteriors@gmail.com
                        </span>
                        <span className="call ">
                            <img src={require(`../../assets/images/call.png`)} />
                            <a href="tel:+91 9392153622">
                                +91 9392153622
                            </a></span>
                    </div>
                    <div className=''>
                       <Contactus/>
                    </div>
                </div>
                <div className="card">
                    <Menubar model={this.items} end={<Logo />} />
                </div>
            </div>
        );
    }
};
export default NavBar;

