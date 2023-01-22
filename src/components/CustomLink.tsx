import React from "react";
import { Link } from "react-router-dom";

export interface CustomLinkProps {
    route: string;
    text: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ route, text }) => {
    return (
        <Link
            className="px-4 py-4 text-center text-white bg-sky-600 rounded-md mx-6"
            to={route}
        >
            {text}
        </Link>
    );
};

export default CustomLink;
