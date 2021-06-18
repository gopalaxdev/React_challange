import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
function HomePage() {
    return (
        <div className='resume__container'>
            <div className="resume__side">
                <div className="resume__side__image">

                </div>
                <div className="resume__side__content">
                    <div className="objective">
                        <div className="objective__header">
                            <h3>Objective</h3>
                            <div className="border__line"></div>
                        </div>

                        <div className="objective__body">
                            Full-Stack developer with more than 2.10 years of
                            experience in designing and developing
                            responsive and scalable Web Applications. Has
                            interest over Problem solving, Optimization.

                        </div>
                    </div>

                    <div className="skills">
                        <div className="skills__header">
                            <h3>Skills</h3>
                            <div className="border__line"></div>
                        </div>

                        <div className="skills__body">
                            React Js • Redux • Java Script • Type Script •
                            HTML • CSS • Node Js

                        </div>
                    </div>
                </div>
            </div>

            <div className="resume__main">
                <div className="resume__main__header">
                    <h2 clasName="name__text">Gopala Agrawal</h2>
                    <span className="ph__number">7411977020  |  </span>
                    <span className="mail__id">agrawalgopala@gmail.com</span>

                </div>
                <div className="border__line"></div>


                <div className="resume__body">
                    <div className="org__exp">
                        <div className="org__exp__header">
                            <h3> PROFESSIONAL EXPERIENCE</h3>
                            {/* <div className="border__line"></div> */}
                        </div>

                        <div className="org__exp__body">
                            <div className="org__exp__body__header">
                                PRODAPT SOLUTIONS | 2 years 10 months
                            </div>
                            <div className="org__sub_container">
                                <div>
                                    <div className='org__sub__header'>SOFTWARE ENGINEER</div>
                                    <div>Sep 2020 – Present</div>
                                    <div className="org__exp__body__body">
                                        Developed web portal components that allows
                                        Users to provision the phones & handsets
                            </div>
                                </div>
                                <div>
                                    <div className='org__sub__header'>ASSOCIATE SOFTWARE ENGINEER </div>
                                    <div>Aug 2018 – Sep 2020</div>
                                    <div className="org__exp__body__body">
                                        Developed web portal components that allows
                                        B2B customers to manage user setup boxes & allows
                                        them to generate reports
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="org__exp">
                        <div className="org__exp__header">
                            <h3>EDUCATION</h3>
                            {/* <div className="border__line"></div> */}
                        </div>

                        <div className="org__exp__body">
                            <div className="org__sub_container">
                                <div>
                                    <div className="org__exp__body__header">
                                        BANGALORE INSTITUTE OF TECHNOLOGY
                            </div>
                                    <div>Bachelor of Engineering, TE</div>
                                    <div>Graduated May 2018 | Bangalore,</div>
                                    <div className="org__exp__body__body">
                                        Karnataka Percentage: 68
                            </div>
                                </div>
                                <div>
                                    <div className='org__sub__header'>NAVAYUGA RADIANCE SCHOOL, LUCKNOW </div>
                                    <div>Passed 12th 2013| Lucknow, Uttar Pradesh,</div>
                                    <div className="org__exp__body__body">
                                        Percentage: 81

                            </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="org__exp">
                        <div className="org__exp__header">
                            <h3>CERTIFICATES</h3>
                            {/* <div className="border__line"></div> */}
                        </div>

                        <div className="org__exp__body">
                            <div className="org__sub_container">
                                <div>
                                    <div className="org__exp__body__header">
                                        CODECHEF(DATA STRUCTURES AND ALGO):
                            </div>
                                    <div>Fundamental Level certification on code chef</div>
                                    <div>Username: gopalaagrawal</div>
                                    <div>UCertificate Id: 6eca528</div>
                                    <div className="org__exp__body__body__a">
                                        <a href='https://www.codechef.com/certificates/verify' target='_blank' >Verfiy</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="org__exp__body__header">
                                        JAVASCRIPT(HACKER RANK):
                            </div>
                                    <div>JavaScript (Basic)</div>
                                    <div className="org__exp__body__body__a">
                                        <a href='https://www.hackerrank.com/certificates/edc30b426599' target='_blank' >Verfiy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="org__exp">
                        <div className="org__exp__header">
                            <h3>IMPORTANT LINKS</h3>
                            {/* <div className="border__line"></div> */}
                        </div>

                        <div className="org__exp__body">
                            <div className="org__sub_container">
                                <div>

                                    <div className="org__exp__body__body__a">
                                        Github:<a href='https://github.com/gops12345/' target='_blank' >https://github.com/gops12345/</a>
                                    </div>
                                </div>
                                <div>

                                    <div className="org__exp__body__body__a">
                                        LINKED IN:    <a href='https://www.linkedin.com/in/gopala-agrawal-5aa52b165' target='_blank' >https://www.linkedin.com/in/gopala-agrawal-5aa52b165</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
