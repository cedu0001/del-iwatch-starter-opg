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

/* import "./globals.css"; */

export default function Home() {
	const [activeWatchImage, setActiveWatchImage] = useState("/navy.png");
	return (
		<>
			<header>
				<nav className="nav-style">
					<FaApple size={50} className="apple-logo" />
					<ul>
						<li>Mac</li>
						<li>Iphone</li>
						<li>Ipad</li>
						<li>Support</li>
					</ul>
					<div>
						<FaSearch size={24} />
						<p>|</p>
						<RiShoppingBag3Line size={24} />
					</div>
				</nav>
			</header>

			<main>
				<section className="grid-3-2-1">
					<LandingPageText />
					<Image src={activeWatchImage} alt="iWatch" width={500} height={500} />
					<div>
						<Dots color="#434558" relatedImage="/navy.png" setActiveWatchImage={setActiveWatchImage} />
						<Dots color="#6addcc" relatedImage="/mint.png" setActiveWatchImage={setActiveWatchImage} />
						<Dots color="#b6ccda" relatedImage="/ocean.png" setActiveWatchImage={setActiveWatchImage} />
					</div>
				</section>
				<section className="grid-test">
					<BuyBtn />
				</section>
				<section className="grid-test">
					<div className="ar-nav">
						<ArrowNav />
					</div>

					<div className="flex space">
						<div className="bg-card">
							<Thumbnail loading="eager" imgsrc="/navy.png" setActiveWatchImage={setActiveWatchImage} />
						</div>
						<div className="bg-card">
							<Thumbnail imgsrc="/mint.png" setActiveWatchImage={setActiveWatchImage} />
						</div>
						<div className="bg-card">
							<Thumbnail imgsrc="/ocean.png" setActiveWatchImage={setActiveWatchImage} />
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
