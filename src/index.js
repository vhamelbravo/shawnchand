import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import './index.css';
import App from './App';
import About from './About'
import BlogPage from './BlogPage'
import Post from './Post'
import Services from './Services'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
	<Route path="" element={<App />} />
	<Route path="/about" element={<About />}/>
	<Route path="/blog" element={<BlogPage />} />
	<Route path="blog/:id" element={<Post />} /> 
	<Route path="/services" element={<Services />} />
	</Routes>
   </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
