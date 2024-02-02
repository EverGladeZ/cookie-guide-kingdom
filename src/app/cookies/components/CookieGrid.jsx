import React from "react";
import Image from "next/image";

function getBGColour(cookie) {
  if (cookie == "Ancient") {
    return "from-purple-600 to-fuchsia-500";
  } else if (cookie == "Legendary") {
    return "from-cyan-500 to-lime-500";
  } else if (cookie == "Super Epic") {
    return "from-purple-500 to-amber-400";
  } else if (cookie == "Epic") {
    return "from-rose-600 to-rose-400";
  } else if (cookie == "Rare") {
    return "from-blue-600 to-blue-400";
  } else if (cookie == "Dragon") {
    return "from-red-700 to-lime-400";
  } else if (cookie == "Common") {
    return "from-yellow-900 to-yellow-100";
  } else if (cookie == "Special") {
    return "from-yellow-400 to-amber-100";
  }
}

function sortCookies(json) {
  const orderRanks = {
    common: 0,
    rare: 1,
    special: 2,
    epic: 3,
    super_epic: 4,
    dragon: 5,
    legendary: 6,
    ancient: 7,
  };

  json.sort((a, b) => {
    const lhs = a.rarity.toLowerCase().replace(" ", "_");
    const rhs = b.rarity.toLowerCase().replace(" ", "_");
    return orderRanks[rhs] - orderRanks[lhs];
  });
  return json;
}

function CookieGrid({ data }) {
  return (
    <div className="ml-60">
      <div className="p-56 pt-[2rem] flex flex-wrap justify-center">
        {" "}
        {sortCookies(data).map((cookie) => {
          return (
            <div
              key={`${cookie.name.toLowerCase().replace(" ", "-")}`}
              className={`cookie-card border-2 border-white rounded-lg m-8 bg-gradient-to-br ${getBGColour(
                cookie.rarity
              )} w-56 h-56`}
            >
              <div className="hover:scale-110 transition ease-in-out cursor-pointer">
                {" "}
                <div
                  className={`${cookie.rarity.toLowerCase().replace(" ", "-")}`}
                >
                  <div className="flex flex-col justify-center">
                    <Image
                      src={`/assets/images/cookie-profile/${cookie.name
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase()
                        .replace(" cookie", "")
                        .replace(" ", "_")}.png`}
                      width={312}
                      height={312}
                      alt={`${cookie.name}`}
                      className="w-full h-auto max-h-52 p-2"
                    />
                    <div className="text-white text-wrap text-center text-lg bg-gradient-to-r from-zinc-900 to-zinc-700 relative border-2 -left-0.5 border-white rounded-lg w-56">
                      {cookie.name}
                    </div>
                  </div>
                  {/* <img src={`src/assets/images/cookie-profile`}/> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CookieGrid;
