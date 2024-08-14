import React, { Suspense } from 'react';  // Importamos React y Suspense desde React
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';  // Importamos las rutas de la aplicación
import { RecipesProvider } from './context/RecipesContext';
import './App.css';  // Importamos los estilos globales
import { NavProvider } from './context/NavContext'; // Importa el proveedor del contexto
import ReactGA from 'react-ga4';  // Importa ReactGA

// Inicializa Google Analytics
ReactGA.initialize('G-Y2X7QJWHNN');  // Reemplaza con tu ID de medición

// Componente principal de la aplicación
function App() {
    return (
        <Router>
             <NavProvider>
            <RecipesProvider>
                <Suspense fallback={<div>Loading...</div>}>  {/* Suspense para manejar el lazy loading de las rutas */}
                    <AppRoutes />  {/* Rutas de la aplicación */}
                </Suspense>
            </RecipesProvider>
            </NavProvider>
        </Router>
    );
}

export default App;  // Exportamos el componente principal de la aplicación






