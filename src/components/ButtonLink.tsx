import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonContext } from "../context";
import useButton from "../hooks/useButton";

export interface ButtonLinkProps {
    route: string;
    text: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ route, text }) => {
    //const { handleClick } = useButton(route);

    const { setShowNavButton } = useContext(ButtonContext);
    const navigate = useNavigate();

    const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setShowNavButton(true);
        navigate(route);
    };

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
