"use client";
import Map from "./map";
import { motion } from "framer-motion";
import { animFromBottomToTop } from "@/lib/motion-anim";
import { SubmitFormModalAddress } from "@/actions/action";

export default function MapModalDesktop() {
	const handleInputClasses = (width: string) => {
		return `${width} border border-gray-300 outline-green-500 py-2 px-3 rounded-sm tracking-wider text-gray-600
		 placeholder:text-gray-600 dark:outline-none dark:bg-slate-800 dark:text-gray-300 dark:placeholder:text-gray-300`;
	};

	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={animFromBottomToTop}
			className="mt-[6rem] mx-auto"
		>
			<div className="relative w-[65rem] bg-gray-50 dark:bg-slate-800 px-6 pt-4 pb-8 rounded-sm mx-auto">
				<div className="flex justify-between gap-x-6 mt-3">
					<div className="w-[60%]">
						<Map />
					</div>
					<div className="w-[40%]">
						<h2 className="font-semibold text-gray-700 dark:text-gray-300 my-5">
							Enter your address
						</h2>
						<div>
							<form
								action={SubmitFormModalAddress}
								className="flex flex-col gap-y-6"
							>
								<input
									type="text"
									name="useraddress"
									autoComplete="off"
									placeholder="Address"
									className={handleInputClasses("w-full dark:border-gray-500")}
								/>
								<div className="flex gap-x-6">
									<input
										type="number"
										name="userflat"
										placeholder="Flat"
										autoComplete="off"
										className={handleInputClasses(
											"w-[50%] dark:border-gray-500",
										)}
									/>
									<input
										type="number"
										name="userfloor"
										autoComplete="off"
										placeholder="Floor"
										className={handleInputClasses(
											"w-[50%] dark:border-gray-500",
										)}
									/>
								</div>
								<button className="self-end rounded-sm bg-gradient-green bg-gradient-green-hover text-white py-[.4rem] px-4 font-semibold tracking-wider">
									Submit form
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
