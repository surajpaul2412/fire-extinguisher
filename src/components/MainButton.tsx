import React from "react";
import Arrow from "../images/arrow.svg";

const MainButton = () => {
    return (
        <button className={`main__button `} type="button">
            Get in touch
            <img src={Arrow} alt="Arrow" />
        </button>
    );
};

export default MainButton;
