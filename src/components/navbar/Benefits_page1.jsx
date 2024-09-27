import React from 'react'
import HeroSection from '../benefits/HeroSection'
import HeroSection2 from '../benefits/HeroSection2'
import HeroSection3 from '../benefits/HeroSection3'
import GrowSection from '../benefits/GrowSection'
import BlueSection from '../benefits/BlueSection'
import DualSection from '../benefits/DualSection'
import Acc from '../benefits/AccordionItem'
import Image from '../../assests/images/shutterstock_1570550179 2.png'
const Benefits_page1 = () => {
  return (
    <div className='mt-[50px] '>
      <HeroSection spanTitle={"Lorem ipsum "} title={"Lorem ipsum ipsum ipsum ipsum"}/>
      <HeroSection2 ImageProp={Image} overlap={true}/>   
      <HeroSection3/>  
      <GrowSection/>  
      <BlueSection title={"Lorem, it's ipsum dolar"} desc={"Introducing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est est venenatis erat, a tincidunt nisi libero vel turpis."}/> 

      <section>
      <DualSection 
  title={" with the ipsum sit dolor"} 
  spanTitle={"Lorem,"} 
  desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. App facit id in via facilissima!"} 
  bg={'#FFFFFF'} 
  direction={'flex-row'} 
/>

<DualSection 
  title={" of your ipsum lorem ipsum they lorem"} 
  spanTitle={"Lorem ipsum"} 
  desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. App facit id in via facilissima!"} 
  bg={'#E4F2FD'} 
  direction={'flex-row-reverse'} 
/>
      </section> 

      <Acc/>  
     
    </div>
  )
}

export default Benefits_page1
