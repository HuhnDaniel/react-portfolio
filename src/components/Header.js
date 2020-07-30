import React from "react";
import { Link } from "react-router-dom";
import Navicon from "./Navicon";

function Header() {
    return (
        <header className="bg-gray-200">
            <div className="flex flex-row">
                <Link className="flex-auto text-center text-3xl p-4" to="/">Daniel Moody-Huhn</Link>
                <Navicon />
            </div>
        </header>
    );
}

export default Header;