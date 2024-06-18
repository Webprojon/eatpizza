"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaInfo } from "react-icons/fa6";
import AddToCartBtn from "./add-to-cart";
import { useGlobalContext } from "@/context/global-context";

export default function ProductCards({ products }: any) {
	const [items, setItems] = useState(products);
	const { selectValue } = useGlobalContext();

	const shortenDescription = (
		description: string | null,
		maxLength: number,
	): string => {
		if (description === null) {
			return "";
		} else if (description.length > maxLength) {
			return `${description.split(" ").slice(0, 7).join(" ")}..`;
		} else {
			return description;
		}
	};

	//useEffect(() => {
	//	const handleFilterBySelectValue = (selectValue: string) => {
	//		switch (selectValue) {
	//			case "pizzas":
	//				return products.filter(
	//					(product: any) => product.itemCategory === "pizza",
	//				);
	//			case "sauces":
	//				return products.filter(
	//					(product: any) => product.itemCategory === "sauce",
	//				);
	//			case "drinks":
	//				return products.filter(
	//					(product: any) => product.itemCategory === "drink",
	//				);
	//			case "creams":
	//				return products.filter(
	//					(product: any) => product.itemCategory === "cream",
	//				);
	//			default:
	//				return products;
	//		}
	//	};

	//	const filteredItems = handleFilterBySelectValue(selectValue);
	//	setItems(filteredItems);
	//}, [selectValue, products]);

	useEffect(() => {
		const handleFilterBySelectValue = (selectValue: string) => {
			const categories: { [key: string]: string } = {
				pizzas: "pizza",
				sauces: "sauce",
				drinks: "drink",
				creams: "cream",
			};

			return selectValue in categories
				? products.filter(
						(product: any) => product.itemCategory === categories[selectValue],
					)
				: products;
		};

		const filteredItems = handleFilterBySelectValue(selectValue);
		setItems(filteredItems);
	}, [selectValue, products]);

	return (
		<div className="flex flex-wrap gap-6 max-sm:gap-y-4">
			{items.map((product: any, index: number) => {
				const { id, itemCategory, itemImg, itemName, itemDescription } =
					product;
				return (
					<div
						key={index}
						className="w-[31%] rounded-sm overflow-hidden shadow-md max-sm:shadow-sm max-sm:flex max-sm:flex-row
						  	max-sm:justify-between max-sm:w-full max-sm:rounded-none max-sm:pl-2 dark:bg-slate-800 max-sm:py-4"
					>
						<div
							className="p-4 bg-gray-50 dark:bg-slate-700 rounded-sm
						   transition-all max-sm:from-gray-300 max-sm:px-2 max-sm:w-[10rem] max-sm:flex max-sm:my-2"
						>
							<Link href={`/menu/${id}`}>
								<Image
									className={`mx-auto max-sm:h-[8rem] max-sm:w-[9rem]
									${itemCategory == "pizza" ? "h-[11rem] w-[11rem] hover:animate-spin-17s" : "h-[8rem] w-[8rem]"}
									`}
									src={itemImg}
									quality="95"
									priority={true}
									width={200}
									height={200}
									alt="sale product"
								/>
							</Link>
						</div>
						<div className="p-4 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:pr-[.6rem] max-sm:pb-2 max-sm:pt-0">
							<div>
								<div className="flex items-center justify-between">
									<h2 className="tracking-wider font-semibold text-xl max-sm:pb-1 max-sm:text-gray-700 dark:text-gray-400">
										{itemName}
									</h2>
									<Link
										href={`/menu/${product.id}`}
										className="border rounded-full p-1 cursor-pointer hover:scale-110 transition-all"
									>
										<FaInfo className="size-3" />
									</Link>
								</div>
								<p
									className="tracking-wide w-[15rem] max-sm:text-sm py-1 text-gray-600 dark:text-gray-400 max-sm:py-0
						        max-sm:w-[11rem]"
								>
									{shortenDescription(itemDescription, 20)}
								</p>
							</div>
							<AddToCartBtn product={product} index={index} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
