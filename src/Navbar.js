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

	<div className="flex justify-end">
	</div>
	<div className="flex flex-row justify-end translate-y-[-90%] pr-[5%] h-[30rem]">
	<input type="checkbox" className="navbar-mobile-checkbox hidden" /><p className="hidden text-white text-7xl navbar-mobile-button">  v</p> 
	<div className="navbar  border-2 border-slate-400 w-[20rem] h-[30rem] ">
	<h1 className="navbar-title text-white text-3xl translate-x-[2%] translate-y-[30%] font-bold"> Navigation </h1>
	<ul>
	<li> <Link to="/"> <p className="navbar-links home-link text-white text-3xl translate-y-[50%] translate-x-[20%] hover:underline"> <img src={navHome} className="nav-home-img w-[36px] translate-x-[-112%] absolute" /> Home  </p> </Link> </li>
	<li> <Link to="/about"> <p className="navbar-links about-link text-white text-3xl translate-y-[50%] translate-x-[20%] hover:underline"> <img src={navAbout} className="nav-about-img w-[36px] translate-x-[-112%] absolute" />  About  </p> </Link> </li>
	<li> <Link to="/blog"> <p className="navbar-links blog-link text-white text-3xl translate-y-[50%] translate-x-[20%] hover:underline"> <img src={navBlog} className="nav-blog-img w-[36px] translate-x-[-112%] absolute" />  Blog  </p> </Link> </li>
	<li> <button onClick={toggle} className="portfolio-button"> <p className="navbar-links portfolio-link text-white text-3xl translate-y-[50%] translate-x-[35%] hover:underline"> <img src={navPortfolio} className="nav-portfolio-img w-[36px] translate-x-[-112%] absolute" />  Portfolio  </p> </button> </li>
	<Modal active={active} className="modal" toggle={toggle}>

	<h1 className="portfolio-title text-cyan-500 text-9xl translate-y-[50%] translate-x-[25%] "> Portfolio </h1>
	        <button onClick={handleClick} className="portfolio-button-next text-white text-6xl translate-y-[1230%] translate-x-[1350%]"> V </button>
	        {isVisible === 1 && (
			                <>
			                <h1 className="project-text-1 project-text text-white text-2xl translate-y-[800%] translate-x-[8%] "> Project 1 Name </h1>
			                <p className="project-subtext text-white translate-y-[1200%] translate-x-[8%] "> Project Description </p>
			                <button className="btn1 text-white border border-slate-400 rounded translate-y-[1630%] translate-x-[200%] scale-[200%] relative z-20 opacity-100 ">See More </button>
			                <img src={placeholder} className="project-img project-img-1 relative img1 scale-[40%] my-[-15%] translate-x-[-28%] hover:opacity-50 " />
			                <h1 className="project-text project-text-2 absolute text-white text-2xl translate-y-[-1250%] translate-x-[270%]"> Project 2 Name </h1>
			                <p className="absolute project-subtext project-subtext-2 text-white translate-y-[-1380%] translate-x-[312%]"> Project Description </p>
			                <button className="absolute btn2 text-white border border-slate-400 rounded scale-[200%] translate-y-[-700%] translate-x-[780%] z-20"> See More </button>
			                <img src={placeholder} className="project-img project-img-2 relative  img2 scale-[40%] my-[-68.5%] translate-x-[23%] hover:opacity-50" />
			                <h1 className="project-text project-text-3 absolute text-white text-2xl my-[26.5%] translate-x-[485%]"> Project 3 Name </h1>
			                <p className="absolute project-subtext text-white my-[31%] translate-x-[563%]"> Project Description </p>
			                <button className="absolute btn3 text-white border border-slate-400 rounded scale-[200%] z-20 my-[41%] translate-x-[1350%]"><p className="hover:underline"> See More </p> </button>
			                <img src={placeholder} className="project-img project-img-3 relative img3 scale-[40%] my-[0.5%] mx-[50%] hover:opacity-50" />
			                </>
			        )}
	        {isVisible === 2 && (
			                <>
			                <h1 className="text-white project-text-1 text-2xl translate-y-[800%] translate-x-[8%] "> Project 4 Name </h1>
			                <p className="text-white translate-y-[1200%] translate-x-[8%] "> Project Description </p>
			                <button className="btn1 text-white border border-slate-400 rounded translate-y-[1630%] translate-x-[200%] scale-[200%] relative z-20 opacity-100 ">See More </button>
			                <img src={placeholder} className="relative img1 project-img-1 scale-[40%] my-[-15%] translate-x-[-28%] hover:opacity-50 " />
			                <h1 className="absolute project-text-2 text-white text-2xl translate-y-[-1250%] translate-x-[270%]"> Project 5 Name </h1>
			                <p className="absolute text-white translate-y-[-1380%] translate-x-[312%]"> Project Description </p>
			                <button className="absolute btn2 text-white border border-slate-400 rounded scale-[200%] translate-y-[-700%] translate-x-[780%] z-20"> See More </button>
			<img src={placeholder} className="relative  img2 project-img-2 scale-[40%] my-[-68.5%] translate-x-[23%] hover:opacity-50" />
			                <h1 className="project-text-3 absolute text-white text-2xl my-[26.5%] translate-x-[485%]"> Project 6 Name </h1>
			                <p className="absolute text-white my-[31%] translate-x-[563%]"> Project Description </p>
			                <button className="absolute btn3 text-white border border-slate-400 rounded scale-[200%] z-20 my-[41%] translate-x-[1350%] "> See More </button>
			                <img src={placeholder} className="relative img3 project-img-3 scale-[40%] my-[0.5%] mx-[50%] hover:opacity-50" />
			                </>
			        )}
	        {isVisible === 3 && (
			                                <>
			                                                                <h1 className="project-text-1 text-white text-2xl translate-y-[800%] translate-x-[8%] "> Project 7 Name </h1>
			                                                                <p className="text-white translate-y-[1200%] translate-x-[8%] "> Project Description </p>
			                                                                <button className="btn1 text-white border border-slate-400 rounded translate-y-[1630%] translate-x-[200%] scale-[200%] relative z-20 opacity-100 ">See More </button>
			                                                                <img src={placeholder} className="project-img-1 relative img1 my-[-15%] scale-[40%] translate-x-[-28%] hover:opacity-50 " />
			                                                                <h1 className="project-text-2 absolute text-white text-2xl translate-y-[-1250%] translate-x-[270%]"> Project 8 Name </h1>
			                                                                <p className="absolute text-white translate-y-[-1380%] translate-x-[312%]"> Project Description </p>
			                                                                <button className="absolute btn2 text-white border border-slate-400 rounded scale-[200%] translate-y-[-700%] translate-x-[780%] z-20"> See More </button>
			                                                                <img src={placeholder} className="project-img-2 relative img2 scale-[40%] my-[-68.5%] translate-x-[23%] hover:opacity-50" />
			                                                                <h1 className="project-text-3 absolute text-white text-2xl my-[26.5%] translate-x-[485%]"> Project 9 Name </h1>
			                                                                <p className="absolute text-white my-[31%] translate-x-[563%]"> Project Description </p>
			                                                                <button className="absolute btn3 text-white border border-slate-400 rounded scale-[200%] z-20 my-[41%] translate-x-[1350%] "> See More </button>
			                                                                <img src={placeholder} className="project-img-3 relative img3 scale-[40%] my-[0.5%] mx-[50%] hover:opacity-50" />
			                                                                </>

			                        )}
	        </Modal>
	<li> <Link to="/services"> <p className="navbar-links services-link text-white 500 text-3xl translate-y-[50%] translate-x-[20%] hover:underline"> <img src={navAbout} className="nav-about-img w-[36px] translate-x-[-112%] absolute" />    Services  </p> </Link> </li>
	<li> <a href="mailto:shawn@shawnjc.ca"> <p className="navbar-links contact text-white text-3xl translate-y-[50%] translate-x-[20%] hover:underline"> <img src={navContact} className="nav-contact-img w-[36px] translate-x-[-112%] absolute" />  Contact  </p> </a> </li>
	<div className="socials-container flex justify-end translate-y-[100%] translate-x-[20%] space-evenly">
	<a href="https://instagram.com"> <img src={insta} id="insta" className="socials instagram h-fit relative w-16 translate-y-[10%] translate-x-[-50%]" /> </a>
	<a href="https://twitter.com"> <img src={twitter} id="twitter" className="socials twitter h-fit relative w-16 translate-y-[10%] translate-x-[16%]" /> </a>
	<a href="https://discord.com/users/150504671033819136"> <img src={discord} className="socials discord h-fit w-16 translate-y-[10%] translate-x-[80%]" /> </a>
	<a href="https://linkedin.com/in/shawnjasnalchand"> <img src={linkedin} className="socials linkedin h-fit relative w-16 translate-y-[150.5%] translate-x-[-350.5%] " /> </a>
	<a href="https://reddit.com"> <img src={reddit} className="socials reddit h-fit relative w-16 translate-y-[150.5%] translate-x-[-290.5%] " /> </a>
	<a className="h-fit" href="https://tiktok.com"> <img src={tiktok} className="socials tiktok h-fit relative w-16 translate-y-[160.5%] translate-x-[-220.5%] " /> </a>
	</div>
	</ul>
	</div>
	</div>
</>
)
}
export default Navbar
