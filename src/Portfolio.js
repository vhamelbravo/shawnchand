import React, {useState} from 'react'
import Modal from './Modal'
import placeholder from './assets/placeholder.png'
import {createClient} from 'contentful'
import {client, portfolioClient} from './client.js'
function Portfolio () {
const [active, setActive] = useState(false)
const toggle = () => {	
setActive(!active)
}
const [isVisible, setIsVisible] = useState(1)
        const handleClick = () => {
		if (isVisible === 1) {
		setIsVisible(2)
		} else if (isVisible === 2) {
		setIsVisible(3)} else if (isVisible === 3) {
		setIsVisible(1)}
		}
return (
<>
<div className="flex flex-col items-center translate-y-[-50%] pl-[1%]">
<div className="portfolio-preview border w-[85%]">
<h1 className="portfolio-preview-title text-cyan-500 text-7xl"> Portfolio </h1>
<p className="portfolio-text text-white text-3xl "> <a href="#" className="portfolio-text hover:underline text-cyan-500 text-3xl"> Project </a> - Description of Project </p>
<p className="portfolio-text text-white text-3xl"> <a href="#" className="portfolio-text hover:underline text-cyan-500 text-3xl"> Project </a> - Description of Project </p>
<p className="portfolio-text text-white text-3xl"> <a href="#" className="portfolio-text hover:underline text-cyan-500 3xl"> Project </a> - Description of Project </p>
<p className="read-more-portfolio-text text-white text-3xl"> <button onClick={toggle} className="read-more-portfolio text-cyan-500 text-xl"> Read More </button> </p>
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
	</div>
	</div>
</>)}

export default Portfolio
