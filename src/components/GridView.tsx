import React from "react";
import { ICEOS } from "../components/CEOCarousel";

const GridView = ({ CEOS }: ICEOS) => {
    return (
        <div className="md:flex hidden flex-wrap justify-center gap-5 lg:min-h-screen items-center">
            {CEOS &&
                CEOS.map((ceo, index) => {
                    return (
                        <div
                            key={ceo.value}
                            className="flex flex-col items-center"
                        >
                            <img
                                className="w-64 h-64 object-cover"
                                src={ceo.image}
                                alt={ceo.value}
                            />
                            <h3 className="font-bold mt-4">{ceo.value}</h3>
                            <p className="my-3 text-sky-700 font-bold">
                                {ceo.company}
                            </p>
                            <p className="text-sm">
                                <span className="text-gray-700 md:font-bold underline">
                                    Nationality:{" "}
                                </span>
                                <span className="text-gray-300 md:text-gray-500">
                                    {ceo.nationality}
                                </span>
                            </p>
                        </div>
                    );
                })}
        </div>
    );
};

export default GridView;
