import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/Navbar/Navbar';  // Importamos el componente de navegación
import Footer from '../partials/Footer/Footer';  // Importamos el componente de pie de página
import '../App.css';  // Importamos los estilos globales

// Componente de diseño principal
const Layout = () => {
    return (
        <div>
            <Navbar />  {/* Componente de navegación */}
            <main className='main'>
                <Outlet />  {/* Outlet para renderizar las subrutas */}
            </main>
            <Footer />  {/* Componente de pie de página */}
        </div>
    );
};

export default Layout;  // Exportamos el componente de diseño principal