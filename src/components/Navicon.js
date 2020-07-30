import React from "react";
import Navigation from "./Navigation";

function Navicon({ handleBtnCLick, menuToggle }) {
    return (
        <div className="flex-auto">
            <h1 className="text-center text-3xl font-semibold p-4 cursor-pointer md:hidden" data-toggle={menuToggle} onClick={handleBtnCLick}>☰</h1>
            <div className="hidden md:block">
                <Navigation />
            </div>
        </div>
    )
}

export default Navicon;