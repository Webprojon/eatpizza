"use client";
import React, { useEffect, useState } from "react";
import { items } from "@/lib/data";
import Image from "next/image";
import HeadingSection from "../../components/heading-section";
import clsx from "clsx";
import { ItemsType, SelectedItemType } from "@/lib/types";
import { useGlobalContext } from "@/context/global-context";
import { FaCartShopping, FaChevronUp } from "react-icons/fa6";
import Select from "../../components/select";
import { fadeInAnimationsVariants } from "@/lib/motion-anim";
import { motion } from "framer-motion";
import DesktopBasket from "@/components/items-basket";
import { useRouter } from "next/navigation";

export default function Products() {
	const router = useRouter();
	const [selectedPizza, setSelectedPizza] = useState<any>(null);
	const [hideModal, setHideModal] = useState<boolean>(false);
	const [isClient, setIsClient] = useState(false);
	const { choosenPizza, setChoosenPizza } = useGlobalContext();
	const [selectedVolume, setSelectedVolume] = useState<SelectedItemType>({});
	const [productPrices, setProductPrices] = useState<SelectedItemType>({});

	useEffect(() => {
		setIsClient(true);
	}, []);

	const shortenDescription = (
		description: string | undefined,
		maxLength: number,
	): string => {
		if (description === undefined) {
			return "";
		} else if (description.length > maxLength) {
			return `${description.split(" ").slice(0, 7).join(" ")}..`;
		}
		return description;
	};

	const handleSelect = (category: ItemsType) => {
		setSelectedPizza(category);
	};

	const addToCart = (category: ItemsType, size: number, price: number) => {
		const { id, itemCategory, img, name, description } = category;
		const selectedPizza = {
			itemId: id,
			itemCategory: itemCategory,
			itemImg: img,
			itemName: name,
			itemDesc: description,
			itemSize: size,
			itemPrice: price,
		};

		const existingChoosenItems = JSON.parse(
			localStorage.getItem("choosenItem") || "[]",
		);
		const updatedChoosenItem = [...existingChoosenItems, selectedPizza];
		localStorage.setItem("choosenItem", JSON.stringify(updatedChoosenItem));
		setChoosenPizza(updatedChoosenItem);
	};

	const handleAddSelectedItems = (
		itemCategory: string,
		category: ItemsType,
		price: number,
		index: number,
	) => {
		let addToCartParams: [ItemsType, number, number] = [category, 1, price];

		switch (itemCategory) {
			case "pizza":
				addToCartParams = [
					category,
					selectedVolume[index] || 24,
					productPrices[index] || 29.99,
				];
				break;
			case "sauce":
				addToCartParams = [category, 25, 2.99];
				break;
			case "drink":
				addToCartParams = [
					category,
					selectedVolume[index] || 0.5,
					productPrices[index] || 6.99,
				];
				break;
			case "cream":
				addToCartParams = [
					category,
					selectedVolume[index] || 100,
					productPrices[index] || 18.98,
				];
				break;
			default:
				break;
		}

		addToCart(...addToCartParams);
	};

	const definedPrice = (itemCategory: string, price: number, index: number) => {
		switch (itemCategory) {
			case "sale":
				return price;
			case "sauce":
				return price;
			case "pizza":
				return productPrices[index] ?? 29.99;
			case "drink":
				return productPrices[index] ?? 6.99;
			case "cream":
				return productPrices[index] ?? 18.98;
		}
	};

	const handleChangeItemVolume = (
		voluemId: number,
		volume: number,
		itemCategory: string,
	) => {
		setSelectedVolume((prevVolume) => ({
			...prevVolume,
			[voluemId]: volume,
		}));

		const calculateDrinkPrice = (volumeNum: number) => {
			switch (itemCategory) {
				case "pizza":
					switch (volumeNum) {
						case 24:
							return 29.99;
						case 29:
							return 37.98;
						case 34:
							return 42.98;
						case 39:
							return 47.98;
						default:
							return 0;
					}
				case "drink":
					switch (volumeNum) {
						case 0.5:
							return 6.99;
						case 0.85:
							return 9.99;
						case 1.5:
							return 14.99;
						default:
							return 0;
					}
				case "cream":
					switch (volumeNum) {
						case 100:
							return 18.99;
						case 465:
							return 39.98;
						default:
							return 0;
					}
			}
		};

		const itemPrice = calculateDrinkPrice(volume);
		setProductPrices((prevPrices: any) => ({
			...prevPrices,
			[voluemId]: itemPrice,
		}));
	};

	return (
		<section className="w-[78rem] max-sm:w-[100%] pt-16 mx-auto">
			<div className="flex flex-row items-start">
				<div>
					<div className="relative">
						{choosenPizza.length === 0 ? (
							""
						) : (
							<div
								onClick={() => router.push("/order")}
								className="fixed bottom-9 right-2 z-10 hidden max-sm:flex bg-red-600 dark:bg-red-900 py-[.9rem] px-4 rounded-full"
							>
								<span className="flex items-center justify-center font-semibold tracking-wider text-white text-md">
									<FaCartShopping className="mr-2" />
									{choosenPizza && choosenPizza[0].itemPrice} zł
								</span>
							</div>
						)}
					</div>
					<section className={`mb-5 scroll-mt-24`}>
						{Object.entries(items).map((categories, id) => (
							<div key={id}>
								<HeadingSection>{categories[0]}</HeadingSection>
								<div className="flex flex-wrap gap-6 max-sm:gap-6">
									{categories[1].map((category, index) => {
										const {
											id,
											itemCategory,
											img,
											name,
											description,
											price,
											volumes,
										} = category;
										return (
											<motion.div
												variants={fadeInAnimationsVariants}
												initial="initial"
												whileInView="animate"
												viewport={{
													once: true,
												}}
												custom={index}
												key={index}
												className="w-[30%] rounded-sm overflow-hidden shadow-md max-sm:shadow-sm max-sm:flex max-sm:flex-row
					       	max-sm:justify-between max-sm:w-full max-sm:rounded-none max-sm:pl-2 dark:bg-slate-800"
											>
												<div
													className="p-4 cursor-zoom-in bg-gray-50 dark:bg-slate-700 rounded-sm
						     transition-all max-sm:from-gray-300 max-sm:px-2 max-sm:w-[10rem] max-sm:flex max-sm:my-2"
												>
													<Image
														className={`mx-auto max-sm:h-[7rem] max-sm:w-[9rem]
											${itemCategory == "pizza" ? "h-[11rem] w-[14rem]" : itemCategory == "sale" ? "h-[11rem] w-[12rem]" : "h-[8rem] w-[8rem]"}
											`}
														src={img}
														quality="95"
														priority={true}
														alt="sale product"
													/>
												</div>
												<div className="p-4 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:pr-[.6rem] max-sm:pb-2 max-sm:pt-0">
													<div>
														<h2 className="tracking-wider font-semibold text-xl max-sm:pb-1 max-sm:text-gray-700 dark:text-gray-400">
															{name}
														</h2>
														<p
															className="tracking-wide w-[15rem] max-sm:text-sm py-1 text-gray-600 dark:text-gray-400 font-medium max-sm:py-0
						        		max-sm:w-[11rem]"
														>
															{shortenDescription(description, 20)}
														</p>
													</div>

													<div>
														{volumes && (
															<div
																className={`${itemCategory == "pizza" ? "max-sm:hidden" : "flex"} flex rounded-sm my-4 max-sm:my-1 border
													 border-gray-200 dark:border-slate-600 max-sm:w-[12rem]`}
															>
																{volumes.map((volume: number, idx: number) => (
																	<div
																		key={idx}
																		className={clsx(
																			`w-full ${itemCategory == "cream" ? "w-full" : "max-sm:w-[4rem]"} text-center py-2 relative text-sm cursor-pointer rounded-sm text-gray-600 dark:text-gray-400`,
																			{
																				"bg-gray-200 text-gray-700 dark:bg-slate-700":
																					selectedVolume[index] === volume ||
																					(idx === 0 && !selectedVolume[index]),
																			},
																		)}
																		onClick={() => {
																			handleChangeItemVolume(
																				index,
																				volume,
																				itemCategory,
																			);
																		}}
																	>
																		{selectedVolume[index] === volume ||
																		(idx === 0 && !selectedVolume[index])
																			? `${volume} ${itemCategory == "pizza" ? "sm" : itemCategory == "drink" ? "l" : "ml"}`
																			: volume}
																	</div>
																))}
															</div>
														)}
													</div>

													<div className="flex justify-between items-end mt-5">
														<div className="text-md text-gray-700 dark:text-gray-400 font-bold max-sm:text-sm pr-2">
															<span>
																{definedPrice(itemCategory, price, index)} zł
															</span>
														</div>
														<button
															className="bg-gradient-green bg-gradient-green-hover flex place-items-center text-sm transition-all
					       			text-white content-start font-semibold px-2 py-2 rounded-sm max-sm:px-2 trackinwg-wider"
														>
															<span
																onClick={() =>
																	handleAddSelectedItems(
																		itemCategory,
																		category,
																		category.price,
																		index,
																	)
																}
																className={`flex justify-center items-center
													${isClient && window.innerWidth <= 640 && itemCategory == "pizza" ? "hidden" : "flex"}
													`}
															>
																<FaCartShopping className="mr-2" />
																Add to cart
															</span>

															{itemCategory == "pizza" && (
																<span
																	onClick={() => {
																		handleSelect(category);
																		setHideModal(true);
																	}}
																	className="hidden max-sm:flex items-center tracking-widest"
																>
																	<FaChevronUp className="mr-2" />
																	Select
																</span>
															)}
														</button>
													</div>
												</div>
												{selectedPizza && selectedPizza.id === id && (
													<Select
														id={id}
														img={img}
														name={name}
														description={description}
														volumes={volumes}
														hideModal={hideModal}
														setHideModal={setHideModal}
													/>
												)}
											</motion.div>
										);
									})}
								</div>
							</div>
						))}
					</section>
				</div>
				<DesktopBasket />
			</div>
		</section>
	);
}
