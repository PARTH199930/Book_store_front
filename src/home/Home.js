import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBooks from './FavBooks'
import PromoBaner from './PromoBaner'
import OtherBooks from './OtherBooks'


const Home = () => {
  return (
    <div>
   
    <Banner />
    <BestSellerBooks />
    <FavBooks  />
    <PromoBaner />
    <OtherBooks />
    </div>
  )
}

export default Home
