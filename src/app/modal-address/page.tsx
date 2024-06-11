"use client";

import React, { ChangeEvent, useState } from "react";
import { CgClose } from "react-icons/cg";
import { useGlobalContext } from "@/context/global-context";
import Map from "./map";
import { motion } from "framer-motion";
import { animFromBottomToTop } from "@/lib/motion-anim";
import { useRouter } from "next/navigation";

export default function MapModalDesktop() {
	const router = useRouter();
	const { setUserAddress } = useGlobalContext();
	const [validInput, setValidInput] = useState(false);
	const [addressInfo, setAddressInfo] = useState({
		address: "",
		flat: "",
		floor: "",
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setAddressInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
	};

	const handleSubmit = () => {
		localStorage.setItem("address", JSON.stringify(addressInfo));

		if (addressInfo.address && addressInfo.flat) {
			const userStreet = `${addressInfo.address} / ${addressInfo.flat}`;
			setUserAddress(userStreet);
			localStorage.setItem("storeUserStreet", JSON.stringify(userStreet));

			closeMap();
		} else {
			setValidInput(!validInput);
		}
	};

	const closeMap = () => {
		router.push("/");
	};

	const handleInputClasses = (width: string) => {
		return `${width} border outline-green-500 py-2 px-3 rounded-sm tracking-wider text-gray-600
								 placeholder:text-gray-600 dark:outline-none dark:bg-slate-800 dark:text-gray-300 dark:placeholder:text-gray-300
								 ${validInput ? "border-red-500" : "border-gray-300"}
								 `;
	};

	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={animFromBottomToTop}
			className="max-sm:hidden mt-[8rem] mx-auto"
		>
			<div className="relative w-[65rem] bg-gray-50 dark:bg-slate-800 px-6 pt-4 pb-8 rounded-sm">
				<CgClose
					onClick={closeMap}
					className="absolute right-5 top-4 size-7 cursor-pointer hover:scale-110 transition"
				/>

				<div className="flex justify-between gap-x-6 mt-10">
					<div className="w-[60%]">
						<Map />
					</div>

					<div className="w-[40%]">
						<h2 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
							Enter your address
						</h2>
						<div>
							<form action="#" className="flex flex-col gap-y-6">
								<input
									type="text"
									name="address"
									autoComplete="off"
									placeholder="Address"
									onChange={handleChange}
									value={addressInfo.address}
									className={handleInputClasses("w-full")}
								/>
								<div className="flex gap-x-6">
									<input
										type="number"
										name="flat"
										placeholder="Flat"
										autoComplete="off"
										onChange={handleChange}
										value={addressInfo.flat}
										className={handleInputClasses("w-[50%]")}
									/>
									<input
										type="number"
										name="floor"
										autoComplete="off"
										placeholder="Floor"
										onChange={handleChange}
										value={addressInfo.floor}
										className={handleInputClasses("w-[50%]")}
									/>
								</div>
								<button
									onClick={handleSubmit}
									className="w-[9rem] rounded-sm bg-gradient-green bg-gradient-green-hover text-white py-[.4rem] px-4 font-semibold tracking-wider"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
