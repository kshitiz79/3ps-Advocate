import React from 'react'

import SlidingImages from './SliderImage'
import AboutUs from './AboutUs'
import PracticeAreas from './PracticeSection'
import WhyChooseUs from './ChooseUs'

import Features from './Features'
import Heighlights from './Heighlights'
import Testimonial from '../../components/Review/Testemonial'
const Home = () => {
  return (
    <>
  <div  >   <SlidingImages/></div>
  
    <AboutUs/>
    <PracticeAreas/>
    <WhyChooseUs/>
    <Features/>
<Heighlights/>
    <Testimonial/>
    </>
  )
}

export default Home