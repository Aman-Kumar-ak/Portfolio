import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Hackathons from './pages/Hackathons'
import Courses from './pages/Courses'
import Certifications from './pages/Certifications'
import BottomCapsuleNav from './components/BottomCapsuleNav'

export default function App(){
  return (
    <>
      {/* Header removed as requested */}

      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Home/>}/>
          <Route path="/category/:slug" element={<Category/>}/>
          <Route path="/hackathons" element={<Hackathons/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/certifications" element={<Certifications/>}/>
        </Routes>
      </main>

      <BottomCapsuleNav/>
    </>
  );
}


