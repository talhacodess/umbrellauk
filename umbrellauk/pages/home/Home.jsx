import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'
import banner from '../../src/assets/banner.png'
import shipping from '../../src/assets/free-shipping.png'
import customer from '../../src/assets/customer-support-1.png'
import secured from '../../src/assets/securd-payment-1.png'
import money from '../../src/assets/money-back-gurantee-1.png'
import windowboxes from '../../src/assets/Window-Boxes.webp'
import infographics from '../../src/assets/infographics-uk-1.webp'
import wicon1 from '../../src/assets/w-icon.png'
import wicon2 from '../../src/assets/w-icon2.png'
import wicon3 from '../../src/assets/w-icon3.png'
import wicon4 from '../../src/assets/w-icon4.png'
import wicon5 from '../../src/assets/w-icon5.png'
import wicon6 from '../../src/assets/w-icon6.png'
import gallery1 from '../../src/assets/gallery1.webp'
import gallery2 from '../../src/assets/gallery2.webp'
import gallery3 from '../../src/assets/gallery3.webp'
import gallery4 from '../../src/assets/gallery4.webp'
import gallery5 from '../../src/assets/gallery5.webp'
import gallery6 from '../../src/assets/gallery6.webp'
import gallery7 from '../../src/assets/gallery7.webp'
import gallery8 from '../../src/assets/gallery8.webp'
import gallery9 from '../../src/assets/gallery9.webp'
import strandard from '../../src/assets/standards-banner.webp'
import agent from '../../src/assets/call-agent.png'
import '../../styles/Home.css'
import Form from '../../components/multiForm/Form'
import ProductCard from '../../components/products/ProductCard'
import MaterialTabs from '../../components/MaterialTabs'
import { FaCircleNotch } from "react-icons/fa";
import { TbHandFingerRight } from "react-icons/tb";
import ProductPresentation from '../../components/ProductPresentation'
import TemplateSlider from '../../components/TemplateSlider'
import ProductionUnits from '../../components/ProductionUnits'
import InspirationGallery from '../../components/InspirationGallery'
import SimpleSteps from '../../components/SimpleSteps'
import Review from '../../components/reviews/Review'
import FaqCom from '../../components/FaqCom'
import { Link } from 'react-router-dom'
import Blogs from '../../components/blog/Blogs'

const categories = [
  { title: "Window Boxes", img: windowboxes,url:"/sub-catgory" },
  { title: "Window Boxes", img: windowboxes },
  { title: "Window Boxes", img: windowboxes },
  { title: "Window Boxes", img: windowboxes },
  { title: "Window Boxes", img: windowboxes },
  { title: "Window Boxes", img: windowboxes },
  { title: "Window Boxes", img: windowboxes },
  { title: "Window Boxes", img: windowboxes },
]

const galleryImages = [
  { img: gallery2 },
  { img: gallery1 },
  { img: gallery3 },
  { img: gallery5 },
  { img: gallery8 },
  { img: gallery6 },
  { img: gallery9 },
  { img: gallery7 },
  { img: gallery4 },
]

const email = <Link to={'mailto:sales@umbrellapackaging.com.'}>sales@umbrellapackaging.com.</Link>

