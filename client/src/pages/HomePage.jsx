import React from 'react'
import Hero from '../components/HeroSection/Hero'
import Brands from '../components/Brands/Brands'
import Benefits from "../components/Benefits/Benefits"
import Reviews from '../components/Reviews/Reviews'
import Products from '../components/Products/Products'
import FollowUs from '../components/FollowUs/FollowUs'
import Recipes from '../components/Recipes/Recipes'
import { BestSeller } from '../components/BestSeller/BestSeller'
import ResponsiveHealthy from '../components/HealthyResponsive/HealthyResponsive'


const HomePage = () => {
  return (
    <>
    <Hero/>
   <ResponsiveHealthy/>
   <Brands/>
   <Benefits/>
   <Products/>
   <BestSeller/>
   <Recipes/>
   <Reviews/>
   <FollowUs/>
    </>
  )
}

export default HomePage;