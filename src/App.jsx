
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





import Home from './pages/Home.jsx'
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import UserProfile from "./pages/UserProfile.jsx"
import Stroies from "./pages/Stroies.jsx"
import Video from "./pages/Video.jsx"


const App = () => {
  return (
    <>
    <div className="bg-gray-900 text-white min-h-screen">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/user-profile" element={<UserProfile/>}/>
        <Route path="/stories" element={<Stroies/>}/>
        <Route path="/video" element={<Video/>}/>
        
       
      </Routes>
     
     
      
      
    </div>
   
    
    </>
  )
}

export default App