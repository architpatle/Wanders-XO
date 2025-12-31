import React from 'react'
import Hero from '../../components/Hero/Hero.jsx'
import Difference from '../../components/Difference/Difference.jsx'
import PopularDestinations from '../../components/PopularDestinations/PopularDestinations.jsx'
import BookingSteps from '../../components/BookingSteps/BookingSteps.jsx'
import Specializations from '../../components/Specializations/Specializations.jsx'

const Home = () => {
    return (
        <div>

        <Hero/>
        <Difference />
        <PopularDestinations />
        <BookingSteps />
        <Specializations />
        </div>
    )
}

export default Home