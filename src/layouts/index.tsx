import React from "react";

interface PageProps {
    children: JSX.Element;
}

const MainLayout: React.FC<PageProps> = ({ children }) => {
    return (
        <div className="h-full w-full bg-slate-500">
            <header className="p-5 text-xl uppercase bg-violet-400">
                Gafam
            </header>
            <main className="h-screen">{children}</main>
            <footer className="bg-green-500 p-5 text-center">
                &copy; Copyright {new Date(Date.now()).getFullYear()} | All
                rights reserved
            </footer>
        </div>
    );
};

export default MainLayout;
