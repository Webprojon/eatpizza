"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaInfo } from "react-icons/fa6";
import AddToCartBtn from "./add-to-cart";
import { useGlobalContext } from "@/context/global-context";
import { fadeInAnimationsVariants } from "@/lib/motion-anim";
import { motion } from "framer-motion";

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
		<div className="flex flex-wrap gap-6">
			{items.map((product: any, index: number) => (
				<motion.div
					variants={fadeInAnimationsVariants}
					initial="initial"
					whileInView="animate"
					viewport={{
						once: true,
					}}
					custom={index}
					key={index}
					className="w-[31%] rounded-sm overflow-hidden shadow-md dark:bg-black/40 backdrop-blur-sm"
				>
					<div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-sm transition-all">
						<Link href={`/menu/${product.id}`}>
							<Image
								className={`mx-auto
									${product.itemCategory == "pizza" ? "h-[11rem] w-[11rem] hover:animate-spin-17s" : "h-[8rem] w-[8rem]"}
									`}
								src={product.itemImg}
								quality="95"
								priority={true}
								width={200}
								height={200}
								alt="sale product"
							/>
						</Link>
					</div>
					<div className="p-4">
						<div>
							<div className="flex items-center justify-between">
								<h2 className="tracking-wider font-semibold text-xl dark:text-gray-400">
									{product.itemName}
								</h2>
								<Link
									href={`/menu/${product.id}`}
									className="border rounded-full p-1 cursor-pointer hover:scale-110 transition-all"
								>
									<FaInfo className="size-3" />
								</Link>
							</div>
							<p className="tracking-wide w-[15rem] py-1 text-gray-600 dark:text-gray-400">
								{shortenDescription(product.itemDescription, 20)}
							</p>
						</div>
						<AddToCartBtn product={product} index={index} />
					</div>
				</motion.div>
			))}
		</div>
	);
}
