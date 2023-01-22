import React, { useState } from "react";

interface ContextProps {
    children: JSX.Element;
}

interface ContextType {
    showNavButton: boolean;
    setShowNavButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ButtonContext = React.createContext<ContextType>({
    showNavButton: false,
    setShowNavButton: () => {},
});

export const ButtonProvider: React.FC<ContextProps> = ({ children }) => {
    const [showNavButton, setShowNavButton] = useState(false);

    return (
        <ButtonContext.Provider
            value={{
                showNavButton,
                setShowNavButton,
            }}
        >
            {children}
        </ButtonContext.Provider>
    );
};
