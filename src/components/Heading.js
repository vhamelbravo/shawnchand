import MobileNavbar from "../MobileNavbar.js";

const Heading = ({ title }) => {
  return (
    <>
      <div className="flex items-center justify-between lg:justify-center w-[100%] px-3 ">
        <h1 className="header text-cyan-500 md:pb-12 text-3xl md:text-5xl lg:text-9xl ">
          {title}
        </h1>

        <button
          onClick={() => {
            document.body.style.overflow = "hidden";
            document.body.style.height = "85vh";
            document.getElementById("mobileNav").style.display = "block";
            document.body.style.width = "100%";
          }}
          className="lg:hidden portfolio-button-next text-white text-3xl px-5 md:pb-12"
        >
          V
        </button>
      </div>
      <MobileNavbar />
    </>
  );
};

export default Heading;
