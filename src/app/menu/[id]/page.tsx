import prisma from "@/lib/db";

export default async function Product({ params }: { params: { id: string } }) {
	const product = await prisma.products.findUnique({
		where: {
			id: params.id,
		},
	});
	return (
		<div>
			<h1>{product?.itemName}</h1>
		</div>
	);
}

// ===============================================================================================

//import Image from "next/image";
//import React, { useState } from "react";
//import { FaCartShopping, FaChevronLeft, FaUser } from "react-icons/fa6";
//import { motion } from "framer-motion";
//import clsx from "clsx";
//import { GiThreeLeaves } from "react-icons/gi";
//import { useGlobalContext } from "@/context/global-context";
//import { SelectedItemType } from "@/lib/types";
//import { StaticImageData } from "next/image";
//import { animFromBottomToTop } from "@/lib/motion-anim";

//interface PizzaTypeProps {
//	id: number;
//	img: StaticImageData;
//	name: string;
//	description?: string;
//	volumes: number[];
//	hideModal: boolean;
//	setHideModal: React.Dispatch<React.SetStateAction<boolean>>;
//}

//const Select = (pizzaProps: PizzaTypeProps) => {
//	const {
//		id,
//		img,
//		name,
//		description,
//		volumes,
//		hideModal,
//		setHideModal,
//	}: PizzaTypeProps = pizzaProps;

//	const [selectedSize, setSelectedSize] = useState<SelectedItemType>({});
//	const [pizzaPrice, setPizzaPrice] = useState<number>(29.99);
//	const [person, setPerson] = useState<string>("1");
//	const [isChecked, setIsChecked] = useState<boolean>(false);
//	const { setChoosenPizza } = useGlobalContext();

//	const handleSizeChange = (productId: number, size: number) => {
//		setSelectedSize((prevSizes) => ({
//			...prevSizes,
//			[productId]: size,
//		}));

//		switch (size) {
//			case 24:
//				setPizzaPrice(isChecked ? 37.98 : 29.99);
//				setPerson("1");
//				break;
//			case 29:
//				setPizzaPrice(isChecked ? 45.97 : 37.98);
//				setPerson("1-2");
//				break;
//			case 34:
//				setPizzaPrice(isChecked ? 50.97 : 42.98);
//				setPerson("2-3");
//				break;
//			case 39:
//				setPizzaPrice(isChecked ? 55.97 : 47.98);
//				setPerson("3-4");
//				break;
//			default:
//				return pizzaPrice;
//		}
//	};

//	const onChangeCheckBox = (e: {
//		target: { checked: boolean; value: React.SetStateAction<string> };
//	}) => {
//		setIsChecked(() => e.target.checked);
//		handleSizeChange(id, selectedSize[id] || volumes[0]);
//	};

//	const closeModal = () => {
//		setHideModal(false);
//	};

//	const addtoCart = (price: number, size: number) => {
//		const selectedPizza = {
//			itemId: id,
//			itemImg: img,
//			itemName: name,
//			itemDesc: description,
//			itemSize: size,
//			itemPrice: price,
//		};

//		const existingChoosenItems = JSON.parse(
//			localStorage.getItem("choosenItem") || "[]",
//		);

//		const updatedChoosenItem = [...existingChoosenItems, selectedPizza];

//		localStorage.setItem("choosenItem", JSON.stringify(updatedChoosenItem));

//		setChoosenPizza(updatedChoosenItem);

//		setHideModal(false);
//	};

//	return (
//		<motion.div
//			initial="initial"
//			animate="animate"
//			variants={animFromBottomToTop}
//			className={`hidden ${hideModal ? "max-sm:block" : "max-sm:hidden"} fixed top-0 left-0 transition-all
//			 z-[1000] bg-gray-100 dark:bg-slate-700
//			 w-full h-full`}
//		>
//			<div
//				className="bg-gray-50 dark:bg-slate-800 w-full h-16 flex items-center pl-3 text-gray-600 dark:text-gray-300"
//				onClick={closeModal}
//			>
//				<FaChevronLeft className="size-5" />
//				<span className="font-bold tracking-wider">Back</span>
//			</div>

//			<div className="px-4 pt-4">
//				<Image
//					className="w-[16rem] mx-auto"
//					src={img}
//					quality="95"
//					priority={true}
//					alt="selected pizza image"
//				/>

//				<div className="mt-6">
//					<div className="flex justify-between items-center mb-4">
//						<span className="px-2 rounded-sm tracking-wider text-md bg-orange-600 text-white">
//							Hit
//						</span>
//						<span className="flex items-center text-gray-500 dark:text-gray-300">
//							<GiThreeLeaves className="text-green-700" />
//							<FaUser className="mx-2" /> {person}
//						</span>
//					</div>

//					<h2 className="font-bold text-xl text-gray-700 dark:text-gray-300 pb-1 tracking-wider">
//						{name}
//					</h2>
//					<p className="leading-6 font-normal text-md text-gray-500 dark:text-gray-400 tracking-wide">
//						{description}
//					</p>
//				</div>
//			</div>

//			<div className="fixed bottom-0 flex flex-col justify-between w-full h-[13rem] p-4 bg-gray-50 dark:bg-slate-800">
//				<div>
//					<div className="flex justify-between items-center">
//						<input
//							onChange={onChangeCheckBox}
//							className="accent-green-600 size-[1.2rem]"
//							type="checkbox"
//						/>
//						<span className="text-sm text-gray-400">
//							Garlic butter on pizza crust
//						</span>
//						<span className="text-green-600 font-semibold">7.99 zł</span>
//					</div>

//					<div className="flex items-center w-full mt-6 rounded-sm border border-gray-300 dark:border-slate-600">
//						{volumes &&
//							volumes.map((volume: number, idx: number) => (
//								<div
//									key={idx}
//									className={clsx(
//										"w-[6rem] text-center py-2 relative text-md cursor-pointer rounded-sm text-gray-600 dark:text-gray-400",
//										{
//											"bg-gray-300 dark:bg-slate-700 text-gray-700 transition-all":
//												selectedSize[id] === volume ||
//												(idx === 0 && !selectedSize[id]),
//										},
//									)}
//									onClick={() => {
//										handleSizeChange(id, volume);
//									}}
//								>
//									{selectedSize[id] === volume ||
//									(idx === 0 && !selectedSize[id])
//										? `${volume} sm`
//										: volume}
//								</div>
//							))}
//					</div>
//				</div>

//				<div className="flex justify-between items-center">
//					<span className="text-lg font-bold tracking-wider text-green-600">
//						{pizzaPrice} zł
//					</span>
//					<button
//						onClick={() => {
//							addtoCart(pizzaPrice, selectedSize[id]);
//						}}
//						className="flex items-center bg-gradient-to-r bg-gradient-green font-bold tracking-wider text-white
//						 px-3 py-2 rounded-sm transition-all text-lg"
//					>
//						<FaCartShopping className="mr-2" />
//						Add to cart
//					</button>
//				</div>
//			</div>
//		</motion.div>
//	);
//};

//export default Select;
