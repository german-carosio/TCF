import React, { Suspense } from 'react';  // Importamos React y Suspense desde React
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';  // Importamos las rutas de la aplicación
import './App.css';  // Importamos los estilos globales

// Componente principal de la aplicación
function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>  {/* Suspense para manejar el lazy loading de las rutas */}
                <AppRoutes />  {/* Rutas de la aplicación */}
            </Suspense>
        </Router>
    );
}

export default App;  // Exportamos el componente principal de la aplicación






