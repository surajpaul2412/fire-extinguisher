import React from "react";
import Arrow from "../images/Arrow.svg";

interface IButtonProps {
    onClick: () => void;
    buttonName: string;
    classes?: string;
}
const MainButton = ({ onClick, classes = "", buttonName }: IButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`main__button ${classes}`}
            type="button"
        >
            {buttonName}
            <img src={Arrow} alt="Arrow" />
        </button>
    );
};

export default MainButton;
