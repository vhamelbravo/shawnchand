function Footer() {
  return (
    <div className="w-[100%]">
      <div className="  flex justify-center py-6 text-center text-sm sm:text-xl">
        <p className=" text-white ">
          Website made by
          <a className="px-2 text-slate-400 hover:underline" href="#">
            Vicente Hamel Bravo
          </a>
          , background image made by
          <a
            className="px-2 text-slate-400 hover:underline"
            href="https://edermunizz.itch.io"
          >
            edermunizz
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
