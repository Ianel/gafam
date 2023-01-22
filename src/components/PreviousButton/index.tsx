import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const PreviousButton = ({ route }: any) => {
    let navigate = useNavigate();

    return (
        <div
            className="flex items-center gap-x-4 text-sky-700 font-bold cursor-pointer"
            onClick={() => navigate(route)}
        >
            <span>
                <FaChevronLeft />
            </span>
            <span>Previous</span>
        </div>
    );
};
