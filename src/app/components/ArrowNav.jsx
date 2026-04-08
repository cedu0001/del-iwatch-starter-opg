import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const ArrowNav = () => {
	return (
		<div className="flex gap-[3em]">
			<FaArrowLeft />
			<button>1</button>
			<FaArrowRight />
		</div>
	);
};

export default ArrowNav;
