import React from "react";
import "./Category.css"
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";

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
                                <div className="c3"></div>
                            </div>
                        </div>
                        <div className="b9"></div>
                         
                    

                    </div>
                    

                    
                </div>
                
            
                    
            </div>
            <div className="b11"></div>
 
            <div className="a2"></div>
        </div>

    )
}

export default Category;