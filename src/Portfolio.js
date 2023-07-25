import React, { useState } from "react";

function Portfolio() {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
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
  const projectsList = [
	{ title: "project", description: "- Description of Project", link: "#" },
	{ title: "project", description: "- Description of Project", link: "#" },
	{ title: "project", description: "- Description of Project", link: "#" }
];
  return (
    <>
      <div className=" flex flex-col items-center pl-[1%] pt-12 md:py-none">
        <div className=" border w-[95%] md:w-[85%]">
		<h1 className="text-cyan-500 text-4xl md:text-7xl">Portfolio</h1>
          <div>
            {projectsList.map((item) => {
              return (
                <div className="text-white text-xl md:text-3xl flex">
                  <a
                    href={item.link}
                    className="hover:underline md:active:underline text-cyan-500 text-xl md:text-3xl"
                  >
                    {item.title}
                  </a>
                  <p className="px-3">{item.description}</p>
                </div>
              );
            })}
          </div>
          <p className="read-more-portfolio-text text-white text-xl md:text-3xl">
            <button
              onClick={toggle}
              className="read-more-portfolio text-cyan-500 text-xl"
            >
              Read More
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
