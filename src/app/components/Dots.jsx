/* const Dots = () => {
	return <p>hej</p>;
};

export default Dots; */

"use client";

import "../globals.css";

const Dots = ({ color, relatedImage, setActiveWatchImage, activeWatchImage }) => {
	return (
		<div
			onClick={() => setActiveWatchImage(relatedImage)}
			style={{ backgroundColor: color }}
			className={`dot-selected ${relatedImage == activeWatchImage && "myborder"}`}
		></div>
	);
};

export default Dots;

//eksamensspørgsmål: hvorfor reagerer myborder klassen, når man klikker på thumbnail billedet?
//De læser begge fra det samme state, de læser fra det samme elementet, når statet opdateret, så alle elementer opdateres, de rerender
