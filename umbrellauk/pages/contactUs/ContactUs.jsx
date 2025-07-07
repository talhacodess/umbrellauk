import React, { useState } from 'react'
import bg from '../../src/assets/bg-contact.png'
import Button from '../../components/Button'
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Container from '../../components/Container';

function ContactUs() {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    <>
      <div className='h-auto bg-no-repeat bg-cover opacity-200 py-5' style={{ backgroundImage: `url(${bg})` }}>
       <Container>
         <div>
            <div className='max-w-[800px] mx-auto md:p-[50px] p-[20px] rounded-[8px] mt-10 shadow-[0_0_10px_0_rgba(122,122,122,.5)] bg-white'>
              <div className='flex flex-col justify-around items-center space-y-8'>
                <h2 className='md:text-[40px] text-[30px] font-semibold text-start'>Get In Touch</h2>
                <p className='text-[#77777] md:text-[14px] text-[13px] text-center'>
                  Umbrella Custom Packaging-The House of Proficient Printing & Distinct Featured Boxes. Umbrella Custom Packaging facilitates your business by providing innovative styled boxes in extraordinary design. We use the finest paper material and high quality cardboard to ensure perfect Die Cut boxes. You will get guaranteed satisfaction with high quality printing. Email Us With Any Questions or Inquires or Call Us. We would be happy to answer your questions and set up a meeting with you.
                </p>
              </div>

              <form action="" method="get">
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
                  <input
                    placeholder='Name'
                    className='text-[15px] rounded-[8px] border border-[#69727d] h-[40px] py-[8px] px-[16px]'
                  />
                  <input
                    type='email'
                    placeholder='Email'
                    className='text-[15px] rounded-[8px] border border-[#69727d] h-[40px] py-[8px] px-[16px]'
                  />
                  <input
                    placeholder='Phone Number'
                    className='text-[15px] rounded-[8px] border border-[#69727d] h-[40px] py-[8px] px-[16px]'
                  />
                  <input
                    placeholder='Company Name'
                    className='text-[15px] rounded-[8px] border border-[#69727d] h-[40px] py-[8px] px-[16px]'
                  />

                  {/* Styled Choose File Button */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-center w-full cursor-pointer border border-[#69727d] rounded-[8px] h-[40px] py-[8px] px-[16px] bg-[#293453] text-white text-[15px] font-medium hover:bg-[#293453] transition duration-200"
                    >
                      Choose File
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <p className="mt-2 text-sm text-gray-600">{fileName}</p>
                  </div>

                </div>

                <div className='mt-5'>
                  <textarea
                    rows={3}
                    className='w-full text-[15px] rounded-[8px] border border-[#69727d] py-[8px] px-[16px]'
                    placeholder='Your Message'
                  ></textarea>
                  <Button children={"Send"} className='w-full text-white' />
                </div>
              </form>
            </div>
          </div>

       </Container>
         
       
      </div>

      {/* Contact Info Cards */}
      <Container>
         <div className=' mt-10'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 bg-[#293453] p-5 rounded-[8px]'>
          <div className='grid grid-cols-1'>
            <div className='bg-[#fff] flex justify-center sm:flex-row flex-col items-center rounded-[8px] p-2 gap-10'>
              <div className='text-white flex justify-center items-center p-3 bg-[#293453] rounded-full'>
                <IoCallOutline size={40} />
              </div>
              <div className='flex flex-col justify-between'>
                <h5 className='text-3xl font-semibold'>Call Now</h5>
                <p>+1 747-247-0456</p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1'>
            <div className='bg-[#fff] flex sm:flex-row flex-col justify-center items-center rounded-[8px] p-2 gap-10'>
              <div className='text-white p-3 items-center bg-[#293453] rounded-full'>
                <MdOutlineMarkEmailRead size={40} />
              </div>
              <div className='flex flex-col justify-between items-start'>
                <h5 className='text-3xl font-semibold'>Email</h5>
                <p>info@umbrellapackaging.com</p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1'>
            <div className='bg-[#fff] flex sm:flex-row flex-col justify-center items-center rounded-[8px] p-2 gap-5'>
              <div className='text-white p-3 items-center bg-[#293453] rounded-full'>
                <IoLocationOutline size={40} />
              </div>
              <div className='flex flex-col justify-between items-start'>
                <h5 className='text-3xl font-semibold'>Location</h5>
                <p>9854 National Blvd #1042, Los Angeles, CA 90034, United States</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className='mt-5'>
          <iframe
            className='bg-[#f7f7f7] rounded-[8px] p-2'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.521941824463!2d-118.40357272390203!3d34.03048011887841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbbf80eec803%3A0x8425555061bf7fe8!2sUmbrella%20Custom%20Packaging%20USA!5e0!3m2!1sen!2s!4v1742941460574!5m2!1sen!2s"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      </Container>
     
    </>
  )
}

export default ContactUs
