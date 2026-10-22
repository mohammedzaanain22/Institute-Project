
import {Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import CoursesPage from './pages/CoursesPage'
import CourseDetails from './pages/CourseDetails'
import Contact from './pages/Contact'




function App() {
  

  return (

    
    <div > 
   <Navbar/>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/CoursesPage" element={<CoursesPage/>}/>
    <Route path="/CoursesPage/:id" element={<CourseDetails/>}/>


    <Route path="*" element={<NotFound/>}/>

    </Routes>
    
    </div>
  )
}

export default App
