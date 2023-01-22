import React from "react";
import { ICompanyProduct } from "../../pages/Product";

const ProductCard = ({ logo, name, release }: ICompanyProduct) => {
    return (
        <div className="shadow-lg w-full md:w-64 md:mx-auto h-72 flex flex-col gap-y-3 justify-center items-center">
            <img
                loading="lazy"
                className="w-32 object-fill"
                src={logo}
                alt={name}
            />
            <h2 className="text-sky-700 font-bold">{name}</h2>
            <p>
                <span className="text-gray-700 underline">Release:</span>{" "}
                {release}
            </p>
        </div>
    );
};

export default ProductCard;
