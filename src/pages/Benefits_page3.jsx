import React from 'react'
import HeroSection2 from '../components/benefits/HeroSection2'
import Image from '../assests/images/Group 43248.png'
import FooterBanner from '../components/benefits/FooterBanner'
import Growsection2 from '../components/benefits/Growsection2'

import { Helmet } from 'react-helmet';
const Benefits_page3 = () => {
  return (
    <div className='mt-[100px]'>
      <Helmet>
        <title>Benefits Page 3 </title>
        <meta name="description" content="Learn more about Lorem Ipsum benefits on Benefits Page 3. Explore the Hero, Grow, and Footer Banner sections." />
      </Helmet>

      <section>
        <div className="w-full mt-[150px]  md:mb-[100px]  flex  px-[16px]  sm:justify-center sm:items-center">
          <div className=" w-[1174px] mx-auto pt-[20px] px-[20px] lg:px-0 md:pb-[20px] bg-[#FFFFFF] rounded-none sm:rounded-[50px] shadow-[8px_8px_20px_#d4e7ff] ">
            <div className=" max-w-[852px] h-[198px] mx-auto">
              <h2 className="text-center AllTitle  text-[#000000]] text-[28px]  md:text-[48px] w-full">
                LoremIpsum, <span className="text-[#1B7EF6]">Lorem & Ipsum</span>
              </h2>
              <p className=" text-[14px] sm:text-[18px] text-[#565656] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>
            </div>
          </div>
        </div>
      </section>

      <HeroSection2 overlap={false} ImageProp={Image} />
      <Growsection2 spanTitle={"Lorem-Ipsum"} title={" ips that ipsums with ipsum ips"} />
      <FooterBanner />
    </div>
  )
}

export default Benefits_page3
