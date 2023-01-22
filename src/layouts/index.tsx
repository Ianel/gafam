import React from "react";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

interface PageProps {
    children: JSX.Element;
}

const MainLayout: React.FC<PageProps> = ({ children }) => {
    const navigate = useNavigate();

    return (
        <div className="h-full w-full">
            <header
                className="p-5 text-xl uppercase text-sky-600 font-bold"
                onClick={() => navigate(ROUTES.HOME)}
            >
                Gafam
            </header>
            <hr />
            <main className="h-[87vh]">{children}</main>
            <hr />
            <footer className="text-sky-600 p-5 text-center">
                &copy; Copyright {new Date(Date.now()).getFullYear()} | All
                rights reserved
            </footer>
        </div>
    );
};

export default MainLayout;