function Home() {
  return (
    <>
      {/**Banner Section Start */}
      <div className='bg-[#293453] sm:py-[70px] py-[40px] px-2.5'>
        <Container>
          <div className='grid sm:grid-cols-2 grid-co     vls-1 justify-between items-center'>
            <div className='flex flex-col justify-center items-start space-y-6'>
              <h1 className='sm:text-[64px] text-[30px] font-semibold sm:leading-[73px] leading-[35px] text-[#fff]'>Custom packaging, simplified.</h1>
              <p className='sm:text-[18px] text-[14px] leading-[24px] text-[#fff]'>Streamline your packaging workflow and deliver incredible unboxing experiences every single time.</p>
              <Button children={"Explore Products"} className='bg-[#ff931e] text-[#fff]' />

            </div>
            <div className='flex justify-end'><img src={banner} alt="banner-main" className='w-full' /></div>

          </div>

        </Container>
      </div>
      {/**Banner Section End */}
      {/**Icons banner Start */}
      <div className='bg-[#f3f3f3]'>

        <Container>
          <div className='grid sm:grid-cols-4 p-2 grid-cols-2 gap-1'>
            <div className=' relative icon-banner '>
              <div className='flex sm:flex-row flex-col justify-center items-center gap-5 sm:text-start text-center'>
                <div className='w-4/12 flex justify-center sm:justify-end'><img src={shipping} width={60} height={45} alt="" /></div>
                <div className='w-8/12'>
                  <span className='text-[#293453]  sm:text-[18px]  text-[12px] font-semibold'>Free Shipping & Return</span>
                  <p className='sm:text-[14px] text-[10px] text-[#2e2e2d]  font-normal'>Free shipping on orders over $99</p>
                </div>

              </div>
            </div>
            <div className=' relative icon-banner '>
              <div className='flex sm:flex-row flex-col justify-center items-center gap-5 sm:text-start text-center'>
                <div className='w-4/12 flex justify-center sm:justify-end'><img src={customer} width={60} height={45} alt="" /></div>
                <div className='w-8/12'>
                  <span className='text-[#293453]  sm:text-[18px]  text-[12px] font-semibold'>Customer Support 24/7</span>
                  <p className='sm:text-[14px] text-[10px] text-[#2e2e2d]  font-normal'>Instant access to perfect support</p>
                </div>

              </div>
            </div>
            <div className=' relative icon-banner '>
              <div className='flex sm:flex-row flex-col justify-center items-center gap-5 sm:text-start text-center'>
                <div className='w-4/12 flex justify-center sm:justify-end'><img src={secured} width={60} height={45} alt="" /></div>
                <div className='w-8/12'>
                  <span className='text-[#293453]  sm:text-[18px]  text-[12px] font-semibold'>100% Secured Payment</span>
                  <p className='sm:text-[14px] text-[10px] text-[#2e2e2d]  font-normal'>We ensure secured Payment!</p>
                </div>

              </div>
            </div>
            <div className=' relative icon-banner '>
              <div className='flex sm:flex-row flex-col justify-center items-center gap-5 sm:text-start text-center'>
                <div className='w-4/12 flex justify-center sm:justify-end'><img src={money} width={60} height={45} alt="" /></div>
                <div className='w-8/12'>
                  <span className='text-[#293453] sm:text-[18px]  text-[12px] font-semibold'>Money Back Guarantee</span>
                  <p className='sm:text-[14px] text-[10px] text-[#2e2e2d]  font-normal'>We ensure secured Payment!</p>
                </div>

              </div>
            </div>

          </div>

        </Container>

      </div>
      {/**Icons banner End*/}
      {/**Categories section Start*/}
      <Container>
        <div className='text-center space-y-5 py-[50px]'>
          <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Discover Our Custom Packaging Variety</h2>
          <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Check out all the different types of boxes we have at Umbrella Custom Packaging! We have special categories for boxes that you can customize just the way you like. You get to choose whether it’s the size, the material, or how it looks. So, have a look and pick the perfect box for you!</p>

        </div>
        <div>
          <div className='grid sm:grid-cols-4 grid-cols-2 gap-3'>
            {categories.map((item, index) => {
              return <Link to={item.url}> <div className='text-center space-y-3'>
                <img src={item.img} alt={item.title} className='rounded-[10px] shadow' />
                <p className='sm:text-[17px] text-[12px] font-semibold uppercase'>{item.title}</p>
              </div>
              </Link>
            })}

          </div>
        </div>


      </Container>
      {/**Categories section End*/}
      {/**Form section Start*/}
      <div className='bg-[#f3f3f3]'>
        <Container>


          <div className='text-center space-y-5 py-[50px]'>
            <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Get Instant Price Quote</h2>
          </div>
          <Form />

        </Container>

      </div>

      {/**Form section End*/}
      {/**Products section Start*/}
      <div className='text-center space-y-5 py-[50px]'>
        <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Trending & Popular Products</h2>
        <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Explore Umbrella Custom Packaging’s wide variety of customizable boxes. Choose your ideal size, material, and design to create the perfect packaging solution.</p>
        <ProductCard />

      </div>
      {/**Products section End*/}
      {/**How it works section sTART*/}


      <div className='bg-[#f3f3f3] my-5 py-2'>
        <Container>
          <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center'>
            <div className=''>
              <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>How it works</h2>
              <div className='grid md:grid-cols-3 grid-cols-2 gap-4 mt-5'>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon1} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm'>No Die & Plate Charges</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon2} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm'>No Minimum Order Qty</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon3} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm'>Free Design</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon4} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm'>Quickest Turnaround</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon5} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm'>Cheapest Prices</h3>
                </div>
                <div className='shadow  rounded-lg p-5 flex flex-col justify-center items-center bg-white space-y-4 hover:shadow-xl cursor-auto'>
                  <img src={wicon6} width={60} height={45} alt="" />
                  <h3 className='font-semibold text-sm'>Free Shipping</h3>
                </div>

              </div>

            </div>
            <div className='flex justify-center items-center'><img src={infographics} alt="" width={560} height={670} /></div>

          </div>

        </Container>



      </div>

      {/**How it works section end*/}
      {/**Material Guide Start*/}
      <Container>
        <div className='text-center space-y-5 py-[50px]'>
          <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Custom Box Material Guide: Finding the Perfect Fit</h2>
          <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Let’s explore the Types of Materials for Your Unique Packaging.</p>

          {/** Material tabs */}
          <MaterialTabs />

        </div>

      </Container>
      {/**Material Guide end*/}
      {/**We Fulfil the standards Start*/}
      <div className='standard-bg'>
        <Container>
          <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-5'>

            <div className='flex justify-end items-center'>
              <img src={strandard} width={470} height={270} alt="" className='rounded-lg' />

            </div>
            <div className='space-y-4'>
              <h2 className='md:text-[35px] text-lg font-extrabold text-start uppercase leading-9 '><span className='text-[#FF931E]'>We Fulfil the standards</span> of the Packaging Industry.</h2>
              <p className='text-[#333333] md:text-lg text-sm text-left'>Umbrella Custom Packaging follows strict standards, much like a recipe, ensuring each box is the right size, crafted from top-quality materials, and designed to perfection. With attention to detail and quality control, they deliver custom boxes that are both reliable and customized to your preferences.</p>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-5  '>
                <div >
                  <div className='flex space-x-2 items-center mt-10'><FaCircleNotch /><span className='text-[16px]'>Select/provide the Box style</span></div>
                  <div className='flex space-x-2 items-center '> <FaCircleNotch /><span className='text-[16px]'>Provide the Box Dimensions/Size</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                </div>
                <div>
                  <div className='flex space-x-2 items-center mt-10'><FaCircleNotch /><span className='text-[16px]'>Select/provide the Box style</span></div>
                  <div className='flex space-x-2 items-center '> <FaCircleNotch /><span className='text-[16px]'>Provide the Box Dimensions/Size</span></div>
                  <div className='flex space-x-2 items-center group '><FaCircleNotch className=' group-hover:scale-125' /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                </div>
              </div>
            </div>

          </div>

        </Container>


      </div>
      {/**We Fulfil the standards  end*/}
      {/**Product Presentation Start*/}
      <div className='bg-[#f3f3f3]'>
        <Container>
          <div className='text-center space-y-5 py-[50px]'>
            <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Enhance Your Product Presentation with Our Special Packaging Features</h2>
            <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Give our new and creative packaging a try for your stuff! We’ve come up with cool add-ons options like embossing, debossing, silver and gold foiling, spot UV and holographic to make your products look awesome. It’s like dressing up your things in a special way. Just see how it makes your stuff stand out! Try it, and you’ll love how great your products can look!</p>

          </div>
          <ProductPresentation />
        </Container>

      </div>


      {/**Product Presentation end*/}
      {/**Box Template start*/}
      <Container>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 my-5'>
          <div>
            <TemplateSlider />
          </div>
          <div className='flex flex-col items-start justify-center space-y-5'>
            <h2 className='md:text-[36px] text-[25px] font-semibold  '>Need Box Template to design?</h2>
            <p className='text-[#333333] md:text-lg text-sm text-left'>Get a quick template file from us, where you can put your design and save some good time. You can also send us the artwork to input in a template and send it your way for your vision.<br />
              Making boxes just the right size, building creative structure, or enhance functionality is simple. Just Provide Following Information.</p>
            <div className='flex space-x-1 items-center mt-10'><TbHandFingerRight size={20} /><span className='text-[16px]'>Select/provide the Box style</span></div>
            <div className='flex space-x-1 items-center '><TbHandFingerRight size={20} /><span className='text-[16px]'>Provide the Box Dimensions/Size</span></div>
            <div className='flex space-x-1 items-center '><TbHandFingerRight size={20} /><span className='text-[16px]'>Share your additional thoughts</span></div>
          </div>


        </div>
      </Container>

      {/**Box Template end*/}
      {/**Production Units Start*/}
      <div className='bg-[#f7f7f7]'>
        <Container>
          <ProductionUnits />

        </Container>


      </div>
      {/**Production Units end*/}
      {/**Inspiration Start*/}
      <Container>
        <div className='text-center space-y-5 py-[50px]'>
          <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Inspiration for Creative Packaging</h2>
          <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Umbrella Custom Packaging loves thinking up innovative and cool ideas. Our design department designs stuff for us always tries to make packaging that’s super creative. They want it to be different and exciting, like making a surprise just for you! They believe in using clever ideas to make your things look amazing.</p>

        </div>

        <InspirationGallery galleryImages={galleryImages} />

      </Container>
      {/**Inspiration end*/}
      {/**Simple Steps Start*/}
      <div className='bg-[#f3f3f3]'>
        <Container>
          <div className='text-center space-y-5 py-[50px]'>
            <h2 className='sm:text-[36px] text-[25px] sm:leading-[40px] leading-[30px] font-semibold'>Simple Steps to get the Custom Packaging Produced</h2>
            <p className='sm:text-[18px] text-[14px]  leading-[25px] font-normal text-[#7a7a7a]'>Give our new and creative Following are few steps which provide the complete Guide.</p>

          </div>
          <SimpleSteps />
        </Container>

      </div>
      {/**Simple Steps end*/}
      {/**REVIEW SECTION START*/}
      <div className='py-10 bg-review'>
        <Container>
          <div className='space-y-3 flex  flex-col justify-center items-center mb-5'>
            <h2 className='md:text-[35px] text-lg font-extrabold text-start uppercase leading-9 '><span className='text-[#FF931E]'>Customer</span>  Reviews</h2>
            <p className='text-[#333333] md:text-lg text-sm text-left'>Real customer feedback to guide your purchase decisions.</p>

          </div>
          <Review />


        </Container>
      </div>
      {/**REVIEW SECTION end*/}
      {/**Top 10 Packaging Start*/}
      <div className='bg-[#f3f3f3]'>
        <Container>
          <div className="max-h-[600px] overflow-y-auto p-10">
            <h3 className='text-4xl font-semibold mb-5'>Top 10 Packaging Design Trends for 2024:</h3>
            <p className='text-lg font-medium leading-8 text-[#333333]'>Packaging has changed a lot since it first started as a way to keep things safe and move them around. Even though maintaining safe things is still important, some new and cool things are happening with packaging.<br />
              Now, in the year 2024, packaging is getting even better. This is because of new technology, what people like, and the need to care for our planet.
              When a new year starts, businesses need to know the newest ways to wrap up and protect their stuff. When you get new toys or clothes, you want them to be in the coolest and best packaging! <br />
              So, in 2024, packaging is changing because of new gadgets, what people prefer, and the important job of making sure we’re kind to our Earth. It’s like a race for businesses to keep up with the latest and greatest ways to wrap things up and make them look awesome! <br />
              Hey there! So, the packaging is like the cool wrapping around stuff we buy. Back in the day, it was to keep things safe, but now it’s doing much more! <br />
              <b>1. Good for Earth:</b> People are really into using materials that are good for the Earth. This is called the “sustainability movement,” it’s like a big team effort to take care of our planet. In 2024, more and more people and companies are choosing materials that are kind to the Earth. They might use plastics that can be used repeatedly, packaging made from plants, or things that can be recycled. Suppose a company decides to use these Earth-friendly materials for their packaging. In that case, it makes people who care about the environment happy. It’s like giving a thumbs up to businesses that are good for our planet! <br />

              <b>2. Simple and Earthy Designs:</b> Imagine the cool designs on your toys or snacks. Well, in 2024, they’re choosing easy designs that remind you of nature. It’s like using calm and nice colors, not too flashy. But it’s not just about looking pretty – it’s also a way of saying, “Hey, I want to take care of our Earth!” So, when you see simple and earthy designs, it’s like a little message from the company saying they care about our planet. <br />
              <b>3. Smart Packaging:</b> Some packages are like magic! They can talk to your phone or show you cool things using special codes or pictures. <br />
              <b>4. Ink and Printing Being Earth-Friendly:</b> Even the colors and pictures on packages, try to be kind to the Earth! In 2024, the people who make the ink and print things are changing how they do it. They’re using inks made from soy, like a plant, and methods that don’t hurt the environment. This is becoming popular because it helps make packaging without causing too much trouble for our planet. <br />
              <b>5. Packaging Fun:</b> Imagine when you open a box of your favorite things; it feels like starting a super cool adventure! In 2024, companies want it to be really fun and exciting when you open their packages. It’s not just about hiding what’s inside; they want you to have a great time when you discover what’s in there. So, it’s not just a box; it’s like opening up a surprise that makes you happy and excited! <br />
              <b>6. Your Special Package:</b> People like it when things feel special just for them. Imagine if the packaging on your favorite toys or snacks had your name or a cool design just for you! In 2024, companies will use information about you, like what you like and enjoy, to make unique packaging. They use fancy printing tricks with computers to create these special packages. Getting something with your name or a special design makes you feel important and happy. So, businesses are doing this to make customers feel extra special and valued. It’s like getting a present every time you open a box! <br />
              <b>7. See-Through Labels:</b> People like to know everything about what they’re buying. So, imagine if the labels tell you everything when you pick up your favorite snacks or toys! Like where it’s from, what’s inside, and if it’s good for the Earth. In 2024, brands realize that giving all this information builds customer trust. It’s like when someone is honest and tells you everything – you trust them more, right? So, companies are putting all the details on their labels to make customers happy and feel good about what they’re getting. It’s like being a detective and finding out all the cool facts about your favorite stuff! <br />
              <b>8. Easy to Close and Use Again:</b> Some packages can close again. So, if you don’t finish all the cookies, you can keep them fresh for later. Cool, right? <br />
              <b>9. Different and Cool Shapes:</b> Imagine if your cereal box wasn’t square but had a crazy shape. That’s what brands are doing now to make things more interesting. <br />
              <b>10. Earth-Friendly Shipping:</b> Taking care of our planet isn’t just for the stores; it’s also when things get sent to your home. In 2024, using materials and sending items good for the Earth are becoming super important. And companies are figuring out how to pack things in a way that only makes a little extra waste and it’s not too expensive to send. So, when you get a package, it’s like getting a little Earth-friendly present at your doorstep!</p> <br />
          </div>
        </Container>


      </div>
      {/**Top 10 Packaging end*/}
      {/**Frequently Asked Questions Start*/}
      <Container className='py-10'>
        <div className='bg-[#FFD7AC] h-[65px]  relative w-full rounded'><img src={agent} width={125} height={125} alt="" className=' absolute top-[-50%] right-[45%] ' /></div>
        <div className='my-10'>
          <h2 className='md:text-[35px] text-lg font-semibold  uppercase leading-9 text-center '>Frequently Asked Questions</h2>

        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <FaqCom title={"Do you offer Free Samples"} answer={"Yes, if you need any random samples to check the material and printing quality. If you need the samples of your customized box, we do not offer free samples or material kits."} />

            <FaqCom title={"How can I create my design"} answer={"All you need send us your artwork and we would provide you a 3D digital Mockup of your box along with a template."} />

            <FaqCom title={"Do you charge extra, based on the number of colors and ink coverage"} answer={"No, all the products are printed in full color at no extra charge."} />

            <FaqCom title={"What kind of custom packaging do you offer"} answer={
              <> Visit our Home Page to see the full range of what we are offering. Each custom packaging option has a free and easy-to-use online designer that’ll help you create attractive and unforgettable unboxing experiences. Don’t see what you’re looking for? Reach out to us at{" "}
                <Link to="mailto:sales@umbrellapackaging.com" className='hover:text-[#293453] text-[#FF931E]'>sales@umbrellapackaging.com</Link>.</>} />

            <FaqCom title={"Do you have a pick-up location"} answer={
              <>
                Yes, we do have a pick-up location but usually we ship the orders to the doorstep. please email us at <Link to="mailto:sales@umbrellapackaging.com" className='hover:text-[#293453] text-[#FF931E]'>sales@umbrellapackaging.com</Link> for more details.
              </>
            } />
          </div>
          <div>
            <FaqCom title={"How can I reorder"} answer={"Simply, contact to the same email you contacted last time and place your reorder."} />

            <FaqCom title={"What is the best way to contact you"} answer={
              <>Contact us via email any time <Link to={"mailto:sales@umbrellapackaging.com"} className='hover:text-[#293453] text-[#FF931E]'>sales@umbrellapackaging.com.</Link>  You can also DM us through Facebook or Instagram, where our team will get back to you within 24 – 48 business hours.</>
            } />

            <FaqCom title={"What is your MOQ? Do you print small order quantities"} answer={"Our MOQ is 100 boxes, yes we can offer less number of boxes for ordering."} />

            <FaqCom title={"Do you print larger order quantities?"} answer={<>Yes, we have the capability to print the orders as per client’s requirements.
              (100 – 500,000 – up to any number).</>} />

            <FaqCom title={"What if my artwork has gradients?"} answer={"Gradients are handled with care so to get the desired results in printing. Firstly, there are a few initial quick sample sheets are printed to verify so to move towards the bulk run."} />
          </div>

        </div>




      </Container>

      {/**Frequently Asked Questions end*/}
      {/**Blog Start*/}
      <Container>
        <div className='space-y-5'>
           <h2 className='md:text-[35px] text-lg font-semibold  uppercase leading-9 text-center '>Blog & News</h2>
           <Blogs/>
        </div>
      </Container>
      {/**Blog end*/}





    </>
  )
}

export default Home
