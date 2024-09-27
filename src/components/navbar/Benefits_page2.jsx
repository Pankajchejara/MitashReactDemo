import React from 'react'
import HeroSection2 from '../benefits/HeroSection2'
import Image from '../../assests/images/2 1.png'
import DualMobileSection from '../benefits/DualMobileSection'
import BlueSection from '../benefits/BlueSection'
import Image17 from '../../assests/images/image 17.png'
import HeroSection from '../benefits/HeroSection'
const Benefits_page2 = () => {
  return (
    <div className='mt-[50px]  '>
      <HeroSection spanTitle={"Lorem ipsum "} title={"Lorem ipsum ipsum ipsum ipsum"}/>
      <HeroSection2 ImageProp={Image} overlap={true} /> 



      <DualMobileSection/>  
      <section>
      <div className={` bg-[#E4F2FD] py-[50px]`}>
      <div className={`  max-w-[1245px] h-auto lg:h-[528px] mx-auto flex-col flex justify-center items-center lg:items-start lg:flex-row lg:justify-between lg:px-0 px-[50px]`}>
       <div className=' w-[300px] sm:w-[407px] '>
<img src={Image17} alt='loading' className='w-full h-full object-cover'/>
       </div>

       <div className=' w-full lg:w-[586px] h-auto mt-[50px] lg:h-[191px] '>
<h2 className='text-[#181818]  text-[28px] sm:text-[42px] AllTitle'><span className='text-[#1B7EF6] '> Lorem Ipsum</span> lorem ipsum</h2>
<p className=' text-[16px] sm:text-[18px] text-[#565656]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. App facit id in via facilissima!</p>
       </div>
      </div>
    </div>
      </section>

      <BlueSection
  direction="row-reverse" // or "row"
  title="Loremipu. Lorem easy way"
  desc="Introducing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
/>

 

      <section>
      <div 
      className={` justify-center items-center px-[16px]  py-10`} 
     
    >
      <div className="max-w-[1200px] mx-auto  flex-col lg:flex-row lg:h-[570px] flex justify-center  items-center lg:items-start  lg:justify-between px-[50px] lg:px-0 h-auto">
        
        <div className='w-[300px] sm:w-[430px] '>
          <img src={Image17} alt='loading image' className='w-full h-full object-cover' />
        </div>

        
        <div className=' w-full lg:w-[586px] mt-[50px]'>
          <h2 className=' text-[30px] sm:text-[42px]   AllTitle font-bold'>
          Lorem Ipsum do loremips. 
            <span className='text-[#1B7EF6]'> LoremIp, Lorem,</span> 
         <span></span>   or  <span></span>
            <span className='text-[#1B7EF6]'> any Lorem Ipsum</span> 
          </h2>
          <p className=' text-[16px] sm:text-[18px] text-[#565656]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. App facit id in via facilissima!</p>
        </div>

        
      </div>
    </div>
      </section>  



      


      
    </div>
  )
}

export default Benefits_page2
