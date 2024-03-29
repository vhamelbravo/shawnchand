import React, { useState, useEffect } from "react";
import art from "./assets/art.png";
import coaching from "./assets/coaching.png";
import coding from "./assets/coding.png";
import planning from "./assets/planning.png";
import writing from "./assets/writing.png";
import design from "./assets/design.png";
import marketing from "./assets/marketing.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import insta from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import discord from "./assets/discord.png";
import linkedin from "./assets/linkedin.png";
import reddit from "./assets/reddit.png";
import tiktok from "./assets/tiktok.png";
import navHome from "./assets/navHome.png";
import navAbout from "./assets/navAbout.png";
import navBlog from "./assets/navBlog.png";
import navPortfolio from "./assets/navPortfolio.png";
import navContact from "./assets/navContact.png";
import { Link } from "react-router-dom";
import PortfolioModal from "./components/PortfolioModal";
import PortfolioModalMobile from "./components/PortfolioModalMobile";



const navbarList = [
  { linkTo: "/", img: navHome, text: "Home" },
  { linkTo: "/about", img: navAbout, text: "About" },
  { linkTo: "/blog", img: navBlog, text: "Blog" },
  { linkTo: "", img: navPortfolio, text: "Portfolio" },
  { linkTo: "/services", img: navAbout, text: "Services" },
  { linkTo: "mailto:shawn@shawnjc.ca", img: navContact, text: "Contact" },
];

const iconsList = [
  { link: "", img: insta },
  { link: "", img: twitter },
  { link: "", img: discord },
  { link: "", img: linkedin },
  { link: "", img: reddit },
  { link: "", img: tiktok },
];

const servicesList = [
  {
    img: art,
    title: "Art/digital photography",
    description: `Capture the essence of moments with our artful and immersive digital
photography services. Whether it's capturing the beauty of landscapes,
the depth of emotions in portraits, or the intricate details of still
life, I am a skilled photographer and have an eye for transforming
scenes into captivating visual stories. Let us preserve your memories
and create stunning visuals that leave a lasting impact.`,
  },
  {
    img: coaching,
    title: "Art/digital photography",
    description: `Capture the essence of moments with our artful and immersive digital
photography services. Whether it's capturing the beauty of landscapes,
the depth of emotions in portraits, or the intricate details of still
life, I am a skilled photographer and have an eye for transforming
scenes into captivating visual stories. Let us preserve your memories
and create stunning visuals that leave a lasting impact.`,
  },
  {
    img: coding,
    title: "Art/digital photography",
    description: `Capture the essence of moments with our artful and immersive digital
photography services. Whether it's capturing the beauty of landscapes,
the depth of emotions in portraits, or the intricate details of still
life, I am a skilled photographer and have an eye for transforming
scenes into captivating visual stories. Let us preserve your memories
and create stunning visuals that leave a lasting impact.`,
  },
  {
    img: planning,
    title: "Art/digital photography",
    description: `Capture the essence of moments with our artful and immersive digital
photography services. Whether it's capturing the beauty of landscapes,
the depth of emotions in portraits, or the intricate details of still
life, I am a skilled photographer and have an eye for transforming
scenes into captivating visual stories. Let us preserve your memories
and create stunning visuals that leave a lasting impact.`,
  },
  {
    img: design,
    title: "Art/digital photography",
    description: `Capture the essence of moments with our artful and immersive digital
photography services. Whether it's capturing the beauty of landscapes,
the depth of emotions in portraits, or the intricate details of still
life, I am a skilled photographer and have an eye for transforming
scenes into captivating visual stories. Let us preserve your memories
and create stunning visuals that leave a lasting impact.`,
  },
  {
    img: marketing,
    title: "Art/digital photography",
    description: `Capture the essence of moments with our artful and immersive digital
photography services. Whether it's capturing the beauty of landscapes,
the depth of emotions in portraits, or the intricate details of still
life, I am a skilled photographer and have an eye for transforming
scenes into captivating visual stories. Let us preserve your memories
and create stunning visuals that leave a lasting impact.`,
  },
];
const service = (title, description, img) => {
	
  return (
    <div className="w-[100%] px-5">
      <h1 className="flex justify-end text-cyan-500 text-xl py-12 ">
        {title}
      </h1>
      <div className="block lg:flex justify-start items-start">
        <img src={img} className="w-[250px] h-[200px] lg:px-5 my-5 lg:my-0" />
        <div>
          <p className=" text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};
function Services() {
	const [visibility, setvisibility] = useState(true);
  
	const [active, setActive] = useState(false);
	const toggle = () => {
	  setActive(!active);
	  document.body.style.overflow = active ? "auto": "hidden";
	  document.body.style.height = active ? "auto":"85vh";
	  document.body.style.width = "100%";
	};
	const [isVisible, setIsVisible] = useState(1);
  
	const handleClick = () => {
	  if (isVisible === 1) {
		setIsVisible(2);
	  } else if (isVisible === 2) {
		setIsVisible(3);
	  } else if (isVisible === 3) {
		setIsVisible(1);
	  }
	};
  return (
    <>
      <div className="w-[81%] m-auto ">
        <div className="flex justify-center">
          <h1 className="text-cyan-500 text-6xl md:text-9xl "> Services </h1>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-slate-400">
            {servicesList.map((item) => {
              return service(item.title, item.description, item.img);
            })}
          </div>
          <div>
            <div className="flex justify-center my-6">
              <div className=" border-2 py-4 px-3 border-slate-400 w-[100%] lg:w-[50rem]  ">
                <div className=" flex justify-start items-center px-3">
                  <h1 className=" text-white text-3xl font-bold pb-3">
                    Navigation
                  </h1>
                </div>
                <div className="px-3">
                  {navbarList.map((item) => {
                    if (item.text == "Portfolio") {
                      return (
                        <li onClick={toggle} className="flex flex-row justify-start items-center">
                          <div>
                            <img src={item.img} className="w-[36px]" />
                          </div>
                          <button >
                            <p className="text-white text-3xl hover:underline px-2">
                              {item.text}
                            </p>
                          </button>
                        </li>
                      );
                    }
                    return (
                      <li className="flex flex-row justify-start items-center">
                        <Link to={item.linkTo}>
                          <img src={item.img} className="w-[36px]" />
                        </Link>
                        <Link to={item.linkTo}>
                          <p className="text-white text-3xl hover:underline px-2">
                            {item.text}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </div>

                <div className="py-5 flex justify-between px-4">
                  {iconsList.map((item) => {
                    return (
                      <a className="py-2" href={item.link}>
                        <img src={item.img} id="insta" className="w-[64px]" />
                      </a>
                    );
                  })}
                </div>
              </div>
              {active && (
                <div className="flex flex-col justify-center fixed top-0 left-0  w-[100%]">
                  <div
                    onClick={toggle}
                    className="absolute top-0 right-0 cursor-pointer text-2xl text-white px-2 flex justify-end"
                  >
                    X
                  </div>
                  <div className="overlay z-[-1]"></div>
				  <div className="hidden lg:block">
                  <PortfolioModal />
				  </div>
				  <div className="lg:hidden">
                  <PortfolioModalMobile />
				  </div>
                </div>
              )}
            </div>
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
