import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
const RecipeDetail = lazy(() => import('../pages/RecipeDetail')); 
const Home = lazy(() => import('../pages/Home'));
const Tipos = lazy(() => import('../pages/Tipos'));
const Recipes = lazy(() => import('../pages/Recipes'));
const Contact = lazy(() => import('../pages/Contact'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));
const RecipeCategory = lazy(() => import('../pages/RecipeCategory'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="tipos" element={<Tipos />} />
                    <Route path="recipes" element={<Recipes />} />
                    <Route path="recipes/category/:categoryUrl" element={<RecipeCategory />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="recipes/:recipeId" element={<RecipeDetail />} /> 
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;










