/* const Dots = () => {
	return <p>hej</p>;
};

export default Dots; */

"use client";

import "../globals.css";

const Dots = ({ color, relatedImage, setActiveWatchImage }) => {
	return (
		<div
			onClick={() => setActiveWatchImage(relatedImage)}
			style={{ backgroundColor: color }}
			className={`dot-selected`}
		></div>
	);
};

export default Dots;
