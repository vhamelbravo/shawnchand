import { useState } from "react";
import Heading from "./Heading";
import placeholder from "../assets/placeholder.png";
import Portfolio from "../Portfolio";

const PortfolioModal = () => {
  const [isVisible, setIsVisible] = useState(1);
  const close = () => {
    document.getElementById("portfolioModal").style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  };
  const handleClick = () => {
    if (isVisible == 3) {
      setIsVisible(1);
    } else {
      setIsVisible(isVisible + 1);
    }
  };
  const projectsData = [
    {
      title: "Project 1",
      description: "lorem impsum dolor",
      link: "/project1",
    },
    {
      title: "Project 2",
      description: "lorem impsum dolor",
      link: "/project1",
    },
    {
      title: "Project 3",
      description: "lorem impsum dolor",
      link: "/project1",
    },
    {
      title: "Project 4",
      description: "lorem impsum dolor",
      link: "/project1",
    },
    {
      title: "Project 5",
      description: "lorem impsum dolor",
      link: "/project1",
    },
    {
      title: "Project 6",
      description: "lorem impsum dolor",
      link: "/project1",
    },
    {
      title: "Project 7",
      description: "lorem impsum dolor",
      link: "/project1",
    },
  ];
  function project(title, description, link) {
    return (
      <div className="relative h-[23rem] w-[23rem] z-[100]">
        <img src={placeholder} className="absolute top-0 hover:opacity-50 " />
        <div className="flex justify-center items-start  h-[100%] w-[100%]">
          <div className="h-[70%] w-[90%] flex flex-col justify-between items-start">
            <div>
              <h1 className="text-white text-3xl py-5">{title}</h1>
              <p className=" text-white py-2">{description}</p>
            </div>
            <button className="self-center text-white text-4xl border-2 border-slate-400 rounded z-20 opacity-100 ">
              See More
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      id="portfolioModal"
      className="h-[100vh] w-[100%] flex justify-center items-center"
    >
      <div className="image-background w-[95%] h-[90vh] flex flex-col justify-center border-2 border-slate-400">
        <h1 className="text-center text-cyan-500 md:pb-12 text-3xl md:text-5xl lg:text-9xl">
          Portfolio
        </h1>{" "}
        <div className="flex justify-around">
          {isVisible === 1 && (
            <>
              {projectsData.map((item, index) => {
                if (index >= 0 && index < 3) {
                  return project(item.title, item.description, item.link);
                }
              })}
            </>
          )}

          {isVisible === 2 && (
            <>
              {projectsData.map((item, index) => {
                if (index >= 3 && index < 6) {
                  return project(item.title, item.description, item.link);
                }
              })}
            </>
          )}
          {isVisible === 3 && (
            <>
              {projectsData.map((item, index) => {
                if (index >= 6 && index < 9) {
                  return project(item.title, item.description, item.link);
                }
              })}
            </>
          )}
        </div>
        <div className="text-center py-5 text-3xl text-white">
          <button onClick={handleClick}>V</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
