import React from "react";
import ButtonLink, { ButtonLinkProps } from "../../components/ButtonLink";
import * as ROUTES from "../../constants/routes";

const HomePage: React.FC = () => {
    const links = [
        {
            route: ROUTES.CEO,
            text: "CEO Overview",
        },
        {
            route: ROUTES.PRODUCTS,
            text: "Products",
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="flex flex-col gap-5 w-full">
                {links.map((link: ButtonLinkProps, index: number) => {
                    return <ButtonLink key={index} {...link} />;
                })}
            </div>
        </div>
    );
};

export default HomePage;
