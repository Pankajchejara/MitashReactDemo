import React from 'react';
import BlogInfo from './BlogInfo'; // Make sure to create BlogInfo component

const BlogCard = ({ data }) => {
  return (
    <div className=' rounded-lg p-4 shadow hover:shadow-lg transition'>
      <BlogInfo data={data} />
    </div>
  );
};

export default BlogCard;