"use client";
import Image from "next/image";
import { useState } from "react";

import LandingPageText from "./components/LandingPageText";
import Dots from "./components/Dots";
import BuyBtn from "./components/BuyBtn";
import Thumbnail from "./components/Thumbnail";
import ArrowNav from "./components/ArrowNav";

import { FaApple } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";

export default function Home() {
  const [activeWatchImage, setActiveWatchImage] = useState("/navy.png");
  return (
    <>
      <header>
        <nav className="my-[45px] grid grid-cols-[1fr_auto_1fr] items-center">
          <FaApple
            size={50}
            className="col-start-1 w-fit self-center justify-self-start"
          />

          <ul className="col-start-2 flex items-center gap-[1em]">
            <li className="rounded-[20px] px-[60px] py-[10px] text-[18px] hover:cursor-pointer hover:bg-white hover:text-[rgba(182,204,218,1)]">
              Mac
            </li>
            <li className="rounded-[20px] px-[60px] py-[10px] text-[18px] hover:cursor-pointer hover:bg-white hover:text-[rgba(182,204,218,1)]">
              Iphone
            </li>
            <li className="rounded-[20px] px-[60px] py-[10px] text-[18px] hover:cursor-pointer hover:bg-white hover:text-[rgba(182,204,218,1)]">
              Ipad
            </li>
            <li className="rounded-[20px] px-[60px] py-[10px] text-[18px] hover:cursor-pointer hover:bg-white hover:text-[rgba(182,204,218,1)]">
              Support
            </li>
          </ul>

          <div className="col-start-3 flex gap-[1em] self-center justify-self-end">
            <FaSearch size={25} />
            <p>|</p>
            <RiShoppingBag3Line size={25} />
          </div>
        </nav>
      </header>

      <main>
        <section className="grid grid-cols-[3fr_2fr_0.5fr] gap-[1em] first:col-[1/2] last:self-center">
          <LandingPageText />
          <Image src={activeWatchImage} alt="iWatch" width={500} height={500} />
          <div className="flex flex-col justify-center">
            <Dots
              color="#434558"
              relatedImage="/navy.png"
              activeWatchImage={activeWatchImage}
              setActiveWatchImage={setActiveWatchImage}
            />
            <Dots
              color="#6addcc"
              relatedImage="/mint.png"
              activeWatchImage={activeWatchImage}
              setActiveWatchImage={setActiveWatchImage}
            />
            <Dots
              color="#ddf3fd"
              relatedImage="/ocean.png"
              activeWatchImage={activeWatchImage}
              setActiveWatchImage={setActiveWatchImage}
            />
          </div>
        </section>
        <section className="mb-[50px] grid w-fit grid-cols-[3fr_2fr_0.5fr] justify-self-start">
          <BuyBtn />
        </section>
        <section className="mb-[50px] grid grid-cols-[3fr_2fr_0.5fr]">
          <div className="first:h-fit first:self-end">
            <ArrowNav />
          </div>

          <div className="justify-space-between flex gap-[1.5em]">
            <div className="relative rounded-[10px] pt-0 before:absolute before:inset-x-0 before:inset-y-[3rem] before:z-[-1] before:h-[80px] before:max-h-full before:w-[150px] before:max-w-full before:rounded-[0.75rem] before:bg-[#434558c3] before:content-['']">
              <Thumbnail
                loading="eager"
                imgsrc="/navy.png"
                setActiveWatchImage={setActiveWatchImage}
              />
            </div>
            <div className="relative rounded-[10px] pt-0 before:absolute before:inset-x-0 before:inset-y-[3rem] before:z-[-1] before:h-[80px] before:max-h-full before:w-[150px] before:max-w-full before:rounded-[0.75rem] before:bg-[#6addcc] before:content-['']">
              <Thumbnail
                imgsrc="/mint.png"
                setActiveWatchImage={setActiveWatchImage}
              />
            </div>
            <div className="relative rounded-[10px] pt-0 before:absolute before:inset-x-0 before:inset-y-[3rem] before:z-[-1] before:h-[80px] before:max-h-full before:w-[150px] before:max-w-full before:rounded-[0.75rem] before:bg-[#ddf3fd] before:content-['']">
              <Thumbnail
                imgsrc="/ocean.png"
                setActiveWatchImage={setActiveWatchImage}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
