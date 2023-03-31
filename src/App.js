import React from 'react'
import { BrowserRouter as Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './common/Navbar/Navbar'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import BlogSingle from './components/Blog/blog-single-page/BlogSingle'
import Destination from './components/Destination/Home'
import Gallery from './components/Gallery/Gallery'
import Home from './components/Pages/Home/Home'
import Singlepage from './SinglePage/Singlepage'
import Footer from "./common/Footer/Footer"
import Login from './components/Login/Login'
import Regiter from './components/Login/Regiter'
import Testimonail from './components/Testimonail/Testimonail'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <>    
        <Routes>
        <Navbar/>
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/gallery' exact component={Gallery}></Route>  
        <Route path='/destination' exact component={Destination}></Route>  
        <Route path='/singlepage/:id' exact component={Singlepage}></Route>  
        <Route path='/blog' exact component={Blog}></Route>  
        <Route path='/blogsingle/:id' exact component={BlogSingle}></Route> 
        <Route path='/testimonail' exact component={Testimonail}></Route>  
        <Route path='/contact' exact component={Contact}></Route>  
        <Route path='/sign-in' exact component={Login}></Route>  
        <Route path='/regiter' exact component={Regiter}></Route>  
        <Footer/>
        </Routes>
    </>
  )
}

export default App
