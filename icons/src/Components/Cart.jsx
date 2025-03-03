import React from "react"
import "./Cart.css";
import { FaRegHeart } from "react-icons/fa";

const Cart=()=> {
    return (
        <div className="container">
            <div className="Recommendations">Fresh recommendations</div>
            <div className="boxes">
                <div className="box1">
                    <div className="image">
                        <img src="https://4.imimg.com/data4/IJ/VC/GLADMIN-11684817/kitchen-room-interior-designing-250x250.jpg"/></div>
                    <div className="row">FEATURED</div>
                    <div className="icon1"><FaRegHeart /></div>
                    <div className="rupee">₹ 14,500</div>
                    <div className="a1">2Bds - 2 Ba - 900 ft2</div>
                    <div className="a2">Makhmalabad, nashik 422004</div>
                    <div className="a3">
                        <div className="a4">MAKHAMALABED GAOTHAN,NASHIK</div>
                        <div className="a5">3 DAYS AGO</div>
                    </div>
                    </div>
                    <div className="box2">
                    <div className="image">
                        <img src="https://4.imimg.com/data4/IJ/VC/GLADMIN-11684817/kitchen-room-interior-designing-250x250.jpg"/></div>
                    <div className="row">FEATURED</div>
                    <div className="icon1"><FaRegHeart /></div>
                    <div className="rupee">₹ 14,500</div>
                    <div className="a1">2Bds - 2 Ba - 900 ft2</div>
                    <div className="a2">Makhmalabad, nashik 422004</div>
                    <div className="a3">
                        <div className="a4">MAKHAMALABED GAOTHAN,NASHIK</div>
                        <div className="a5">3 DAYS AGO</div>
                    </div>
                    </div>

           
                
            </div>
            </div> 
       
    );
};
export default Cart;