// Stateful Component: class
import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import SideBar from "./sideBar";
import Footer from "./footer";

class BaiTap1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="disContents">
                    <Content />
                    <SideBar />
                </div>
                <Footer />
            </div>
        )
    }
}

export default BaiTap1;