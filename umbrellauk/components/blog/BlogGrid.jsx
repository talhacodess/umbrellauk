import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import img from '../../src/assets/blog-img.jpg'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BlogGrid() {
    const  [blogs, setBlogs] = useState([]);
    const {id} = useParams();
   useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response =  await axios.get(`http://localhost:5000/blogs`)
                setBlogs(response.data);

            }catch (error){
                console.error("Error fetching blogs:", error);
            }
        }
          fetchBlogs();
    },[id])
  

    
    return (
        <>
            {/**Main banner Blog Start */}
            <div className='bg-[#293453]'>
                <Container>
                    <div className=' rounded-[8px] p-5 h-[230px] flex flex-col justify-center items-center space-y-5 m-2'>
                        <h2 className='md:text-[43px] text-[30px] text-white font-semibold leading-10 text-center'>Blog
                            <span className='md:text-[43px] text-[30px] text-[#ff931e]'> & </span>News</h2>
                        <p className='text-white text-[17px] capitalize text-center'>Who we are, our values, mission, and vision.
                        </p>


                    </div>
                </Container>

            </div>
            {/**Main banner Blog end */}
            <Container>

                <div className='grid sm:grid-cols-3  grid-cols-1 gap-5 my-10'>
                    {blogs.map((blog, index) => {

                      return  <div className='flex flex-col justify-center items-center border border-[#D9D9D9] rounded-lg text-start   bg-[#f3f3f3] group'>
                            <div className=' overflow-hidden'>
                                <img src={blog.img} alt="" className='  transition-transform duration-500 group-hover:scale-110 group-hover:rounded-lg group-hover:opacity-100' />
                            </div>
                            <div className='p-3 text-center space-y-3'>
                                <h2 className='sm:text-2xl text-lg  font-semibold'>{blog.title}</h2>
                                <p className='text-[#333333] text-lg'>{blog.description}</p>
                                <Link to={`/single-blog/${blog._id}`}><p className='text-[#FF931E] font-semibold'>Continue Reading</p></Link>
                            </div>



                        </div>
                    })}


                </div>
            </Container>
        </>
    )
}

export default BlogGrid
