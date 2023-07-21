import Heading from "./components/Heading.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import image from "./assets/person.png";

function About() {
  const factsList = [
    { text: "- Proudly hailing from Canada." },
    { text: "- I harbor a deep affection for adorable koalas." },
    { text: "- The fall and winter months hold a special  place in my heart." },
    {
      text: "- I'm grateful for a successful kidney transplant, which has brought happiness and good health to my life.",
    },
  ];
  // local components
  const title = (title, content) => {
    return (
      <div>
        <h1 className=" text-cyan-500 text-4xl md:text-5xl py-5">{title}</h1>
        <div className="">
          <div
            style={{ scrollbarColor: "red" }}
            className="border border-slate-400 h-[200px] overflow-y-scroll p-3"
          >
            {content}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <Heading title={"About Me"} />
      <div>
        <div className="flex justify-center">
          <div className="flex justify-center w-[100%] p-2">
            <div className="text-white w-[100%] md:w-[83%] lg:w-[56%] md:border border-slate-400  ">
              <div>
                <h1 className="md:px-12 max-w-[100%]text-white text-4xl flex justify-start ">
                  Welcome to My Forest!
                </h1>
                <img
                  className="md:hidden -ml-2 h-[150px] w-[150px]"
                  src={image}
                />
              </div>
              <div className="flex justify-end">
                <img
                  className="hidden md:block w-44 h-44 self-end "
                  src={image}
                />
                <p className="max-h-[50%] overflow-y-scroll w-[880px] md:w-[80%] py-5 md:py-0 text-white">
                  Welcome to my creative sanctuary! I'm thrilled to share my
                  journey as a multi-disciplinary artist and provide you with a
                  glimpse into my world of pixel art, design, and passion. With
                  a love for gaming aesthetics and a deep understanding of the
                  art, design, and pop culture space, I'm dedicated to bringing
                  your creative visions to life. Join me on this adventure as we
                  explore the artistry, inspiration, and joy that pixels can
                  evoke.
                </p>
              </div>
            </div>
            <div className="hidden lg:block self-end ml-10">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-2 md:px-10">
        {title(
          "Dreams in Life",
          <p className="text-white abouts-text">
            Dreams have always fueled my artistic spirit. I believe in the power
            of aspirations and pushing boundaries. From creating immersive
            gaming experiences to designing iconic architectural marvels, my
            dreams encompass a diverse range of artistic endeavors. With each
            pixel I place, I strive to turn dreams into vibrant realities,
            igniting imagination and leaving a lasting impact. <br /> Top 5
            Items on my bucket list are:
            <ul>
              <li> Item 1 </li>
              <li> Item 2 </li>
              <li> Item 3 </li>
              <li> Item 4 </li>
              <li> Item 5 </li>
            </ul>
          </p>
        )}

        {title(
          "Favorite Games",
          <p className="text-white abouts-text">
            Dreams have always fueled my artistic spirit. I believe in the power
            of aspirations and pushing boundaries. From creating immersive
            gaming experiences to designing iconic architectural marvels, my
            dreams encompass a diverse range of artistic endeavors. With each
            pixel I place, I strive to turn dreams into vibrant realities,
            igniting imagination and leaving a lasting impact. <br /> Top 5
            Items on my bucket list are:
            <ul>
              <li> Item 1 </li>
              <li> Item 2 </li>
              <li> Item 3 </li>
              <li> Item 4 </li>
              <li> Item 5 </li>
            </ul>
          </p>
        )}
        {title(
          "Favorite Music.",
          <p className="text-white abouts-text">
            Dreams have always fueled my artistic spirit. I believe in the power
            of aspirations and pushing boundaries. From creating immersive
            gaming experiences to designing iconic architectural marvels, my
            dreams encompass a diverse range of artistic endeavors. With each
            pixel I place, I strive to turn dreams into vibrant realities,
            igniting imagination and leaving a lasting impact. <br /> Top 5
            Items on my bucket list are:
            <ul>
              <li> Item 1 </li>
              <li> Item 2 </li>
              <li> Item 3 </li>
              <li> Item 4 </li>
              <li> Item 5 </li>
            </ul>
          </p>
        )}

        {title(
          "Favorite Games",
          <p className="text-white abouts-text">
            Dreams have always fueled my artistic spirit. I believe in the power
            of aspirations and pushing boundaries. From creating immersive
            gaming experiences to designing iconic architectural marvels, my
            dreams encompass a diverse range of artistic endeavors. With each
            pixel I place, I strive to turn dreams into vibrant realities,
            igniting imagination and leaving a lasting impact. <br /> Top 5
            Items on my bucket list are:
            <ul>
              <li> Item 1 </li>
              <li> Item 2 </li>
              <li> Item 3 </li>
              <li> Item 4 </li>
              <li> Item 5 </li>
            </ul>
          </p>
        )}

        {title(
          "Favorite Hobbies",
          <p className="text-white abouts-text">
            Dreams have always fueled my artistic spirit. I believe in the power
            of aspirations and pushing boundaries. From creating immersive
            gaming experiences to designing iconic architectural marvels, my
            dreams encompass a diverse range of artistic endeavors. With each
            pixel I place, I strive to turn dreams into vibrant realities,
            igniting imagination and leaving a lasting impact. <br /> Top 5
            Items on my bucket list are:
            <ul>
              <li> Item 1 </li>
              <li> Item 2 </li>
              <li> Item 3 </li>
              <li> Item 4 </li>
              <li> Item 5 </li>
            </ul>
          </p>
        )}
        {title(
          "Favorite Builldings",
          <p className="text-white abouts-text">
            Dreams have always fueled my artistic spirit. I believe in the power
            of aspirations and pushing boundaries. From creating immersive
            gaming experiences to designing iconic architectural marvels, my
            dreams encompass a diverse range of artistic endeavors. With each
            pixel I place, I strive to turn dreams into vibrant realities,
            igniting imagination and leaving a lasting impact. <br /> Top 5
            Items on my bucket list are:
            <ul>
              <li> Item 1 </li>
              <li> Item 2 </li>
              <li> Item 3 </li>
              <li> Item 4 </li>
              <li> Item 5 </li>
            </ul>
          </p>
        )}
      </div>

      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;
