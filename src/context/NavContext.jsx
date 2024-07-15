import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState('/');
    const [isOpen, setIsOpen] = useState(false);

    const handleNavLinkClick = (path) => {
        setActiveLink(path);
        setIsOpen(false); // Cierra el menú al hacer clic en un enlace
    };

    return (
        <NavContext.Provider value={{ activeLink, handleNavLinkClick, isOpen, setIsOpen }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNavContext = () => useContext(NavContext);



