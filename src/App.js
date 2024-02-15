import { BrowserRouter , Router , Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AfterEnroll from './pages/AfterEnroll';
import FAQ from './pages/FAQ';
import Admin from './pages/Admin';

import Error404 from './pages/Error404';
import Blog from './pages/Blog';

import BlogDetails from './pages/Blog-Details';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CoursesDetails from './pages/Courses-details';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Forgetpassword from './pages/Forget-password';
import Register from './pages/Register';
import List from './pages/List';
import Edit from './pages/Edit';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path="Home"element={<Home/>}/>
        <Route path="Profile"element={<Profile/>}/>
        <Route path="About"element={<About/>}/>
        <Route path="AfterEnroll"element={<AfterEnroll/>}/>
        <Route path="FAQ"element={<FAQ/>}/>
        <Route path="list"element={<List/>}/>
        <Route path='Edit'element={<Edit/>}/>
        <Route path="Admin"element={<Admin/>}/>
       <Route path='Dashboard'element={<Dashboard/>}/>
        
        <Route path="Error404"element={<Error404/>}/>
        <Route path="Blog"element={<Blog/>}/>
        <Route path="Blog-Details"element={<BlogDetails/>}/>
        <Route path="Contact"element={<Contact/>}/>
        <Route path="Courses"element={<Courses/>}/>
        <Route path="Courses-details"element={<CoursesDetails/>}/>
        <Route path="Login"element={<Login/>}/>
        <Route path="Forget-password"element={<Forgetpassword/>}/>
        <Route path="Register"element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
