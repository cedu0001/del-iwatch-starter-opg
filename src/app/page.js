"use client";
import Image from "next/image";
import { useState } from "react";

import LandingPageText from "./components/LandingPageText";
import LandingPagePicture from "./components/LandingPagePicture";
import Dots from "./components/Dots";
import BuyBtn from "./components/BuyBtn";
import Thumbnail from "./components/Thumbnail";
import ArrowRight from "./components/ArrowRight";
import ArrowLeft from "./components/ArrowLeft";

import { FaApple } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";

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
						<Dots />
						<Dots />
						<Dots />
					</div>
				</section>
				<section className="grid-test">
					<BuyBtn />
				</section>
				<section className="grid-test">
					<div className="flex justify-evenly">
						<ArrowLeft />

						<ArrowRight />
					</div>
					<div className="flex">
						<div className="bg-card">
							<Thumbnail imgsrc="/navy.png" setActiveWatchImage={setActiveWatchImage} />
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

/* 	<main>
				<section>
					<div>
						<h1>
							<span>The Perfect Moment</span> <br /> Between Past And Future.
						</h1>
					</div>

					<div>
						<Image src="/navy.png" width={500} height={500} alt="et iWatch ur" loading="eager" />
					</div>

					<div>
						<button className="item-scroll" id="navy"></button>
						<p>|</p>
						<button className="item-scroll" id="mint"></button>
						<p>|</p>
						<button className="item-scroll" id="coral"></button>
					</div>

					<div>
						<button className="buy-btn">Buy Now</button>
					</div>

					<div>
						<div>
							<button>
								<FaArrowLeft />
							</button>
							<p>1</p>
							<button>
								<FaArrowRight />
							</button>
						</div>
					</div>

					<div>
						<div className="bg-card">
							{" "}
							<Image src="/navy.png" width={90} height={90} alt="et iWatch ur" loading="eager" />
						</div>
						<div className="bg-card">
							{" "}
							<Image src="/mint.png" width={90} height={90} alt="et iWatch ur" loading="eager" />
						</div>
						<div className="bg-card">
							{" "}
							<Image src="/ocean.png" width={90} height={90} alt="et iWatch ur" loading="eager" />
						</div>
					</div>
				</section>
			</main> */
