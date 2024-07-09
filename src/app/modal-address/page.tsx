"use client";
import Map from "./map";
import { motion } from "framer-motion";
import { animFromBottomToTop } from "@/lib/motion-anim";
import { SubmitFormModalAddress } from "@/actions/address-modal-action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function MapModalDesktop() {
	const router = useRouter();

	const handleInputClasses = (width: string) => {
		return `${width} border border-gray-300 outline-green-500 py-2 px-3 rounded-sm tracking-wider text-gray-600
		 placeholder:text-gray-600 dark:outline-none dark:bg-slate-800 dark:text-gray-300 dark:placeholder:text-gray-300`;
	};

	const handleSubmited = () => {
		setTimeout(() => {
			toast.success("Your address is saved 😊 !");
		}, 1000);

		setTimeout(() => {
			router.push("/");
		}, 1800);
	};

	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={animFromBottomToTop}
			className="absolute top-[6rem] left-0 right-0 mx-auto w-[90%] md:w-[50rem] md:mx-0 md:top-[7rem] md:left-[19rem]"
		>
			<div className="bg-gray-50 md:px-6 md:pt-4 md:pb-8 rounded-sm dark:bg-black/40 backdrop-blur-sm">
				<div className="md:flex justify-between gap-x-6 mt-3">
					<div className="w-full md:w-[60%]">
						<Map />
					</div>
					<div className="p-4 w-full md:p-0 md:w-[40%]">
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
									className={handleInputClasses(
										"w-full dark:border-gray-500 dark:bg-transparent",
									)}
								/>
								<div className="flex gap-x-6">
									<input
										type="number"
										name="userflat"
										placeholder="Flat"
										autoComplete="off"
										className={handleInputClasses(
											"w-[50%] dark:border-gray-500 dark:bg-transparent",
										)}
									/>
									<input
										type="number"
										name="userfloor"
										autoComplete="off"
										placeholder="Floor"
										className={handleInputClasses(
											"w-[50%] dark:border-gray-500 dark:bg-transparent",
										)}
									/>
								</div>
								<button
									onClick={handleSubmited}
									className="self-end rounded-sm bg-gradient-green bg-gradient-green-hover text-white py-[.4rem] px-4 font-semibold tracking-wider"
								>
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
