import React from 'react'
import HeroSection from '../homepage/HeroSection'
import GoalSection from '../homepage/GoalSection'
import Dual from '../homepage/Dual'
import BlueSection from '../homepage/BlueSection'
import ReactSlider from '../homepage/ReactSlider'
import Features from '../homepage/Features'
import RounderImage from '../homepage/RounderImage'
import Reviews from '../homepage/Reviews'
import ImageSection from '../homepage/ImageSection'
import MobileMoneyImage from '../../assests/images/MobileMoneyImage.png'
import ShoppiongImage from '../../assests/images/ShoppingImage.png'
const HomePage = () => {
  return (
  
      <div className='mt-[50px]'>
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
