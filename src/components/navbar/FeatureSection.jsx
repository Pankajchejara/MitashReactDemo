import React from 'react'
import HeroSection2 from '../feature/HeroSection2'
import HeroSection3 from '../feature/HeroSection3'
import PigyBank from '../feature/PigyBank'
import LastSection from '../feature/LastSection'
import Image17 from '../../assests/images/image 17.png'
import HeroSection from '../benefits/HeroSection'
const FeatureSection = () => {
  return (<>
  <div >
     <HeroSection spanTitle={"Lorem ipsum "} title={"Lorem ipsum ipsum ipsum ipsum"}/>
<HeroSection2/>
<HeroSection3/>



<section>
      <div className={` bg-[#E4F2FD] py-[50px]`}>
      <div className={`  max-w-[1245px] min-h-[600px] mx-auto flex-col flex lg:flex-row justify-center items-center lg:items-start lg:justify-between lg:px-0 px-[50px]`}>
       <div className=' w-[300px] sm:w-[407px] '>
<img src={Image17} alt='loading' className='w-full h-full object-cover'/>
       </div>

       <div className=' w-full lg:w-[586px] h-auto mt-[50px] lg:h-[191px]'>
<h2 className=' text-[#1B7EF6]  text-[28px] sm:text-[42px] flex flex-row lg:flex-col AllTitle'><span className= 'text-[#181818]'> Lorem Ipsum</span> lorem ipsum</h2>
<p className=' text-[16px] sm:text-[18px] text-[#565656]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. App facit id in via facilissima!</p>
       </div>
      </div>
    </div>
      </section>
<PigyBank/>

<LastSection/>

  

 
  
</div>
 
  
  </>
  )
}

export default FeatureSection
