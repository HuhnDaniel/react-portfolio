import React from "react";
import Navigation from "./Navigation";

function Navicon() {
    return (
        <div className="flex-auto">
            <h1 className="text-center text-3xl font-semibold p-4 cursor-pointer md:hidden">☰</h1>
            <Navigation />
        </div>
    )
}

export default Navicon;