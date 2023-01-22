import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import * as ROUTES from "../constants/routes";
import { ButtonContext } from "../context";

interface PageProps {
    children: JSX.Element;
}

const MainLayout: React.FC<PageProps> = ({ children }) => {
    const navigate = useNavigate();
    const { showNavButton, setShowNavButton } = useContext(ButtonContext);

    const handleClick = () => {
        setShowNavButton(false);
        navigate(ROUTES.HOME);
    };

    return (
        <div className="h-full w-full">
            <header className="p-5 flex items-center text-sky-600 gap-x-3">
                {showNavButton && (
                    <FaChevronLeft
                        className="font-bold"
                        onClick={handleClick}
                    />
                )}
                <h1
                    className=" text-xl uppercase font-bold"
                    onClick={() => navigate(ROUTES.HOME)}
                >
                    Gafam
                </h1>
            </header>
            <hr />
            <main className="p-5">{children}</main>
            <hr />
            <footer className="text-sky-600 p-5 text-center">
                &copy; Copyright {new Date(Date.now()).getFullYear()} | All
                rights reserved
            </footer>
        </div>
    );
};

export default MainLayout;
