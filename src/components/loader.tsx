import React from "react";

const Loader = () => {
	return (
		<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
			<div className="animate-spin-1s  rounded-full h-10 w-10 border border-r-0 border-t-0 border-green-600"></div>
		</div>
	);
};

export default Loader;
