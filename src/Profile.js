import Navbar from "./Navbar.js";

import image from "./assets/person.png";
function Profile() {
  return (
    <>
      <div className="md:pl-[10%] flex justify-start md:translate-y-[10%]">
        <div className="text-white w-[95%] md:w-[73%] lg:w-[63%] md:mr-8  md:pl-[12%] profile border border-slate-400  pb-[5rem] min-h-[480px] ">
          <div className="relative">
            <h1 className="max-w-[100%] pl-[25%] md:pl-0 header-profile text-white text-4xl flex justify-start translate-x-[-20%] ">
              {" "}
              Welcome to My Forest!{" "}
            </h1>
            <img
              className="md:hidden absolute top-15 left-0  h-[150px] w-[150px]"
              src={image}
            />
          </div>
          <p className="mt-12 mb-4 max-h-[50%] overflow-y-scroll m-auto w-[880px] md:max-w-[100%] intro-text text-white  translate-y-[5%] ">
            Welcome to my creative corner! Immerse yourself in a world where
            pixels come alive and art meets passion. With a love for gaming
            aesthetics and a deep understanding of the design and pop culture
            space, I offer a range of services that bring your creative visions
            to life. From art and digital photography to project management and
            coaching, coding to architectural and graphic design, and marketing,
            I infuse each project with a touch of pixel art and a gamer's
            spirit. Let's collaborate and turn your ideas into extraordinary
            realities. Contact me today!
          </p>
          <p className="mt-24 ml-5 md:ml-0 md:my-none max-w-[100%] relative text-2xl py-8  md:text-3xl translate-y-[60%] flex justify-start md:translate-x-[-20%] md:indent-28">
            {" "}
            Here are some quick facts about me{" "}
          </p>
          <ul className="max-w-[90%] m-auto md:max-w-[100%] mt-14 md:mt-0 flex flex-col md:items-start md:translate-x-[-23%] md:translate-y-[30%]">
            <li className="max-w-[100%] text-white">
              {" "}
                - Proudly hailing from Canada.
              {" "}
            </li>
            <li className="max-w-[100%] text-white">
              {" "}
                - I harbor a deep affection for adorable koalas.
              {" "}
            </li>
            <li className="max-w-[100%] text-white">
              {" "}
                - The fall and winter months hold a special place in my heart.
            </li>
            <li className="max-w-[100%] text-white">
              {" "}
                - I'm grateful for a successful kidney transplant, which has
                brought happiness and good health to my life .
              {" "}
            </li>
          </ul>
          <img
            className="hidden md:flex flex-wrap translate-y-[-73%] translate-x-[-60.5%] z-20 profile-img absolute scale-[5%] md:scale-[20%] "
            src={image}
          />
        </div>
        <div className="hidden md:block">
        <Navbar />
        </div>
      </div>
    </>
  );
}

export default Profile;
