// src/routes/AppRoutes.jsx
import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import blogRoutes from '../data/blogRoutes';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import ReactGA from 'react-ga4'; //Google Analytics

const Home = lazy(() => import('../pages/Home'));
const Recipes = lazy(() => import('../pages/Recipes'));
const RecipeDetail = lazy(() => import('../pages/RecipeDetail'));
const RecipeCategory = lazy(() => import('../pages/RecipeCategory'));
const Tipos = lazy(() => import('../pages/Tipos'));
const TiposDetail = lazy(() => import('../pages/TiposDetail'));
const Benefits = lazy(() => import('../pages/Benefits'));
const BenefitDetail = lazy(() => import('../pages/BenefitDetail'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Blog = lazy(() => import('../pages/Blog'));
const Contact = lazy(() => import('../pages/Contact'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
      ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);
}

const AppRoutes = () => {

  usePageTracking();  // Llama al hook para registrar vistas de página

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/category/:categoryUrl" element={<RecipeCategory />} />
          <Route path="recipes/detail/:recipeId" element={<RecipeDetail />} />
          <Route path="tipos" element={<Tipos />} />
          <Route path="tipos/detail/:tiposId" element={<TiposDetail />} />
          <Route path="benefits" element={<Benefits />} />
          <Route path="benefits/detail/:benefitId" element={<BenefitDetail />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="blog" element={<Blog />} />
          {blogRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;















