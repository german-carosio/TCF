import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
const RecipeDetail = lazy(() => import('../pages/RecipeDetail')); 
const Home = lazy(() => import('../pages/Home'));
const Recipes = lazy(() => import('../pages/Recipes'));
const RecipeCategory = lazy(() => import('../pages/RecipeCategory'));
const Tipos = lazy(() => import('../pages/Tipos'));
const Benefits = lazy(() => import('../pages/Benefits'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Blog = lazy(() => import('../pages/Blog'));
const Contact = lazy(() => import('../pages/Contact'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="recipes" element={<Recipes />} />
                    <Route path="recipes/category/:categoryUrl" element={<RecipeCategory />} />
                    <Route path="recipes/detail/:recipeId" element={<RecipeDetail />} /> 
                    <Route path="tipos" element={<Tipos />} />
                    <Route path="benefits" element={<Benefits />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;










