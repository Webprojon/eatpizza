"use client";
import React, { useEffect, useState } from "react";
import basket from "@images/general-imgs/basket.png";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import animpizza from "@images/general-imgs/animpizza.png";
import { CgClose } from "react-icons/cg";
import Counter from "./counter";
import toast from "react-hot-toast";
import { useGlobalContext } from "@/context/global-context";
import { useRouter } from "next/navigation";
import { SubmitFormBasket } from "@/actions/promocode-action";

export default function DesktopBasket() {
	const { choosenPizza, setChoosenPizza } = useGlobalContext();
	const [open, setOpen] = useState<boolean>(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const [numberOfItems, setNumberOfItems] = useState(1);
	const router = useRouter();

	useEffect(() => {
		const storedChoosenItem = JSON.parse(
			localStorage.getItem("choosenItem") || "[]",
		);
		setChoosenPizza(storedChoosenItem);
	}, []);

	const isOpenCart = () => {
		setOpen(!open);
	};

	const getTotalPrice = (total: number) => {
		setTotalPrice((prevPrice) => {
			const expectedSum = prevPrice + total;
			return expectedSum;
		});
	};

	const deleteOneItem = (index: number, total: number) => {
		const updatedPizzas = [...choosenPizza];
		updatedPizzas.splice(index, 1);

		localStorage.setItem("choosenItem", JSON.stringify(updatedPizzas));
		setChoosenPizza(updatedPizzas);

		setTotalPrice((prevPrice) => prevPrice - Math.floor(total));
		setNumberOfItems((numOfItem) => numOfItem - 1);
		toast.error("You have deleted one item 😏");
	};

	const clearAllItems = () => {
		setChoosenPizza([]);
		setTotalPrice(0);
		toast.success("Cart is empty ! Stay with us 😊");
		localStorage.removeItem("choosenItem");
	};

	const definedCategory = (category: string) => {
		switch (category) {
			case "pizza":
				return "sm";
			case "sauce":
				return "gr";
			case "drink":
				return "l";
			case "cream":
				return "ml";
			default:
				return "";
		}
	};

	return (
		<div className="sticky top-[3.4rem] transition-all w-[18rem] h-[23rem] flex flex-col gap-y-2">
			<div className="bg-white dark:bg-slate-800 dark:bg-black/40 backdrop-blur-sm rounded-sm shadow-md">
				<div className={`relative ${open ? "h-[9.2vh]" : "h-[48vh]"}`}>
					<div
						onClick={isOpenCart}
						className="flex justify-between border-b border-gray-300 dark:border-gray-500 px-4 py-4 cursor-pointer"
					>
						<span className="flex items-center font-bold text-lg">
							Cart {open ? <GoTriangleDown /> : <GoTriangleUp />}
						</span>

						<Image
							src={animpizza}
							className="animate-spin-3s hover:animate-none w-[2.2em] h-[2.2rem] mr-3"
							quality="95"
							priority={true}
							alt="circle pizza"
						/>
					</div>

					<div
						className={`${open ? " hidden" : "flex"} flex-col items-center relative mt-1 m-4`}
					>
						<div className="w-full">
							{choosenPizza.length === 0 ? (
								<div className="mt-4 flex flex-col items-center">
									<Image
										src={basket}
										quality="95"
										priority={true}
										alt="basket"
										className="mt-3 w-[10rem]"
									/>
									<p className="animate-pulse text-sm text-center px-1 pt-4 text-gray-600 dark:text-gray-300 font-medium">
										Your cart is empty. Add items from the menu or repeat your
										previous order.
									</p>
								</div>
							) : (
								<div>
									<div className="border-b h-[24vh] overflow-y-scroll no-scrollbar">
										<div className="mb-2 flex justify-between w-full tracking-wider">
											<span>({numberOfItems})</span>
											<span onClick={clearAllItems} className="cursor-pointer">
												clear
											</span>
										</div>
										{choosenPizza &&
											choosenPizza.map((item, index: number) => {
												const { itemImg, itemName, itemCategory, itemPrice } =
													item;
												return (
													<div
														onLoad={() => {
															setOpen(false);
															getTotalPrice(itemPrice);
															setNumberOfItems(choosenPizza.length);
														}}
														key={index}
														className="mb-3 pb-2"
													>
														<div className="mb-3 last:mb-1 relative flex items-center">
															<div>
																<Image
																	className="w-[3.8rem]"
																	quality="95"
																	priority={true}
																	width={200}
																	height={200}
																	src={itemImg}
																	alt={itemName}
																/>
															</div>
															<div className="ml-3">
																<h2 className="text-gray-800 text-sm font-bold tracking-wider dark:text-gray-300">
																	{itemName}
																</h2>
																<div className="flex pt-[.3rem] text-gray-700 dark:text-gray-300 text-xs font-semibold tracking-wide">
																	<span
																		className={
																			itemCategory === "pizza"
																				? `block pr-4`
																				: "hidden"
																		}
																	>
																		traditional
																	</span>
																	<span>
																		{item.itemSize}{" "}
																		{definedCategory(itemCategory)}
																	</span>
																</div>
															</div>
															<CgClose
																onClick={() => {
																	deleteOneItem(index, itemPrice);
																}}
																className="absolute top-0 right-0 cursor-pointer size-5"
															/>
														</div>
														<div className="flex items-end justify-between w-full">
															<Counter
																index={index}
																total={itemPrice}
																setTotalPrice={setTotalPrice}
																setNumberOfItems={setNumberOfItems}
															/>
															<span className="font-semibold text-xs tracking-wider text-gray-700 dark:text-gray-300">
																{itemPrice} zł
															</span>
														</div>
													</div>
												);
											})}
									</div>
									<div className="mt-6">
										<div className="flex items-center justify-between w-full">
											<h3 className="text-md tracking-wider font-bold">
												Total:
											</h3>
											<span className="text-md tracking-wider font-bold">
												{totalPrice.toFixed(2)} zł
											</span>
										</div>
										<button
											onClick={() => router.push("/delivery")}
											className="w-full bg-gradient-green bg-gradient-green-hover tracking-widest rounded-sm mt-1 py-2 
											text-sm font-semibold text-white cursor-pointer"
										>
											Submit Now
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			<form
				action={SubmitFormBasket}
				className="relative shadow-md bg-white dark:bg-slate-800 rounded-sm py-[.7rem] px-4"
			>
				<input
					type="text"
					name="promocode"
					placeholder="Enter promocode"
					autoComplete="off"
					className="bg-gray-100 focus:bg-gray-50 font-medium outline-green-400 border px-4 py-2 rounded-sm
					dark:outline-none dark:bg-slate-800 dark:border-gray-500 dark:text-gray-300 dark:placeholder:text-gray-300"
				/>
				<button
					className="bg-gradient-green bg-gradient-green-hover flex justify-center items-center rounded-sm absolute bottom-[.7rem] 
					right-4 w-8 h-[2.6rem] cursor-pointer"
				>
					<FaChevronRight className="text-white" />
				</button>
			</form>
		</div>
	);
}
