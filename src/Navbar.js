import React, { useState } from "react";
import { Link } from "react-router-dom";

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
import PortfolioModal from "./components/PortfolioModal";

function Navbar() {  
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
    document.body.style.overflow = active ? "auto": "hidden";
    document.body.style.height = active ? "auto":"85vh";
    document.body.style.width = "100%";
  };

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

  return (
    <>
      <div className="bg-['./assets/background.png'] border-2 py-4 px-3 border-slate-400 w-[100%] lg:w-[20rem]  ">
        <div className=" flex justify-start items-center px-3">
          <h1 className=" text-white text-3xl font-bold pb-3">Navigation</h1>
        </div>
        <div className="px-3">
          {navbarList.map((item) => {
            if (item.text == "Portfolio") {
              return (
                <li className="flex flex-row justify-start items-center">
                  <div>
                    <img src={item.img} className="w-[36px]" />
                  </div>
                  <button onClick={toggle}>
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

        <div className="py-5 grid grid-cols-3">
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
          <PortfolioModal />
        </div>
      )}
    </>
  );
}
export default Navbar;
