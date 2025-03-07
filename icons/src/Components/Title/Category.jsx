import React from "react";
import "./Category.css"
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

const Category =()=> {
    return (
        <div className="sub-container">
            <div className="a1">
                <div className="ab">
                    <div className="a5">
                        <img src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png"/>
                    </div>
                    <div className="b2">Hello,</div>
                    <div className="b3">Joko Husien</div>
                    <div className="b4"><FaCalendarAlt /></div>
                    <div className="b5"><IoMdNotificationsOutline /></div>
                    <div className="b6">On Progress(12)</div>
                    <div className="b7">View More</div>
                    <div className="b11">
                        <div className="b8">
                            <div className="b10">
                                <div className="c1">Design UI ToDo App</div>
                                <div className="c2">Friday, 08 July 2022</div>
                                <div className="c3"><FaUsers /></div>
                            </div>
                            <div className="c4">Description:</div>
                            <div className="c5">Design a simple home pages with clean layout and color based on the guidelines..</div>
                            <div className="c6">Teams:</div>
                            <div className="c8">
                                <img src="https://e7.pngegg.com/pngimages/694/639/png-clipart-computer-icons-user-profile-female-symbol-miscellaneous-purple.png"/>
                                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"/>
                                <img src="https://i.pinimg.com/1200x/26/44/4f/26444f66c8cfe2798e892a669e4df8cf.jpg"/>
                                <img src="https://p.kindpng.com/picc/s/649-6490120_user-picture-in-circle-png-png-download-circle.png"/>
                            </div>
                            <div className="c9">Progress:
                                <div className="g">
                                    <div className="e2">
                                        <div className="progress-circle"></div>
                                    </div>
                                    <div className="c10">78%</div>
                                    
                                </div>
                            </div>
                            <div className="bottom-line"></div>
                        </div>
                        <div className="b9">
                            <div className="d1">
                                <div className="d2">Wee</div>
                                <div className="d3">Friday</div>

                            </div>
                            <div className="d4">Descr</div>
                            <div className="d5">Meet page</div>
                            <div className="d6">Team</div>
                            <div className="d7">
                                <img src="https://e7.pngegg.com/pngimages/694/639/png-clipart-computer-icons-user-profile-female-symbol-miscellaneous-purple.png"/>
                                
                            </div>
                            <div className="d8"></div>
                            <div className="bottom-line1"></div>
                            
                        </div>
                        <div className="view">Completed</div>
                        <div className="more">View More</div>
                        <div className="box">
                            <div className="side">
                            <div className="line">
                                <div className="client">
                                    <div className="meeting">
                                        <h3>Meeting with Client</h3>
                                        <p>Redesign motion graphic..</p>
                                    </div>
                                    <div className="rightmark">
                                        <a className="check"><IoMdCheckmark /></a></div>
                                    
                                    
                                </div>
                                <div className="line1"></div>
                                <div className="today-img">
                                <div className="today">Today 11:25PM</div>
                                    <div className="imagess">
                                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"/>
                                    </div>
                                    <div className="imagess1">
                                        <img src="https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png"/>
                                    </div>
                                
                                </div>

                            </div>
                            </div>    
                        </div>
                        <div className="box11">
                            <div className="side1">
                            <div className="line">
                                <div className="client">
                                    <div className="meeting1">
                                        <h3>Task Explore NFT</h3>
                                        <p>Explore design mobile UI..</p>
                                    </div>
                                    <div className="rightmark">
                                        <a className="check"><IoMdCheckmark /></a></div>
                                    
                                    
                                </div>
                                <div className="line1"></div>
                                <div className="today-img">
                                <div className="today1">01 July 10:30 AM</div>
                                    <div className="imagess">
                                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"/>
                                    </div>
                                    <div className="imagess1">
                                        <img src="https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png"/>
                                    </div>
                                
                                </div>

                            </div>
                            </div>    
                        </div>
                            <div className="new">
                                <div className="create"> +  Create New</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="b11"></div>
            <div className="a2">
                <div className="user">
                    <img src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png"/>
                </div>
                <div className="hello">Hello,</div>
                <div className="joko">Joko Husein</div>
                <div className="boxes1">
                    <div className="icon6"><FaCalendarAlt /></div>
                </div>
                <div className="boxes2">
                    <div className="icon7"><IoMdNotificationsOutline /></div>
                </div>
                <div className="progress">On Progress (12)</div>
                <div className="view1">View More</div>
                <div className="ui">Design UI ToDo App </div>
                <div className="july">Friday, 08 July 2022</div>
                <div className="circle">
                    <div className="icon8"></div>
                </div>
            </div>
        </div>

    )
}

export default Category;