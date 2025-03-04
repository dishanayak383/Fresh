import React from "react";
import "./Category.css"
import { FaCalendarAlt } from "react-icons/fa";

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
                    <div className="icon1"><FaCalendarAlt /></div>
                    <div className="icon2"></div>
                </div>
            </div>
            <div className="a2"></div>
        </div>

    )
}

export default Category;