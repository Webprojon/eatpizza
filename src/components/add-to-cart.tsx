"use client";
import { useGlobalContext } from "@/context/global-context";
import { ItemsType, SelectedItemType } from "@/lib/types";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCartShopping, FaChevronUp } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const pizzaVolumes = [24, 29, 34, 39];
const sauceVolumes = [25, 50];
const drinkVolumes = [0.5, 0.85, 1.5];
const creamVolumes = [100, 465];

export default function AddToCartBtn({ product, index }: any) {
	const [isClient, setIsClient] = useState(false);
	const { itemCategory, itemPrice } = product;
	const { setChoosenPizza } = useGlobalContext();
	const [selectedVolume, setSelectedVolume] = useState<SelectedItemType>({});
	const [productPrices, setProductPrices] = useState<SelectedItemType>({});
	const pathname = usePathname();

	useEffect(() => {
		setIsClient(true);
	}, []);

	const definedPrice = (itemCategory: string, index: number) => {
		switch (itemCategory) {
			case "pizza":
				return productPrices[index] ?? 29.99;
			case "sauce":
				return productPrices[index] ?? 2.99;
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
				case "sauce":
					switch (volumeNum) {
						case 25:
							return 2.99;
						case 50:
							return 5.99;
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

	const addToCart = (
		category: ItemsType,
		itemSize: number,
		itemPrice: number,
	) => {
		const { itemId, itemCategory, itemImg, itemName, itemDescription } =
			category;
		const selectedPizza = {
			itemId,
			itemCategory,
			itemImg,
			itemName,
			itemDescription,
			itemSize,
			itemPrice,
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
				addToCartParams = [
					category,
					selectedVolume[index] || 25,
					productPrices[index] || 2.99,
				];
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

	const getVolumesByCategory = (itemCategory: string) => {
		switch (itemCategory) {
			case "pizza":
				return pizzaVolumes;
			case "sauce":
				return sauceVolumes;
			case "drink":
				return drinkVolumes;
			case "cream":
				return creamVolumes;
			default:
				return [];
		}
	};
	const volumesToMap = getVolumesByCategory(itemCategory);

	return (
		<div>
			<div
				className={`flex rounded-sm my-6 border border-gray-200 dark:border-slate-600`}
			>
				{volumesToMap.map((volume: number, idx: number) => (
					<div
						key={idx}
						className={clsx(
							`w-full text-center py-2 relative text-sm cursor-pointer rounded-sm text-gray-600 dark:text-gray-400`,
							{
								"bg-gray-200 text-gray-700 dark:bg-slate-700":
									selectedVolume[index] === volume ||
									(idx === 0 && !selectedVolume[index]),
							},
						)}
						onClick={() => {
							handleChangeItemVolume(index, volume, itemCategory);
						}}
					>
						{selectedVolume[index] === volume ||
						(idx === 0 && !selectedVolume[index])
							? `${volume} ${itemCategory == "pizza" ? "SM" : itemCategory == "drink" ? "L" : "ML"}`
							: volume}
					</div>
				))}
			</div>

			<div className="flex justify-between items-end mt-10">
				<div className="text-md text-gray-700 dark:text-gray-400 font-bold pr-2">
					<span>{definedPrice(itemCategory, index)} zł</span>
				</div>

				<button>
					<Link
						className="bg-gradient-green bg-gradient-green-hover flex place-items-center text-sm transition-all
          	text-white content-start font-semibold tracking-widest px-4 py-2 rounded-sm trackinwg-wider"
						href={"/menu"}
						onClick={() =>
							handleAddSelectedItems(itemCategory, product, itemPrice, index)
						}
					>
						Add to
						<FaCartShopping className="ml-2" />
					</Link>
				</button>
			</div>
		</div>
	);
}
