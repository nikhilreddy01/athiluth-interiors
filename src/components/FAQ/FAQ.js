
import React, { Component } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import './FAQ.scss';
import content from "../../content.json";

class FAQ extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: null
        }
    }

    onClick(itemIndex) {
        let activeIndex = this.state.activeIndex ? [...this.state.activeIndex] : [];

        if (activeIndex.length === 0) {
            activeIndex.push(itemIndex);
        }
        else {
            const index = activeIndex.indexOf(itemIndex);
            if (index === -1) {
                activeIndex.push(itemIndex);
            }
            else {
                activeIndex.splice(index, 1);
            }
        }

        this.setState({ activeIndex });
    }

    render() {
        return (
            <div className="FAQ">
                <h3>FAQ's</h3>
                <div className="card">
                    <Accordion activeIndex={0}>
                        {
                            content.faqs.map((item) => {
                                return (
                                    <AccordionTab header={item.question}>
                                        <p>{item.answer}</p>
                                        { item && item.listItem ?
                                         (<ul>
                                            {
                                                 item.listItem.map((list) => {
                                                  return  <li>{list}</li>
                                                })
                                            }
                                        </ul>) :"" }
                                    </AccordionTab>
                                )
                            })
                        }


                    </Accordion>
                </div>
            </div>
        )
    }
}
export default FAQ;