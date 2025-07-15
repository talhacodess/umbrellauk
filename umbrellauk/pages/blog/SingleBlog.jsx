import React, { use, useEffect, useState } from 'react';
import banner from '../../src/assets/banner-blog.jpg';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { IoIosArrowDown } from "react-icons/io";
import related from '../../src/assets/related.jpg'
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Table of Contents Component
const TableOfContents = ({ open, toggle }) => (
  <div className='text-sm sticky top-0 border rounded-[8px] w-[280px] p-5 shadow z-30 bg-white'>
    <div className='flex justify-between items-center'>
      <span className='text-[18px] font-semibold'>Table of Contents</span>
      <button className='rounded-lg p-2' onClick={toggle}>
        <IoIosArrowDown />
      </button>
    </div>

    <div className={`transition-all duration-200 overflow-hidden ${open ? 'max-h-96 mt-3' : 'max-h-0'}`}>
      <ol className='space-y-2 list-decimal'>
        <li className='text-[16px] font-normal'>What Are Packaging Inserts?</li>
        <li className='text-[16px] font-normal'>Why Are Packaging Inserts Important?</li>
        <li className='text-[16px] font-normal'>How to Use Packaging Inserts?</li>
        <li className='text-[16px] font-normal'>Types of Packaging Inserts</li>
        <li className='text-[16px] font-normal'>Benefits of Packaging Inserts</li>
        <li className='text-[16px] font-normal'>Conclusion</li>
      </ol>
    </div>
  </div>
);


// Related Blogs Component
const RelatedBlogs = () => (
  <div>
    <h2 className='text-[18px] font-semibold'>Related Blogs</h2>
    <ul className='space-y-3 mt-5'>
      <li className='text-[16px] font-normal flex gap-2'><img src={related} alt="" className='w-30 h-24 rounded-2xl' />How to Create a Successful Packaging Design?</li>
     
    </ul>
  </div>
);

// Main SingleBlog Component
function SingleBlog() {
  const [openTable, setTableOpen] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  useEffect(()=>{
  axios.get(`http://localhost:5000/blogs/${id}`)
    .then(response => {
      setBlogs(response.data);
      setLoading(false);
      console.log('Blogs fetched successfully:', response.data);
    })
    .catch(error => {
      console.error('Error fetching blogs:', error);
    })

},[id]);

  return (
    <Container>
  
      <div className='grid grid-cols-12 gap-5'>
        {/* Main Blog Content */}
        <div className='col-span-12 md:col-span-9 space-y-5'>
          <h1 className='md:text-[35px] text-[22px] font-semibold'>{blogs.title}</h1>
          <img src={blogs.img} className='rounded-[8px]' alt="Packaging Inserts Banner" />
          <div className='flex justify-end'>
            <Button className='w-full text-white'>Get A Quote</Button>
          </div>

          <div className='space-y-4'>
            <p className='sm:text-[18px] text-[14px] leading-[25px] font-normal text-[#7a7a7a]'>{blogs.description}</p>
           
          </div>
        </div>

        {/* Sidebar */}
        <div className='col-span-12 md:col-span-3 space-y-5'>
          <TableOfContents open={openTable} toggle={() => setTableOpen(!openTable)} />
          <RelatedBlogs />
        </div>
      </div>
    </Container>
  );
}

export default SingleBlog;
