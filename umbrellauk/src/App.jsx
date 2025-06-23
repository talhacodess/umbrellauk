
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Home from '../pages/home/Home'
import CategoryPage from '../pages/category/CategoryPage'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sub-catgory' element={<CategoryPage/>} />

      
      </Routes>
    
    <Footer/>
    
    </>
  )
}

export default App
