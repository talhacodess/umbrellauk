import React from 'react'
import banner from '../../src/assets/banner-blog.jpg'
import Button from '../../components/Button'
import TableOfContent from './TableOfContent'
import Container from '../../components/Container'

function SingleBlog() {
  return (
    <>
    <Container >
      
      <div className='flex gap-5 md:flex-row flex-col'>

        <div className='md:w-8/12 w-full space-y-5'>
          <h1 className='md:text-[35px] text-[22px] font-semibold leading-5'>What Are Packaging Inserts? </h1>
          <img src={banner} className='rounded-[8px]' alt="" />
          <div className='flex items-end justify-end'>

            <Button children={"Get A Quote"} className='w-72' />
          </div>

          <p className='text-[16px] text-[#333333]'>
            Packaging inserts are extra items that companies put inside a package along with the main product. These inserts include thank-you notes, discount coupons, free samples, instruction manuals, or even small gifts. Companies add them to make customers happy, provide helpful information, and encourage people to buy again. <br /><br />

            Moreover, packaging inserts also play an important role in social marketing because they help customers connect with your brand across different platforms. As a result, more people can discover your brand, which increases visibility and attracts new customers.<br /><br />

            Finally, custom packaging inserts make the unboxing experience even more exciting. High-quality packaging and personalized inserts create a special moment for customers when they open their package. Not only does this help businesses keep their customers happy and encourage repeat purchases, but it boosts marketing efforts.<br /><br />

          </p>


        </div>
        <div className='md:w-4/12 w-full'>
          <div>
            <TableOfContent />
          </div>


        </div>

      </div>
      <div className=''>


      </div>


    </Container>
   
    </>
  )
}

export default SingleBlog
