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
                        <img src="https://rukminim2.flixcart.com/image/850/1000/kpr8k280/vehicle-steering-wheel/t/n/s/sparco-14inch-universal-steering-wheel-for-sports-car-look-rally-original-imag3x88uzsqpurd.jpeg?q=90&crop=false"/></div>
                    <div className="row">FEATURED</div>
                    <div className="icon2"><FaRegHeart /></div>
                    <div className="rupee1">₹ 2,500</div>
                    <div className="a6">Willy's stering wheel jeep spare parts</div>
         
                    <div className="a7">
                        <div className="a8">MARATHWADA CHOWK, BALAPUR HIN...</div>
                        <div className="a9">JAN 27</div>
                    </div>
                    </div>
                    <div className="box3">
                    <div className="image">
                        <img src="https://m.media-amazon.com/images/I/51imM6WvjZL._SX679_.jpg"/></div>
                    <div className="row">FEATURED</div>
                    <div className="icon3"><FaRegHeart /></div>
                    <div className="rupee2">₹ 349</div>
                    <div className="a10">All type of brand new Bluetooth speake...</div>
                    
                    <div className="a11">
                        <div className="a12">SAMUDRAPUR, MAHARASHTRA</div>
                        <div className="a13">2 DAYS AGO</div>
                    </div>
                    </div>
                    <div className="box4">
                    <div className="image">
                        <img src="https://www.techadvisor.com/wp-content/uploads/2025/01/best-samsung-galaxy-phones-1.jpg?quality=50&strip=all"/></div>
                    <div className="row">FEATURED</div>
                    <div className="icon3"><FaRegHeart /></div>
                    <div className="rupee4">₹ 30,500</div>
                    <div className="a14">Selling my 6 month old Samsung need ...</div>
                   
                    <div className="a15">
                        <div className="a16">SAMUDRAPUR MIDC, MAHARASHTRA</div>
                        <div className="a17">5 DAYS AGO</div>
                    </div>
                    </div>

           
                
            </div>
            </div> 
       
    );
};
export default Cart;