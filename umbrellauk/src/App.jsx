
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Home from '../pages/home/Home'
import SingleProduct from '../pages/product/SingleProduct'
import CategoryPage from '../pages/category/CategoryPage'
import { Route, Routes } from 'react-router-dom'
import MainCat from '../pages/mainCategory/MainCat'
import Portfolio from '../pages/portfolio/Portfolio'
import AboutUs from '../pages/aboutus/AboutUs'
import ContactUs from '../pages/contactUs/ContactUs'
import FAQ from '../pages/FAQ'



function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sub-catgory' element={<CategoryPage/>} />
      <Route path='/main-cat' element={<MainCat/>} />
      <Route path='/single-product' element={<SingleProduct/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path='/contact-us' element={<ContactUs/>} />
      <Route path='/faq' element={<FAQ/>} />
      

      
      </Routes>
    
    <Footer/>
    
    </>
  )
}

export default App
