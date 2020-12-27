// Stayless Componet: function
import React from "react";
import Header from './header';
import Carousel from './carousel';
import Contact from './contact';
import Footer from './footer';
import WhatWeDo from './whatWeDo';
import ItemCard from './itemCard';
import ListCard from './listCard';

function BaiTap2() {
    return (
        <div>
            <Header />
            <Carousel />
            <div className="container">
            <div className="row">
                <WhatWeDo />
                <Contact />
            </div>
            </div>
            <ListCard />
            <Footer />
        </div>
    )
}

export default BaiTap2;