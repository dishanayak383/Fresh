import React from "react";
import  Cart from  './Cart';

export default {
    title:"Components/Cart",
    compmonent:Cart,
};
const Template=(args)=><Cart {...args}/>
export const cart =Template.bind();;