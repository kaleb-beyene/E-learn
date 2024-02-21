import { BrowserRouter , Router , Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AfterEnroll from './pages/AfterEnroll';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CoursesDetails from './pages/Courses-details';
import Login from './pages/Login';

import Studentcourse from './pages/Studentcourse';
import Register from './pages/Register';
import List from './pages/List';
import Edit from './pages/Edit';
import Coursedash from './pages/Coursedash';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path="Home"element={<Home/>}/>
        <Route path="About"element={<About/>}/>
        <Route path="AfterEnroll"element={<AfterEnroll/>}/>
        <Route path="list"element={<List/>}/>
        <Route path='Edit'element={<Edit/>}/>
        <Route path="Admin"element={<Admin/>}/>
        <Route path='Studentcourse'element={<Studentcourse/>}/>
        <Route path="Courses"element={<Coursedash/>}/>
        <Route path='Dashboard'element={<Dashboard/>}/>
        <Route path="Contact"element={<Contact/>}/>
        <Route path="Courses"element={<Courses/>}/>
        <Route path="Courses-details"element={<CoursesDetails/>}/>
        <Route path="Login"element={<Login/>}/>
        <Route path="Register"element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
