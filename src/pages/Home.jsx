import React from 'react'
import Welcome from '../components/Welcome'
import Festival from '../components/Festival'
import Wooden from '../components/Wooden'
import Products from '../components/Products'
import LatestDeal from '../components/LatestDeal'
import Trending from '../components/Trending'
import Testimonial from '../components/Testimonials'

const Home = () => {
    return (
        <div>
            <Welcome />
            <Trending />
            <Wooden />
            <Products />
            <LatestDeal />
            <Festival />
            <Testimonial />
        </div>
    )
}

export default Home