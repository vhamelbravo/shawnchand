import React, {useState } from 'react'
import insta from './assets/instagram.png'
import twitter from './assets/twitter.png'
import discord from './assets/discord.png'
import linkedin from './assets/linkedin.png'
import reddit from './assets/reddit.png'
import tiktok from './assets/tiktok.png'
import placeholder from './assets/placeholder.png'
import Modal from './Modal'
import {Link} from 'react-router-dom'
import './index.css'
function Navbar () {
	const [active, setActive] = useState(false)
	const toggle = () => {
	setActive(!active)
	
	} 
const [isVisible, setIsVisible] = useState(true)
const [isSecondVisible, setIsSecondVisible] = useState(false)
const scrollThreshold = document.documentElement.scrollHeight - window.innerHeight
	

	const handleClick = () => {
		setIsVisible(!isVisible)  
		setIsSecondVisible(!isSecondVisible)  
	}
	
	

return (
<>
	<div className="grid border-2 border-slate-400 w-[20rem] mx-[70%] my-[-25%] h-[30.5rem]">
	<h1 className="text-white text-3xl translate-x-[20%] translate-y-[10%] font-bold"> Navigation </h1>
	<ul>
	<li> <Link to="/"> <p className="text-white text-3xl translate-y-[100%] translate-x-[20%] hover:underline"> -Home  </p> </Link> </li>
	<li> <Link to="/about"> <p className="text-white text-3xl translate-y-[100%] translate-x-[20%] hover:underline"> -About  </p> </Link> </li>
	<li> <Link to="/blog"> <p className="text-white text-3xl translate-y-[100%] translate-x-[20%] hover:underline"> -Blog  </p> </Link> </li>
	<li> <button onClick={toggle}> <p className="text-white text-3xl translate-y-[100%] translate-x-[30%] hover:underline"> -Portfolio  </p> </button> </li>
	<Modal className="modal" active={active} toggle={toggle}>
	<h1 className="text-slate-400 text-9xl translate-y-[50%] translate-x-[25%]"> Portfolio </h1>
	<button onClick={handleClick} className="text-white text-6xl translate-y-[1230%] translate-x-[1350%]"> V </button>
	{isVisible && ( 
		<>
	<h1 className="text-white text-2xl translate-y-[800%] translate-x-[8%] "> Project 1 Name </h1>
	<p className="text-white translate-y-[1200%] translate-x-[8%] "> Project Description </p>
	<button className="btn1 text-white border border-slate-400 rounded translate-y-[1630%] translate-x-[200%] scale-[200%] relative z-20 opacity-100 ">See More </button>
	<img src={placeholder} className="relative img1 my-[-15%] scale-[40%] translate-x-[-28%] hover:opacity-50 " />
	<h1 className="absolute text-white text-2xl translate-y-[-1250%] translate-x-[270%]"> Project 2 Name </h1>
	<p className="absolute text-white translate-y-[-1380%] translate-x-[312%]"> Project Description </p>
	<button className="absolute btn2 text-white border border-slate-400 rounded scale-[200%] translate-y-[-700%] translate-x-[780%] z-20"> See More </button>
	<img src={placeholder} className="relative img2 scale-[40%] my-[-68.5%] translate-x-[23%] hover:opacity-50" />
	<h1 className="absolute text-white text-2xl my-[26.5%] translate-x-[485%] "> Project 3 Name </h1>
	<p className="absolute text-white my-[31%] translate-x-[563%]  "> Project Description </p>
	<button className="absolute btn3 text-white border border-slate-400 rounded scale-[200%] z-20 my-[41%] translate-x-[1350%]   "> See More </button>
	<img src={placeholder} className="relative img3 scale-[40%] my-[0.5%] mx-[50%] hover:opacity-50" />
		</>
	)}
	{isSecondVisible && (
		                
		                <>
		                <h1 className="text-white text-2xl translate-y-[800%] translate-x-[8%] "> Project 4 Name </h1>
		                <p className="text-white translate-y-[1200%] translate-x-[8%] "> Project Description </p>
		                <button className="btn1 text-white border border-slate-400 rounded translate-y-[1630%] translate-x-[200%] scale-[200%] relative z-20 opacity-100 ">See More </button>
		                <img src={placeholder} className="relative img1 my-[-15%] scale-[40%] translate-x-[-28%] hover:opacity-50 " />
		                <h1 className="absolute text-white text-2xl translate-y-[-1250%] translate-x-[270%]"> Project 5 Name </h1>
		                <p className="absolute text-white translate-y-[-1380%] translate-x-[312%]"> Project Description </p>
		                <button className="absolute btn2 text-white border border-slate-400 rounded scale-[200%] translate-y-[-700%] translate-x-[780%] z-20"> See More </button>
		                <img src={placeholder} className="relative img2 scale-[40%] my-[-68.5%] translate-x-[23%] hover:opacity-50" />
		                <h1 className="absolute text-white text-2xl my-[26.5%] translate-x-[485%]"> Project 6 Name </h1>
		                <p className="absolute text-white my-[31%] translate-x-[563%]"> Project Description </p>
		                <button className="absolute btn3 text-white border border-slate-400 rounded scale-[200%] z-20 my-[41%] translate-x-[1350%] "> See More </button>
	                        <img src={placeholder} className="relative img3 scale-[40%] my-[0.5%] mx-[50%] hover:opacity-50" />
		                </>
		        )}




	</Modal>
	<li> <Link to="/services"> <p className="text-white text-3xl translate-y-[100%] translate-x-[20%] hover:underline"> -Services  </p> </Link> </li>
	<li> <a href="mailto:shawn@shawnjc.ca"> <p className="text-white text-3xl translate-y-[100%] translate-x-[20%] hover:underline"> -Contact  </p> </a> </li>
	<a href="https://instagram.com"> <img src={insta} className="scale-[15%] translate-y-[-20%] translate-x-[-30%]" /> </a>
	<a href="https://twitter.com"> <img src={twitter} className="scale-[20%] translate-y-[-138%] translate-x-[2%]" /> </a>
	<a href="https://discord.com/users/150504671033819136"> <img src={discord} className="scale-[26%] translate-y-[-300%] translate-x-[33%]" /> </a>
	<a href="https://linkedin.com/in/shawnjasnalchand"> <img src={linkedin} className="absolute scale-[11%] my-[-43.5%] mx-[-10%] " /> </a>
	<a href="https://reddit.com"> <img src={reddit} className="absolute scale-[11%] my-[-43.5%] mx-[-5%] " /> </a>
	<a href="https://tiktok.com"> <img src={tiktok} className="absolute scale-[6%] my-[-55%] mx-[-12%] " /> </a>
	</ul>
	</div>
</>
)
}
export default Navbar
