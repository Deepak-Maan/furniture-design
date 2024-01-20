import React from "react";
import backtotop from "../assets/images/arrow.png";

function Backtotop() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      document.getElementById("Top").style.display = "flex";
    } else {
      document.getElementById("Top").style.display = "none";
    }
  });

  function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <button id="Top" className="cursor-pointer hidden fixed z-10 bottom-2 right-2" onClick={up}>
        <img className="w-[50px] h-[50px] animate-bounce" src={backtotop} alt="back to top icon" />
      </button>
    </>
  );
}

export default Backtotop;