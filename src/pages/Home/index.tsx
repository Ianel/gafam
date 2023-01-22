import React from "react";
import ButtonLink, { ButtonLinkProps } from "../../components/ButtonLink";
import * as ROUTES from "../../constants/routes";
import homeFirst from "../../assets/images/home-1.jpg";
import homeSecond from "../../assets/images/home-2.jpg";

const HomePage: React.FC = () => {
    const links = [
        {
            route: ROUTES.CEO,
            text: "CEO Overview",
        },
        {
            route: ROUTES.COMPANY,
            text: "Products",
        },
    ];

    return (
        <>
            <div className="flex lg:hidden flex-col justify-around items-center h-full">
                <img
                    className="object-cover h-1/2"
                    src={homeFirst}
                    alt="Home Tech 1"
                    loading="lazy"
                />
                <div className="flex flex-col gap-y-5 w-full">
                    {links.map((link: ButtonLinkProps, index: number) => {
                        return <ButtonLink key={index} {...link} />;
                    })}
                </div>
                <img
                    className="object-cover h-1/2"
                    src={homeSecond}
                    loading="lazy"
                    alt="Home Tech 2"
                />
            </div>
            <div className="hidden lg:flex">
                <div className="flex-1">
                    <img
                        className="w-full object-cover"
                        src={homeFirst}
                        alt="Home Tech 1"
                        loading="lazy"
                    />
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="flex flex-col gap-y-5 w-full">
                        {links.map((link: ButtonLinkProps, index: number) => {
                            return <ButtonLink key={index} {...link} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
