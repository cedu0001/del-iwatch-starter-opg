import Image from "next/image";
import Heading from "./components/Heading";
import Text from "./components/Text";

import { FaApple } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
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
			</main>
		</>
	);
}
