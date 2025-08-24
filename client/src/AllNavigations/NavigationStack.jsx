
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { DataShare } from '../context/DataShare';
const HomePage = lazy(() => import('../pages/HomePage'));
const ProductDetails = lazy(() => import('../components/ProductDetials/ProductDetails'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const OrdersPage = lazy(() => import('../pages/OrdersPage'));
const CartPage = lazy(() => import('../pages/CartPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const LoadSpinner= lazy(()=> import("../components/Spinner/LoadSpinner"))
const ProfilePage= lazy(()=> import ("../components/Profile/Profile"))
const NavigationStack = () => {
  return (
    <Router>
      <DataShare>
      <Suspense fallback={<LoadSpinner />}>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/orders' element={<OrdersPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<FavoritePage />} />
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      <Footer />
      </Suspense>
      </DataShare>
    </Router>
  );
};

export default NavigationStack;
