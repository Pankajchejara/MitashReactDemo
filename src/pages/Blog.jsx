
import React from "react";
import HomePageSection from "../components/blog/HomePageSection";
import BlogContainer from "../components/blog/BlogContainer";
import { Helmet } from 'react-helmet';
const Blog = () => {
  return (<>

    <Helmet>
      <title>Blog Page </title>
      <meta name="description" content="Explore our latest blogs covering a wide range of topics. Stay updated with the latest articles and insights." />
    </Helmet>
    <section>
      <div className="w-full mt-[150px]  md:mb-[100px]  flex  px-[16px]  sm:justify-center sm:items-center">
        <div className=" w-[1174px] mx-auto pt-[20px] px-[20px] lg:px-0 md:pb-[20px] bg-[#FFFFFF] rounded-none sm:rounded-[50px] shadow-[8px_8px_20px_#d4e7ff] ">
          <div className=" max-w-[852px] h-[198px] mx-auto">
            <h2 className="text-center AllTitle  text-[#000000]] text-[28px]  md:text-[48px] w-full">
              Blogs
            </h2>
            <p className=" text-[14px] sm:text-[18px] text-[#565656] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>
      </div>
    </section>
    <HomePageSection />
    <BlogContainer />
  </>
  );
};

export default Blog;