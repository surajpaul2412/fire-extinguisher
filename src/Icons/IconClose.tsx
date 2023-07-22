import * as React from "react";
const IconClose = ({ onClick }: { onClick: () => void }) => (
    <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path d="M19.853 19.147 12.707 12l7.146-7.147a.5.5 0 0 0-.707-.707L12 11.293 4.853 4.147a.5.5 0 0 0-.707.707L11.293 12l-7.147 7.146a.5.5 0 1 0 .707.707L12 12.707l7.146 7.147a.498.498 0 0 0 .707 0 .5.5 0 0 0 0-.707z" />
    </svg>
);
export default IconClose;
