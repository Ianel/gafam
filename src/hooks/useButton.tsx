import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ({ route }: any) {
    let navigate = useNavigate();
    const [showBackButton, setShowBackButton] = useState(false);

    const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        console.log("Hi, useButton");

        setShowBackButton(true);
        navigate(route);
    };

    return { handleClick, showBackButton };
}
