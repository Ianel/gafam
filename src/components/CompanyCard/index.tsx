import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { ButtonContext } from "../../context";

interface ICompany {
    id: number;
    company: string;
    logo: string;
}

const CompanyCard = ({ logo, company, id }: ICompany) => {
    const navigate = useNavigate();
    const { showNavButton, setShowNavButton } = useContext(ButtonContext);

    const handleClick = () => {
        setShowNavButton(false);
        navigate(ROUTES.PRODUCT + "/" + id);
    };

    return (
        <button
            onClick={handleClick}
            className="shadow-lg flex flex-col justify-center items-center w-full h-96 p-6"
        >
            <img className="object-cover" src={logo} alt={company} />
            <h2>{company}</h2>
        </button>
    );
};

export default CompanyCard;