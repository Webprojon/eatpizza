"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
		<div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 md:mr-4 lg:gap-8 xl:mr-0 mx-auto">
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
					className="rounded-sm overflow-hidden shadow-xl bg-slate-100 dark:bg-black/40 backdrop-blur-sm"
				>
					<div className="p-4 rounded-sm transition-all">
						<Link href={`/menu/${product.id}`}>
							<Image
								className={`mx-auto
									${product.itemCategory == "pizza" ? "h-[8.5rem] w-[9rem] sm:h-[11rem] sm:w-[11rem] hover:animate-spin-17s" : "h-[8rem] w-[8rem]"}
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
						<div className="flex justify-between items-center">
							<h2 className="tracking-wider font-semibold text-sm lg:text-xl dark:text-gray-400">
								{product.itemName}
							</h2>
							<span className="text-sm sm:hidden">
								{product.itemPrice}.99 zl
							</span>
						</div>
						<div className="hidden sm:block">
							<p className="tracking-wide w-[15rem] py-1 text-gray-600 dark:text-gray-400">
								{shortenDescription(product.itemDescription, 20)}
							</p>
							<AddToCartBtn product={product} index={index} />
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
}
