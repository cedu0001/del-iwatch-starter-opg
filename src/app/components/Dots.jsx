"use client";

import "../globals.css";

const Dots = ({ color, relatedImage, setActiveWatchImage, activeWatchImage }) => {
	return (
		<div
			onClick={() => setActiveWatchImage(relatedImage)}
			style={{ backgroundColor: color }}
			className={`w-[clamp(24px,19.5px+1.125cqi,33px)] h-[clamp(24px,19.5px+1.125cqi,33px)] rounded-full mb-[10px] hover:shadow-[0_2px_5px_#17171748] hover:cursor-pointer ${relatedImage == activeWatchImage ? "border-[3px] border-white" : ""}`}
		></div>
	);
};

export default Dots;

//eksamensspørgsmål: hvorfor reagerer myborder klassen, når man klikker på thumbnail billedet?
//De læser begge fra det samme state, de læser fra det samme elementet, når statet opdateret, så alle elementer opdateres, de rerender
