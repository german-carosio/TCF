// AppRoutes.jsx

import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
const RecipeDetail = lazy(() => import('../pages/RecipeDetail')); // Importamos RecipeDetail

// Lazy loading de las páginas
const Home = lazy(() => import('../pages/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Recipes = lazy(() => import('../pages/Recipes'));
const Service1 = lazy(() => import('../pages/Service1'));
const Service2 = lazy(() => import('../pages/Service2'));
const Service3 = lazy(() => import('../pages/Service3'));
const Contact = lazy(() => import('../pages/Contact'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="recipes" element={<Recipes />} />
                    <Route path="service1" element={<Service1 />} />
                    <Route path="service2" element={<Service2 />} />
                    <Route path="service3" element={<Service3 />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="recipes/:recipeId" element={<RecipeDetail />} /> {/* Ruta para RecipeDetail */}
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;







