
import React from "react";
import HomePageSection from "../blog/HomePageSection";
import BlogContainer from "../blog/BlogContainer";

const Blog = () => {
  return (<>
   <section>
        <div className="w-full container mx-auto    flex sm:justify-center sm:items-center">
      <div className=" w-[1000px]  sm:px-[5px] bg-[#FFFFFF] rounded-[30px] shadow-[8px_8px_20px_#d4e7ff] pt-[20px] px-[50px] mx-[50px] my-[100px] h-auto">
        <div className="pb-[30px] max-w-[900px] flex-col h-auto gap-y-2 flex items-center lg:mx-auto">
          <h2 className="text-center AllTitle   text-[15px] sm:text-[28px] md:text-[30px] lg:text-[48px] w-full">
           Blogs
          </h2>
          <p className="text-[10px] sm:text-[12px] w-full sm:w-full  md:text-[14px] lg:text-[18px] text-[#565656] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. App facit id in via facilissima!
          </p>
        </div>
      </div>
    </div>
        </section>
    <HomePageSection/>
    <BlogContainer/>
    </>
  );
};

export default Blog;