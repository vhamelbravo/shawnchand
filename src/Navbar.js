import React, {useState, useEffect } from 'react'
import insta from './assets/instagram.png'
import twitter from './assets/twitter.png'
import discord from './assets/discord.png'
import linkedin from './assets/linkedin.png'
import reddit from './assets/reddit.png'
import tiktok from './assets/tiktok.png'
import navHome from './assets/navHome.png'
import navAbout from './assets/navAbout.png'
import navBlog from './assets/navBlog.png'
import navPortfolio from './assets/navPortfolio.png'
import navContact from './assets/navContact.png'
import placeholder from './assets/placeholder.png'
import Modal from './Modal'
import {Link} from 'react-router-dom'
import './index.css'
function Navbar () {
	const [active, setActive] = useState(false)
	const toggle = () => {
	setActive(!active)
	
	} 
const [isVisible, setIsVisible] = useState(1)
	

	const handleClick = () => {
		if (isVisible === 1) {
		 setIsVisible(2) 
		} else if (isVisible === 2) {
		setIsVisible(3)}
		 else if (isVisible === 3) {
		setIsVisible(1)  
		}
		}


		  
	
	

return (
<>

	<input type="checkbox" className="navbar-mobile-checkbox hidden" /><p className="hidden text-white text-7xl navbar-mobile-button">  v</p> 
	<div className="navbar grid border-2 border-slate-400 w-[20rem] mx-[70%] my-[-25%] h-[30.5rem]">
	<h1 className="navbar-title text-white text-3xl translate-x-[2%] translate-y-[30%] font-bold"> Navigation </h1>
	<ul>
	<li> <Link to="/"> <p className="home-link text-white text-3xl translate-y-[50%] translate-x-[20%] hover:underline"> <img src={navHome} className="nav-home-img w-[36px] mx-[-13%] absolute" /> Home  </p> </Link> </li>
	<li> <Link to="/about"> <p className="about-link text-white text-3xl translate-y-[50%] translate-x-[20%] hover:underline"> <img src={navAbout} className="nav-about-img w-[36px] mx-[-13%] absolute" />  About  </p> </Link> </li>
	<li> <Link to="/blog"> <p className="blog-link text-white text-3xl translate-y-[50%] translate-x-[20%] hover:underline"> <img src={navBlog} className="nav-blog-img w-[36px] mx-[-13%] absolute" />  Blog  </p> </Link> </li>
	<li> <button onClick={toggle} className="portfolio-button"> <p className="portfolio-link text-white text-3xl translate-y-[50%] translate-x-[35%] hover:underline"> <img src={navPortfolio} className="nav-portfolio-img w-[36px] mx-[-23%] absolute" />  Portfolio  </p> </button> </li>

	
	<Modal className="modal" active={active} toggle={toggle}>
	<h1 className="portfolio-title text-cyan-500 text-9xl translate-y-[50%] translate-x-[25%] "> Portfolio </h1>
	<button onClick={handleClick} className="text-white portfolio-button-next  text-6xl translate-y-[1230%] translate-x-[1350%]"> V </button>
	{isVisible === 1 && ( 
		<>
	<h1 className="project-text project-text-1 text-white text-2xl translate-y-[800%] translate-x-[8%] "> Project 1 Name </h1>
	<p className="text-white project-subtext translate-y-[1200%] translate-x-[8%] "> Project Description </p>
	<button className="btn1 text-white border border-slate-400 rounded translate-y-[1630%] translate-x-[200%] scale-[200%] relative z-20 opacity-100 ">See More </button>
	<img src={placeholder} className="project-img project-img-1 relative img1 my-[-15%] scale-[40%] translate-x-[-28%] hover:opacity-50 " />
	<h1 className="project-text project-text-2 absolute text-white text-2xl translate-y-[-1250%] translate-x-[270%]"> Project 2 Name </h1>
	<p className="absolute project-subtext text-white translate-y-[-1380%] translate-x-[312%]"> Project Description </p>
	<button className="absolute btn2 text-white border border-slate-400 rounded scale-[200%] translate-y-[-700%] translate-x-[780%] z-20"> See More </button>
	<img src={placeholder} className="project-img project-img-2 relative img2 scale-[40%] my-[-68.5%] translate-x-[23%] hover:opacity-50" />
	<h1 className="project-text project-text-3 absolute text-white text-2xl my-[26.5%] translate-x-[485%] "> Project 3 Name </h1>
	<p className="absolute project-subtext text-white my-[31%] translate-x-[563%]  "> Project Description </p>
	<button className="absolute btn3 text-white border border-slate-400 rounded scale-[200%] z-20 my-[41%] translate-x-[1350%]   "> See More </button>
	<img src={placeholder} className="project-img project-img-3 relative img3 scale-[40%] my-[0.5%] mx-[50%] hover:opacity-50" />
		</>
	)}
	{isVisible === 2 && (
		                
		                <>
		                <h1 className="text-white portfolio-img-others text-2xl translate-y-[800%] translate-x-[8%] "> Project 4 Name </h1>
		                <p className="text-white project-subtext translate-y-[1200%] translate-x-[8%] "> Project Description </p>
		                <button className="btn1 text-white border border-slate-400 rounded translate-y-[1630%] translate-x-[200%] scale-[200%] relative z-20 opacity-100 ">See More </button>
		                <img src={placeholder} className="project-img relative img1 my-[-15%] scale-[40%] translate-x-[-28%] hover:opacity-50 " />
		                <h1 className="absolute text-white text-2xl translate-y-[-1250%] translate-x-[270%]"> Project 5 Name </h1>
		                <p className="absolute text-white project-subtext  translate-y-[-1380%] translate-x-[312%]"> Project Description </p>
		                <button className="absolute btn2 text-white border border-slate-400 rounded scale-[200%] translate-y-[-700%] translate-x-[780%] z-20"> See More </button>
		                <img src={placeholder} className="portfolio-img-others project-img relative img2 scale-[40%] my-[-68.5%] translate-x-[23%] hover:opacity-50" />
		                <h1 className="absolute text-white text-2xl my-[26.5%] translate-x-[485%]"> Project 6 Name </h1>
		                <p className="absolute text-white project-subtext  my-[31%] translate-x-[563%]"> Project Description </p>
		                <button className="absolute btn3 text-white border border-slate-400 rounded scale-[200%] z-20 my-[41%] translate-x-[1350%] "> See More </button>
	                        <img src={placeholder} className="project-img portfolio-img-others relative img3 scale-[40%] my-[0.5%] mx-[50%] hover:opacity-50" />
		                </>
		        )}
	{isVisible === 3 && (
		<>
		                                <h1 className="text-white text-2xl translate-y-[800%] translate-x-[8%] "> Project 7 Name </h1>
		                                <p className="text-white project-subtext translate-y-[1200%] translate-x-[8%] "> Project Description </p>
		                                <button className="btn1 text-white border border-slate-400 rounded translate-y-[1630%] translate-x-[200%] scale-[200%] relative z-20 opacity-100 ">See More </button>
		                                <img src={placeholder} className="project-img relative img1 my-[-15%] scale-[40%] translate-x-[-28%] hover:opacity-50 " />
		                                <h1 className="absolute text-white text-2xl translate-y-[-1250%] translate-x-[270%]"> Project 8 Name </h1>
		                                <p className="absolute project-subtext text-white translate-y-[-1380%] translate-x-[312%]"> Project Description </p>
		                                <button className="absolute project-button btn2 text-white border border-slate-400 rounded scale-[200%] translate-y-[-700%] translate-x-[780%] z-20"> See More </button>
		                                <img src={placeholder} className="project-img relative img2 scale-[40%] my-[-68.5%] translate-x-[23%] hover:opacity-50" />
		                                <h1 className="absolute text-white text-2xl my-[26.5%] translate-x-[485%]"> Project 9 Name </h1>
		                                <p className="absolute project-subtext text-white my-[31%] translate-x-[563%]"> Project Description </p>
		                                <button className="absolute btn3 project-button text-white border border-slate-400 rounded scale-[200%] z-20 my-[41%] translate-x-[1350%] "> See More </button>
		                                <img src={placeholder} className="project-img relative img3 scale-[40%] my-[0.5%] mx-[50%] hover:opacity-50" />
		
		                                </>

	)}




	</Modal>
	
	<li> <Link to="/services"> <p className="services-link text-white 500 text-3xl translate-y-[50%] translate-x-[20%] hover:underline">   Services  </p> </Link> </li>
	<li> <a href="mailto:shawn@shawnjc.ca"> <p className="contact text-white text-3xl translate-y-[50%] translate-x-[20%] hover:underline"> <img src={navContact} className="w-[36px] mx-[-13%] absolute" />  Contact  </p> </a> </li>
	<a href="https://instagram.com"> <img src={insta} id="insta" className="instagram h-fit absolute scale-[11%] translate-y-[-35%] translate-x-[-36%]" /> </a>
	<a href="https://twitter.com"> <img src={twitter} id="twitter" className="twitter h-fit absolute scale-[11%] translate-y-[-35%] translate-x-[-16%]" /> </a>
	<a href="https://discord.com/users/150504671033819136"> <img src={discord} className="discord h-fit scale-[18%] my-[-25%] translate-x-[33%]" /> </a>
	<a href="https://linkedin.com/in/shawnjasnalchand"> <img src={linkedin} className="linkedin h-fit absolute scale-[11%] my-[-13.5%] mx-[-9.5%] " /> </a>
	<a href="https://reddit.com"> <img src={reddit} className="reddit h-fit absolute scale-[11%] my-[-13.5%] mx-[-4.3%] " /> </a>
	<a className="h-fit" href="https://tiktok.com"> <img src={tiktok} className="tiktok h-fit absolute scale-[11.5%] my-[-13.1%] mx-[.5%] " /> </a>
	</ul>
	</div>
</>
)
}
export default Navbar
