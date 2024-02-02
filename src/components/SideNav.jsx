import React from "react";
import Image from "next/image"
import { TbCookieMan, TbHome } from "react-icons/tb";
import { GiPodium, GiBattleGear } from "react-icons/gi";
import { FaEarthAmericas, FaYoutube } from "react-icons/fa6";
import { LuSwords } from "react-icons/lu";

function SideNav() {
  return (
    <div>
      <div className="px-2 w-60 h-screen bg-gradient-to-b from-emerald-300 via-sky-400 to-fuchsia-400 z-10 flex-col justify-between flex-shrink-0 fixed top-0-left-96 overflow-y-auto max-h-screen lg:w-[15.5rem] lg:px-8 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="px-6 py-4 w-60 h-screen bg-gradient-to-b from-zinc-800 to-zinc-900 z-20 flex-col justify-between flex-shrink-0 fixed top-0-left-96 overflow-y-auto max-h-screen  lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col text-white text-xl ">
            <a href="/">
              {" "}
              <Image
                width={500}
                height={500}
                alt="Logo"
                src={`/assets/images/logo-500.png`}
              />
            </a>

            <a
              href="/"
              className="flex items-center my-1 py-2 px-3 hover:bg-zinc-700 transition-all rounded-lg"
            >
              <TbHome className="h-6 w-6 mr-2 object-contain" /> Home
            </a>

            <a
              href="/cookies"
              className="flex items-center my-1 py-2 px-3 hover:bg-zinc-700 transition-all rounded-lg"
            >
              <TbCookieMan className="h-6 w-6 mr-2 object-contain" /> Cookies
            </a>

            <a
              href="/tier-list"
              className="flex items-center my-1 py-2 px-3 hover:bg-zinc-700 transition-all rounded-lg relative"
            >
              <GiPodium className="h-6 w-6 mr-2 object-contain" />
              Tier Lists
            </a>
            <a
              href="/"
              className="relative flex items-center my-1 py-2 px-3 hover:bg-zinc-700 transition-all rounded-lg"
            >
              <GiBattleGear className="h-6 w-6 mr-2 object-contain" /> Guild
              Battle
            </a>
            <a
              href="/"
              className="flex items-center my-1 py-2 px-3 hover:bg-zinc-700 transition-all rounded-lg"
            >
              <FaEarthAmericas className="h-6 w-6 mr-2 object-contain" /> PvE
              Teams
            </a>
            <a
              href="/"
              className="flex items-center my-1 py-2 px-3 hover:bg-zinc-700 transition-all rounded-lg"
            >
              <LuSwords className="h-6 w-6 mr-2 object-contain" /> PvP Teams
            </a>
            <a
              href="/"
              className="flex items-center my-1 py-2 px-3 hover:bg-zinc-700 transition-all rounded-lg"
            >
              <FaYoutube className="h-6 w-6 mr-2 object-contain" /> Video Guides
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
