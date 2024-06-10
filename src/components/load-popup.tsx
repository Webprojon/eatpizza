import { useGlobalContext } from "@/context/global-context";
import React from "react";
import { motion } from "framer-motion";

interface PopupItemsType {
	isLoaded: boolean;
	validDate: number;
}

export default function LoadPopup() {
	const { isLoaded, setIsLoaded } = useGlobalContext();

	const currentDate = new Date().getDate();
	const handleSaveItems = () => {
		const popupItems: PopupItemsType = {
			isLoaded,
			validDate: currentDate + 2,
		};
		localStorage.setItem("popupItems", JSON.stringify(popupItems));
	};

	const handleYesBtn = () => {
		setIsLoaded(!isLoaded);
		handleSaveItems();
	};

	const handleNoBtn = () => {
		handleSaveItems();
	};

	const storedItems = JSON.parse(localStorage.getItem("popupItems") || "[]");
	if (storedItems) {
		if (storedItems.validDate == currentDate) {
			localStorage.removeItem("popupItems");
		}
	}

	return (
		<div
			className={`${storedItems.isLoaded ? "hidden" : "block"} fixed top-[13.5%] max-sm:top-[12.6%] left-1/2 -translate-x-1/2 z-[1011]`}
		>
			<motion.div
				initial={{ opacity: 0, y: -250 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 1 }}
				className="flex flex-col justify-center items-center py-2 w-[25rem] max-sm:w-[22rem] bg-gray-50 dark:bg-gray-800 rounded-md"
			>
				<h1 className="font-semibold text-lg tracking-wider">
					Are you located in Warsaw ?
				</h1>
				<div className="my-2 animate-pulse">
					<button
						onClick={handleYesBtn}
						className="mr-5 bg-green-400 hover:bg-green-300 transition-all py-1 px-6 tracking-wider rounded-md text-white font-semibold
						max-sm:py-2"
					>
						Yes
					</button>
					<button
						onClick={handleNoBtn}
						className="bg-red-400 hover:bg-red-300 transition-all py-1 px-6 tracking-wider rounded-md text-white font-semibold max-sm:py-2"
					>
						No
					</button>
				</div>
			</motion.div>
		</div>
	);
}
