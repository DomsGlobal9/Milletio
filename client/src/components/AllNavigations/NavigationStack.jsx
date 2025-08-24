import React from 'react'
import Navbar from '../Navbar/Navbar'
import Healthy from '../Healthy/Healthy'
import Hero from '../HeroSection/Hero'
import Brands from '../Brands/Brands'
import Benefits from '../Benefits/Benefits'
import Products from '../Products/Products'
import Reviews from '../Reviews/Reviews'
import Footer from '../Footer/Footer'
import FollowUs from '../FollowUs/FollowUs'
import "../../App.css"
// import Recipes from '../recipes/recipes'
import RecipeCard from '../Cards/RecipeCard'
import RecipeCarousel from '../recipes/recipes'

const NavigationStack = () => {
  return (
    <>
    <div className='Stacks'>
   <Navbar/>
   <Hero/>
   <Healthy/>
   <Brands/>
   <Benefits/>
   <Products/>
   {/* <RecipeCard/> */}
   <RecipeCarousel/>
   <Reviews/>
   <FollowUs/>
   <Footer/>
    </div>
   </>
  )
}

export default NavigationStack;