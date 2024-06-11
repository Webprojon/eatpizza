"use client";

import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { useGlobalContext } from "@/context/global-context";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
import Counter from "../../components/counter";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Input from "../../components/input";
import { animFromBottomToTop } from "@/lib/motion-anim";

export default function MobileBasket() {
	const router = useRouter();
	const [totalPrice, setTotalPrice] = useState(0);
	const [numberOfItems, setNumberOfItems] = useState(0);
	const { choosenPizza, setChoosenPizza } = useGlobalContext();

	useEffect(() => {
		const storedChoosenItem = JSON.parse(
			localStorage.getItem("choosenItem") || "[]",
		);
		setChoosenPizza(storedChoosenItem);
	}, []);

	const shortenDescription = (
		description: string,
		maxLength: number,
	): string => {
		if (description.length > maxLength) {
			return `${description.split(" ").slice(0, 3).join(" ")}..`;
		}

		return description;
	};

	const deleteOneItem = (index: number, total: number) => {
		const updatedPizzas = [...choosenPizza];
		updatedPizzas.splice(index, 1);
		if (updatedPizzas.length < 1) {
			router.push("/");
		}

		localStorage.setItem("choosenItem", JSON.stringify(updatedPizzas));
		setChoosenPizza(updatedPizzas);
		setTotalPrice((prevPrice) => prevPrice - Math.floor(total));
		setNumberOfItems((numOfItem) => numOfItem - 1);
	};

	const clearAllItems = () => {
		setChoosenPizza([]);
		setTotalPrice(0);
		toast.success("Cart is empty ! Stay with us 😊");
		router.push("/");
		localStorage.removeItem("choosenItem");
	};

	const getTotalPrice = (total: number) => {
		setTotalPrice((prevPrice) => prevPrice + Math.floor(total));
	};

	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={animFromBottomToTop}
			className="w-[100%] max-w-[78rem] mx-auto mt-[6.5rem]"
		>
			{choosenPizza.length === 0 ? (
				<div className="w-[40%] mx-auto flex flex-col justify-center items-center mt-[10rem] dark:bg-slate-800 rounded-sm py-10">
					<h1 className="font-semibold tracking-wider text-xl">
						You have no item selected yet 😏
					</h1>
					<button
						onClick={() => router.push("/menu")}
						className="flex place-items-center mt-4 bg-gradient-green bg-gradient-green-hover font-semibold text-white transition-all
	            rounded-sm py-2 px-4"
					>
						Go to menu
					</button>
				</div>
			) : (
				<div>
					{/* Header */}
					<div className="flex justify-between items-center w-full h-10 py-8 px-4 bg-gray-50 dark:bg-slate-800">
						<div
							onClick={() => router.push("/menu")}
							className="flex items-center cursor-pointer"
						>
							<FaChevronLeft className="size-6" />
							<span className="max-sm:hidden pl-2 font-semibold">Back</span>
						</div>

						<span className="font-bold tracking-wide">
							Your Cart ({numberOfItems})
						</span>
						<ImBin onClick={() => clearAllItems()} className="size-6" />
					</div>
					{/* Basket */}
					<div className="w-full max-sm:py-2 px-4 py-10 bg-gray-50 dark:bg-slate-800">
						{choosenPizza &&
							choosenPizza.map((item: any, index: number) => (
								<div
									onLoad={() => {
										getTotalPrice(item.itemPrice);
										setNumberOfItems(choosenPizza.length);
									}}
									key={index}
									className="mb-6 max-sm:py-2 shadow-md"
								>
									<div className="flex items-start justify-between">
										<Image
											className="max-sm:w-[7.4rem] w-[10rem]"
											quality="95"
											priority={true}
											src={item.itemImg}
											alt={item.itemName}
										/>
										<div className="flex items-center justify-between flex-row-reverse w-[25rem] max-sm:w-[12.9rem] max-sm:flex-col">
											<div className="flex justify-between items-center gap-x-6 max-sm:gap-x-0 max-sm:items-start max-sm:w-[12.4rem]">
												<div>
													<h2 className="font-semibold text-lg text-gray-700 dark:text-gray-300">
														{item.itemName}
													</h2>
													<p className="hidden max-sm:block text-sm text-gray-500 dark:text-gray-300 font-medium">
														{item.itemDesc &&
															shortenDescription(item.itemDesc, 20)}
													</p>
												</div>
												<CgClose
													onClick={() => deleteOneItem(index, item.itemPrice)}
													className="cursor-pointer size-6"
												/>
											</div>

											<div className="max-sm:mt-3 flex justify-between gap-x-10">
												<Counter
													index={index}
													total={item.itemPrice}
													setTotalPrice={setTotalPrice}
													setNumberOfItems={setNumberOfItems}
												/>
												<p className="font-semibold text-gray-700 dark:text-gray-300">
													{item.itemPrice} zł
												</p>
											</div>
										</div>
									</div>
								</div>
							))}

						<div className="flex items-end justify-between">
							<div className="flex">
								<Input type="text" text="Enter promocode" size="md" />

								<button
									className="flex justify-center items-center w-[3.3rem] max-sm:w-[2.2rem] h-[2.7rem] bg-gradient-green rounded-tr-sm
						 rounded-br-sm cursor-pointer"
								>
									<FaChevronRight className="text-white size-6" />
								</button>
							</div>
							<div>
								<span className="text-2xl pr-2 font-bold text-gray-700 dark:text-gray-300">
									Total:
								</span>
								<span className="text-2xl font-bold text-gray-700 dark:text-gray-300">
									{totalPrice} zł
								</span>
							</div>
						</div>
					</div>
					{/* Contact information */}
					<div className="bg-gray-50 dark:bg-slate-800 px-4 py-7">
						<h2 className="mb-2 font-bold text-gray-600 dark:text-gray-300 tracking-wider text-lg max-sm:text-md">
							Contact information
						</h2>

						<form action="#" className="relative flex flex-col gap-y-4">
							<div className="flex gap-x-4">
								<Input type="text" text="Enter your name" />
								<div className="relative">
									<Input type="number" direction="pl" />
									<span className="absolute left-2 top-[50%] translate-y-[-50%] text-gray-500 dark:text-gray-300">
										+48
									</span>
								</div>
								<Input type="text" text="Street" />
								<Input type="number" text="Flat" size="sm" />
								<Input type="number" text="Floor" size="sm" />
							</div>
							<button className="absolute -right-4 -bottom-[5.5rem] w-[13rem] bg-gradient-green font-bold tracking-wider text-white px-3 py-2 rounded-sm transition-all">
								Submit the order
							</button>
						</form>
					</div>
				</div>
			)}
		</motion.div>
	);
}
