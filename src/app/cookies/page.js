import SideNav from "@/components/SideNav";
import CookieGrid from "./components/CookieGrid";
import { promises as fs } from "fs";
import { use } from "react";

export async function getCookies() {
  const file = await fs.readFile("src/assets/data/cookies.json", "utf8");
  const cookies = JSON.parse(file);
  return cookies;
}

export default function Cookies() {
  const cookies = use(getCookies());
  return (
    <div>
      <div>
        <SideNav />
        <h1 className="ml-60 text-white text-[3rem] text-center pt-[8rem]">All Cookies</h1>
        <CookieGrid data={cookies.cookies} />
      </div>
    </div>
  );
}
