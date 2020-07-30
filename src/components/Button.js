import React from "react";

function Button({ to, newTab, text }) {
    if (newTab) {
        return (
            <div className="flex-auto text-center" id="resume-linkBtn">
                <a href={to} target="_blank" rel="noopener noreferrer">
                    {text}
                </a>
            </div>
        )
    } else {
        return (
            <div className="flex-auto text-center" id="resume-linkBtn">
                <a href={to}>
                    {text}
                </a>
            </div>
        )
    }
}

export default Button;