"use client";
import Image from "next/image";

const Figure = ({ imgsrc, setActiveWatchImage }) => {
	return (
		<figure onClick={() => setActiveWatchImage(imgsrc)}>
			<Image src={imgsrc} alt="" width={500} height={500} className="w-35 cursor-pointer" />
		</figure>
	);
};

export default Figure;
