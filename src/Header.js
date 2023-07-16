import { useState } from "react";
import MobileNavbar from "./MobileNavbar";

function Header() {
  return (
    <>
      <div className="flex justify-between md:justify-center lg:justify-start w-[100%] px-3 relative">
        <h1 className="header text-cyan-500 md:translate-x-[5%] text-3xl md:text-5xl lg:text-9xl ">
          Shawn Chand
        </h1>

        <button
          onClick={() => {
            document.body.style.overflow = "hidden";
            document.body.style.height = "85vh";
            document.getElementById("mobileNav").style.display = "block";
            document.body.style.width = "100%";
          }}
          className="sm:hidden portfolio-button-next text-white text-3xl"
        >
          {" "}
          V{" "}
        </button>
      </div>
      <MobileNavbar />
    </>
  );
}
export default Header;
