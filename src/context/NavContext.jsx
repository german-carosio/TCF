import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('/');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (location.pathname.startsWith('/recipes')) {
            setActiveLink('/recipes');
        } else if (location.pathname.startsWith('/tipos')) {
            setActiveLink('/tipos');
        } else if (location.pathname.startsWith('/benefits')) {
            setActiveLink('/benefits');
        } else if (location.pathname.startsWith('/about-us')) {
            setActiveLink('/about-us');
        } else if (location.pathname.startsWith('/blog')) {
            setActiveLink('/blog');
        } else if (location.pathname.startsWith('/contact')) {
            setActiveLink('/contact');
        } else {
            setActiveLink(location.pathname);
        }
    }, [location]);

    const handleNavLinkClick = (path) => {
        setActiveLink(path);
        setIsOpen(false);
    };

    return (
        <NavContext.Provider value={{ activeLink, handleNavLinkClick, isOpen, setIsOpen }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNavContext = () => useContext(NavContext);





