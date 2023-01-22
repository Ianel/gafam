import React from "react";

interface PageProps {
    children: JSX.Element;
}

const MainLayout: React.FC<PageProps> = ({ children }) => {
    return (
        <div className="h-full w-full">
            <header className="p-5 text-xl uppercase text-sky-600 font-bold">
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
