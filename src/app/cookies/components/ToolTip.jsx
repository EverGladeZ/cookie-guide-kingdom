import React from "react";
import Image from "next/image";

function getPvPTierColour(tier) {
  if (tier == "SS+") {
    return "bg-rose-400 text-black";
  } else if (tier == "SS") {
    return "bg-rose-300 text-black";
  } else if (tier == "S") {
    return "bg-amber-200 text-black";
  } else if (tier == "A") {
    return "bg-orange-200 text-black";
  } else if (tier == "B") {
    return "bg-green-300 text-black";
  } else if (tier == "C") {
    return "bg-emerald-500 text-black";
  } else if (tier == "D") {
    return "bg-blue-500 text-black";
  } else {
    return "bg-zinc-200 text-black";
  }
}

function getPvETierColour(tier) {
  if (tier == "S+") {
    return "bg-rose-400 text-black";
  } else if (tier == "S") {
    return "bg-rose-300 text-black";
  } else if (tier == "A") {
    return "bg-amber-200 text-black";
  } else if (tier == "B") {
    return "bg-green-300 text-black";
  } else if (tier == "C") {
    return "bg-emerald-500 text-black";
  } else if (tier == "D") {
    return "bg-blue-500 text-black";
  } else {
    return "bg-zinc-200 text-black";
  }
}

function ToolTip({ children, cookie }) {
  return (
    <div>
      <div className="group relative inline-block">
        {" "}
        <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-zinc-800 border-2 border-zinc-700 text-white p-1 rounded absolute -top-56 -left-[1.125rem] mt-2 w-64 h-52">
          <div className="flex flex-col justify-center text-center">
            <div>{cookie.name}</div>
            <div className="flex justify-center text-center">
              {cookie.type.map((type) => {
                return (
                  <div key={`${cookie.name}` + "-" + `${type}`}>
                    <div>
                      <Image
                        src={`/assets/images/elements/${type.toLowerCase()}.png`}
                        width={66}
                        height={66}
                        alt={`${type}`}
                        className="w-[1.5rem] h-auto m-2"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-evenly text-center mb-2">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={`/assets/images/classes/${cookie.class
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .replace(" cookie", "")
                    .replace(" ", "_")}.png`}
                  width={66}
                  height={66}
                  alt={`${cookie.class}`}
                  className="w-auto h-[1.25rem] mb-1"
                />
                <div className="text-sm">{cookie.class}</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={`/assets/images/classes/${cookie.location
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .replace(" cookie", "")
                    .replace(" ", "_")}.png`}
                  width={66}
                  height={66}
                  alt={`${cookie.location}`}
                  className="w-auto h-[1.25rem] mb-1"
                />
                <div className="text-sm">{cookie.location}</div>
              </div>
            </div>
            <div className="flex justify-evenly text-center">
              <div>
                <div className="mb-2">PvE</div>
                <div
                  className={`${getPvETierColour(cookie.pve)} px-[1rem] py-2`}
                >
                  {cookie.pve ? cookie.pve : "-"}
                </div>
              </div>
              <div>
                <div className="mb-2">PvP</div>
                <div
                  className={`${getPvPTierColour(cookie.pvp)} px-[1rem] py-2`}
                >
                  {cookie.pvp ? cookie.pvp : "-"}
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ToolTip;
