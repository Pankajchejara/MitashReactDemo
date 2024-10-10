import React from 'react'
import HeroSection from '../components/homepage/HeroSection'
import GoalSection from '../components/homepage/GoalSection'
import Dual from '../components/homepage/Dual'
import BlueSection from '../components/homepage/BlueSection'
import ReactSlider from '../components/homepage/ReactSlider'
import Features from '../components/homepage/Features'
import RounderImage from '../components/homepage/RounderImage'
import Reviews from '../components/homepage/Reviews'
import ImageSection from '../components/homepage/ImageSection'
import MobileMoneyImage from '../assests/images/MobileMoneyImage.png'
import ShoppiongImage from '../assests/images/ShoppingImage.png'
import { Helmet } from 'react-helmet';
const HomePage = () => {
  return (
  
      <div className='mt-[50px]'>

<Helmet>
        <title>Home Page </title>
        <meta
          name="description"
          content="Welcome to our homepage! Discover the features of our platform, including goal tracking, dual section demos, interactive sliders, and user reviews. Explore the tools that help manage daily tasks efficiently."
        />
      </Helmet> 
      <HeroSection/>        
<GoalSection/>  

      <BlueSection/> 
       <section>
        <div  >
        <Dual title={"Laboris et officia deserunt"} width={498} height={605} desc={'Setta officia aut labore pro vestri liberi mensili, weekly, vel etiam quotidie! Docete vestra liberi per praemia pro eorum conatibus. Assigna officia et solvere liberos tuos cum finitum est. Cito discunt per experientiam'}  direction={'flex-row'} image={MobileMoneyImage} />
        <Dual  title={`Vide et controla tua liberos et adolescentes expensas`} width={488} height={452} desc={'Setta officia aut labore pro vestri liberi mensili, weekly, vel etiam quotidie! Docete vestra liberi per praemia pro eorum conatibus. Assigna officia et solvere liberos tuos cum finitum est. Cito discunt per experientiam'} direction={'flex-row-reverse'} image={ShoppiongImage}/>
        </div>
     
       </section>   

      <ReactSlider/>
      <Features/>  
      <RounderImage/>  
      
      <Reviews/>  
      
      <ImageSection/>  
    
      </div > 
    
  )
}

export default HomePage
