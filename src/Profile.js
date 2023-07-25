import image from "./assets/person.png";
import Navbar from "./Navbar";
function Profile() {
  
  const factsList = [
    {text : "- Proudly hailing from Canada."},
    {text : "- I harbor a deep affection for adorable koalas."},
    {text : "- The fall and winter months hold a special  place in my heart."},
    {text : "- I'm grateful for a successful kidney transplant, which has brought happiness and good health to my life."},
  ]
  return (
    <>
    <div className="flex justify-center">
      <div className="flex justify-center w-[100%] p-2">
        <div className="text-white w-[100%] md:w-[83%] lg:w-[56%] md:border border-slate-400  ">
          <div>
            <h1 className="md:px-12 max-w-[100%]text-white text-4xl flex justify-start ">
              Welcome to My Forest!
            </h1>
            <img className="md:hidden -ml-2 h-[150px] w-[150px]" src={image} />
          </div>
          <div className="flex justify-end">
          <img className="hidden md:block w-44 h-44 self-end " src={image} />
            <p className="max-h-[50%] overflow-y-scroll w-[880px] md:w-[80%] py-5 md:py-0 text-white">
              Welcome to my creative corner! Immerse yourself in a world where
              pixels come alive and art meets passion. With a love for gaming
              aesthetics and a deep understanding of the design and pop culture
              space, I offer a range of services that bring your creative
              visions to life. From art and digital photography to project
              management and coaching, coding to architectural and graphic
              design, and marketing, I infuse each project with a touch of pixel
              art and a gamer's spirit. Let's collaborate and turn your ideas
              into extraordinary realities. Contact me today!
            </p>
          </div>
          <div className="">
            <p className="w-[80%] pt-6 text-2xl  md:text-3xl">
              Here are some quick facts about me
            </p>
          </div>
          <ul className="w-[90%] md:w-[70%] pb-8">
            {factsList.map(item => {
              return(
                <li className="max-w-[100%] text-white">
                  {item.text}
              </li>
              )
            })}
          </ul>
        </div>
        <div className="hidden lg:block self-end ml-10">
        <Navbar />
        </div>
      </div>
    </div>

    </>
  );
}

export default Profile;
