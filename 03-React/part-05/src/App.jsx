import { useState } from 'react'
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Profile from './Profile';
import NotFound from './NotFound';
import Form2 from './Form2';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Router>
      {/* navbar */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home </Link>
        <Link to="/about" style={{ margin: "0 10px" }}>About </Link>
        <Link to="/profile/Razan" style={{ margin: "0 10px" }}>Profile </Link>
        <Link to="/form" style={{ margin: "0 10px" }}>Form </Link>
      </nav>


      {/* routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile/:username" element={<Profile/>} />
        <Route path="/form" element={<Form2/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </Router>


    </>
  )
}

export default App
