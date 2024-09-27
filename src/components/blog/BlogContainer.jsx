import React, { useState } from 'react';

import {BlogData} from '../../assests/data';
import BlogCard from './BlogCard';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";






const BlogContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(BlogData.length / itemsPerPage);

  // Get the items for the current page
  const currentItems = BlogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Generate page number buttons with ellipsis
  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Always show the first page number
    pageNumbers.push(
      <button
        key={1}
        className={`px-4 py-2 mx-1 rounded ${
          currentPage === 1 ? ' text-black' : 'text-blue-600'
        }`}
        onClick={() => setCurrentPage(1)}
      >
        1
      </button>
    );

    // Show ellipsis if current page > 3
    if (currentPage > 3) {
      pageNumbers.push(
        <span key="left-ellipsis" className="px-2">...</span>
      );
    }

    // Show 2 buttons around the current page (if possible)
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-4 py-2 mx-1 rounded ${
            i === currentPage ? ' text-black' : 'text-blue-500'
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    // Show ellipsis if current page is less than totalPages - 2
    if (currentPage < totalPages - 2) {
      pageNumbers.push(
        <span key="right-ellipsis" className="px-2">...</span>
      );
    }

    // Always show the last page number
    pageNumbers.push(
      <button
        key={totalPages}
        className={`px-4 py-2 mx-1 rounded ${
          currentPage === totalPages ? ' text-black' : 'text-blue-500'
        }`}
        onClick={() => setCurrentPage(totalPages)}
      >
        {totalPages}
      </button>
    );

    return pageNumbers;
  };

  return (
    <div className='p-8 container mx-auto'>
      {/* Title */}
      <h1 className='text-2xl font-bold  mb-6'>All Blog Posts</h1>

      {/* Blog Cards Container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {currentItems.map((item) => (
          <BlogCard key={item.id} data={item} />
        ))}
      </div>

      {/* Pagination Container */}
      <div className='flex  border-t border-gray-300 justify-center items-center py-[20px] lg:justify-between mt-6'>
        {/* Previous Button */}
        <button
          className={`px-4 py-2 mx-2 ${
            currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
             <div className='flex gap-5 items-center'>
             <FaArrowLeft /> Previous
                 
            </div>
        
        </button>

        {/* Page Numbers */}
        <div className='flex'>{renderPageNumbers()}</div>

        {/* Next Button */}
        <button
          className={`px-4 py-2  ${
            currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
            <div className='flex gap-5 items-center'>
          Next <FaArrowRight />
                 
            </div>
        </button>
      </div>
    </div>
  );
};

export default BlogContainer;