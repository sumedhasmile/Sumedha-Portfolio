import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from '@merc/react-timeline';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

/***Project images*****/
import Zodaic from '../assets/Zodaic_Sign.png';
import Blogging from "../assets/Blogging.png";
import Pizza from '../assets/Pizza_Delivery_web.png';
import Tic_Tac_Toe from '../assets/Tic_Tac_Toe.jpg';

/******Tech Images ********/
import C from '../assets/c.png';
import Django from '../assets/django.svg';
import CSS from '../assets/css-5.svg';
import HTML from '../assets/html5.svg';
import Python from '../assets/python-5.svg';
import java from '../assets/java-4.svg';
import android from '../assets/android.svg';



const Project = () => {
    return (
        <div id="projects" style={{fontFamily:" 'Newsreader', serif"}}>
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                <ImageEvent
                    date="3rd sem of Engineering"
                    className="text-center"
                    text="Zodaic Sign Using Date Of Birth"
                    src={Zodaic}
                    alt="Zodaic"
                    >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main" id="main">
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body >
                                <strong>DESCRIPTION:</strong> A simple code which takes input as date of birth of user and output
                                        user’s zodiac sign and lucky number.
                                <hr />
                                <strong>FIRST PROJECT</strong>
                                <ul className="list-styles pt-1">
                                <li>Using C programming language</li>
                                <li>Its just Beginning of my learnings. </li>
                               
                                </ul>
                                <hr />
                                <strong>TECH USED</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image 
                                        src={C}
                                        alt="C "
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    C Language
                                    </span>
                                </li>
                                
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        
                        <UrlButton id ="button-source-code"
                        href="https://github.com/sumedhasmile/Zodaic_sign"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                    </div>
                    </div>
          </ImageEvent>


          {/*** Blogging Website***/}

          <ImageEvent
                    date="Covid Pandemic days"
                    className="text-center"
                    text="Blogging Website"
                    src={Blogging}
                    alt="Blogging"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main" id ="main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>DESCRIPTION:</strong> A website for adding blogs, viewing others blog and commenting on it.
                                <hr />
                                <strong>FEATURES</strong>
                                <ul className="list-styles pt-1">
                                <li>Using python as programming language</li>
                                <li>Developed On Django Framework  </li>
                                <li>Backend used db sqlite </li>
                                </ul>
                                <hr />
                                <strong>TECH USED </strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image 
                                        src={Django}
                                        alt="Django "
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Django
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image 
                                        src={HTML}
                                        alt="HTML"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image 
                                        src={CSS}
                                        alt="CSS"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image 
                                        src={Python}
                                        alt="Python "
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Python Language
                                    </span>
                                </li>
                                
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        
                        <UrlButton id ="button-source-code"
                        href="https://github.com/sumedhasmile/Blogging-Website-Django-pro"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                    </div>
                    </div>
          </ImageEvent>

          {/*** Pizza Delivery Website***/}

          <ImageEvent
                    date="Another Django Project"
                    className="text-center"
                    text="Pizza Delivery Website"
                    src={Pizza}
                    alt="pizza"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main" id ="main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>DESCRIPTION:</strong> A website where user/customer orders pizzas for home delivery .Its demonstrates CRUD operation.
                                <hr />
                                <strong>FEATURES</strong>
                                <ul className="list-styles pt-1">
                                <li>Has 2 main parts one on customer side who add, delete or update the status of order and on other side is admin who takes the
                                                order and update the status.</li>
                                <li>Using python as programming language</li>
                                <li>Developed On Django Framework  </li>
                                <li>Backend used db sqlite </li>
                                </ul>
                                <hr />
                                <strong>TECH USED</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image 
                                        src={Django}
                                        alt="Django "
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Django
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image 
                                        src={HTML}
                                        alt="HTML"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image 
                                        src={CSS}
                                        alt="CSS"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image 
                                        src={Python}
                                        alt="Python "
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Python Language
                                    </span>
                                </li>
                                
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        
                        <UrlButton id ="button-source-code"
                        href="https://github.com/sumedhasmile/Pizza-Delivery-Web-Pro"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                    </div>
                    </div>
          </ImageEvent>


                    {/*** Tic Tac Toe app***/}

                    <ImageEvent
                    date="Android Project"
                    className="text-center"
                    text="Tic Tac Toe App"
                    src={Tic_Tac_Toe}
                    alt="Tic"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main" id ="main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>DESCRIPTION:</strong>A Android app for simple  2 player Tic Tac Toe game.
                                <hr />
                                <strong>FEATURES</strong>
                                <ul className="list-styles pt-1">
                                <li>Using java as programming language.</li>
                                <li>Developed On Android  Studio. </li>
                                </ul>
                                <hr />
                                <strong>TECH USED</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image 
                                        src={android}
                                        alt="Andriod"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Android Studio
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image 
                                        src={java}
                                        alt="Java"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Java Programming Language
                                    </span>
                                </li>
                                
                                
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        
                        <UrlButton id ="button-source-code"
                        href="https://github.com/sumedhasmile/Tic-Tac-Toe-Android-pro"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                    </div>
                    </div>
          </ImageEvent>

          
                </Events>
            </Timeline>
        </div>
    )
}

export default Project
