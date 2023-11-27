import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import Mission from './Components/About/Mission';
import Vision from './Components/About/Vision';
import OpenHours from './Components/About/OpenHours';
import Blog from './Components/About/Blog/Blog';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/about">About</Link>
            </li>
            
            <li>
              <Link to="/contact">
                  Contact
              </Link>
            </li>

            <li>
              <Link to="/blog/1">Blog Post 1</Link>
            </li>

            <li>
              <Link to="/blog/2">Blog Post 2</Link>
            </li>

            <li>
              <Link to="/blog/3">Blog Post 3</Link>
            </li>

            <li>
              <Link to="/blog/4">Blog Post 4</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* We are about to do a nested routing for the About page */}
          <Route path="/about" element={<About />}>
            <Route index element={<Mission />} />
            <Route path="mission" element={<Mission />}/>
            <Route path="vision" element={<Vision />} />
            <Route path="open-hours" element={<OpenHours />} />
          </Route>

          <Route path="/contact" element={<Contact />} />

          {/* Dynamic routing for the blog component */}
          <Route path="/blog/:postId" element={<Blog />} />

          {/* This is the 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
