import React from "react";
import Arrow from "../images/arrow.svg";

const MainButton = () => {
    const handleClick = () => {
        const element = document.getElementById("get-in-touch");
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <button onClick={handleClick} className={`main__button `} type="button">
            Get in touch
            <img src={Arrow} alt="Arrow" />
        </button>
    );
};

export default MainButton;
