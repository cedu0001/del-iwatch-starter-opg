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
				<nav className="grid grid-cols-[1fr_auto_1fr] items-center my-[45px]">
					<FaApple size={50} className="col-start-1 justify-self-start self-center w-fit" />

					<ul className="col-start-2 flex items-center gap-[1em]">
						<li className="px-[60px] py-[10px] rounded-[20px] text-[18px] hover:bg-white hover:text-[rgba(182,204,218,1)] hover:cursor-pointer">
							Mac
						</li>
						<li className="px-[60px] py-[10px] rounded-[20px] text-[18px] hover:bg-white hover:text-[rgba(182,204,218,1)] hover:cursor-pointer">
							Iphone
						</li>
						<li className="px-[60px] py-[10px] rounded-[20px] text-[18px] hover:bg-white hover:text-[rgba(182,204,218,1)] hover:cursor-pointer">
							Ipad
						</li>
						<li className="px-[60px] py-[10px] rounded-[20px] text-[18px] hover:bg-white hover:text-[rgba(182,204,218,1)] hover:cursor-pointer">
							Support
						</li>
					</ul>

					<div className="col-start-3 justify-self-end self-center flex gap-[1em]">
						<FaSearch size={24} />
						<p>|</p>
						<RiShoppingBag3Line size={24} />
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
				<section className="grid grid-cols-[3fr_2fr_0.5fr] mb-[50px] justify-self-start w-fit">
					<BuyBtn />
				</section>
				<section className="grid grid-cols-[3fr_2fr_0.5fr] mb-[50px]">
					<div className="first:self-end first:h-fit">
						<ArrowNav />
					</div>

					<div className="flex justify-space-between gap-[1.5em]">
						<div className="relative rounded-[10px] pt-0 before:content-[''] before:absolute before:inset-y-[3rem] before:inset-x-0 before:bg-[#434558c3] before:rounded-[0.75rem] before:z-[-1] before:max-w-full before:w-[150px] before:max-h-full before:h-[80px]">
							<Thumbnail loading="eager" imgsrc="/navy.png" setActiveWatchImage={setActiveWatchImage} />
						</div>
						<div className="relative rounded-[10px] pt-0 before:content-[''] before:absolute before:inset-y-[3rem] before:inset-x-0 before:bg-[#6addcc] before:rounded-[0.75rem] before:z-[-1] before:max-w-full before:w-[150px] before:max-h-full before:h-[80px]">
							<Thumbnail imgsrc="/mint.png" setActiveWatchImage={setActiveWatchImage} />
						</div>
						<div className="relative rounded-[10px] pt-0 before:content-[''] before:absolute before:inset-y-[3rem] before:inset-x-0 before:bg-[#ddf3fd] before:rounded-[0.75rem] before:z-[-1] before:max-w-full before:w-[150px] before:max-h-full before:h-[80px]">
							<Thumbnail imgsrc="/ocean.png" setActiveWatchImage={setActiveWatchImage} />
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
