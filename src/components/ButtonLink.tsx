import React from "react";
import useButton from "../hooks/useButton";

export interface ButtonLinkProps {
    route: string;
    text: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ route, text }) => {
    const { handleClick } = useButton(route);

    return (
        <button
            className="px-4 py-4 text-center text-white bg-sky-600 rounded-md mx-6"
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default ButtonLink;
