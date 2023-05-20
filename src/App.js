
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import Authors from './Authors';
import FAQ from './Components/FAQ';
import Contact from './Components/Contact';
import Deshboard from './Components/Deshboard/Deshboard';
import BasicInfo from './Components/Deshboard/BasicInfo';
import AddBlog from './Components/Deshboard/AddBlog';
import AllBlogs from './Components/Deshboard/AllBlogs';
import WaitingBlog from './Components/Deshboard/WaitingBlog';
import Categorys from './Components/Deshboard/Categorys';
import Users from './Components/Deshboard/Users';
import Contactinfo from './Components/Deshboard/Contactinfo';
import BlogDetails from './Components/BlogDetails';
import Login from './Components/Authentication/Login';
import Registration from './Components/Authentication/Registration';
function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Blogs/>}/>
      <Route path='/blog-details/:id' element={ <BlogDetails/>}/>
      <Route path='/authors' element={ <Authors/>}/>
      <Route path='/faq' element={ <FAQ/>}/>
      <Route path='/contact' element={ <Contact/>}/>
      {/* Authentication */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/deshboard' element={ <Deshboard/>}>
      <Route index element={ <BasicInfo/>}/>
      <Route path='basic-info' element={ <BasicInfo/>}/>
      <Route path='add-blog' element={ <AddBlog/>}/>
      <Route path='blogs' element={ <AllBlogs/>}/>
      <Route path='waiting-blogs' element={ <WaitingBlog/>}/>
      <Route path='categorys' element={ <Categorys/>}/>
      <Route path='users' element={ <Users/>}/>
      <Route path='contactinfo' element={ <Contactinfo/>}/>
      </Route>
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
