import React from "react";
import { FaBars } from "react-icons/fa";

const header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./src/assets/logo.svg" alt="logo"></img>
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-1.5 py-1.5 rounded-2xl">Hoster is Hiring</button>
      </div>
      <ul className="hidden lg:flex justify-between font-lato text-gray-400 gap-6">
        <li><a href="https://github.com/shivam20k">Github</a></li>
        <li><a href="https://www.instagram.com/shivamkadam205/">Instagram</a></li>
        <li><a href="https://www.youtube.com/channel/UC_hR30gNpXmQuPu5w22hn0w">Youtube</a></li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a className="text-gray-400"  href="">Sign In</a>
        <button className="rounded-md px-4 py-3 text-white bg-blue-600"> Join waitlist</button>
      </div>
      <div className="lg:hidden">

        <FaBars />
      </div>
    </div>
  );
};

export default header;
