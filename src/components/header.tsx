"use client";
import logo from "../../public/general-imgs/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { FaLocationDot, FaMoon } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import { RiFeedbackFill } from "react-icons/ri";
import Link from "next/link";
import { MdOutlineDeliveryDining, MdRestaurantMenu } from "react-icons/md";
import { HiOutlineSun } from "react-icons/hi";
import { useTheme } from "@/context/theme-context";

export default function Header() {
	const [toggleNav, setToggleNav] = useState<boolean>(false);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const { theme, toggleTheme } = useTheme();

	useEffect(() => {
		if (isVisible) {
			setToggleNav(true);
		} else {
			setToggleNav(false);
		}
	}, [isVisible]);

	const handlers = useSwipeable({
		onSwipedLeft: () => setIsVisible(false),
		onSwipedRight: () => setIsVisible(true),
		trackMouse: true,
	});

	const handleIcons = () => {
		setToggleNav(!toggleNav);
		setIsVisible(!isVisible);
	};

	const navLinks = [
		{ href: "/", icon: <MdRestaurantMenu className="size-5" />, label: "Menu" },
		{
			href: "/delivery",
			icon: <MdOutlineDeliveryDining className="size-5" />,
			label: "Delivery",
		},
		{
			href: "/feedback",
			icon: <RiFeedbackFill className="size-5" />,
			label: "Feedback",
		},
	];

	return (
		<header className="sticky top-0 z-[999]">
			<nav
				className="flex justify-between items-center px-4 bg-slate-100 dark:bg-slate-900
				 dark:md:bg-black/30 h-[11vh] border-b border-gray-300 dark:border-gray-600"
			>
				<div className="flex items-center justify-center cursor-pointer">
					<Image
						src={logo}
						className="animate-spin-3s w-[2.3rem] h-[2.3rem] mr-3"
						quality="95"
						priority={true}
						alt="logo"
					/>
					<h2 className="font-semibold">Eat Pizza</h2>
				</div>

				<div className="flex items-center gap-7">
					<div
						onClick={toggleTheme}
						className="flex items-center justify-center cursor-pointer hover:scale-110 transition-all border w-[2.5rem] h-[2.5rem] rounded-full
					dark:bg-transparent dark:border-slate-500 text-slate-800 dark:text-slate-400"
					>
						{theme === "light" ? (
							<HiOutlineSun className="size-6" />
						) : (
							<FaMoon className="size-6" />
						)}
					</div>
					<div
						onClick={handleIcons}
						className="text-slate-800 dark:text-slate-400 md:hidden"
					>
						{toggleNav ? (
							<CgClose className="size-8" />
						) : (
							<GiHamburgerMenu className="size-8" />
						)}
					</div>
				</div>
			</nav>

			<div
				{...handlers}
				className={`z-10 md:hidden fixed left-0 bg-black/30 w-full h-full duration-300 ${
					isVisible ? "block" : "hidden"
				}`}
			></div>

			<aside
				className={`z-10 fixed left-0 bg-slate-100 dark:bg-slate-900 dark:md:bg-black/30 min-h-screen sm:h-screen w-[19.5rem] sm:w-[17rem]
						 border-r border-gray-300 dark:border-gray-600 transition-transform duration-200 ${
								isVisible ? "translate-x-0" : "-translate-x-full"
							} md:translate-x-0`}
			>
				<Link
					href="/modal-address"
					onClick={handleIcons}
					className="flex items-center bg-gradient-green bg-gradient-green-hover font-semibold text-white transition-all
	        rounded-md py-[.6rem] px-3 m-3"
				>
					<FaLocationDot className="mr-2 animate-bounce" />
					Select your address
				</Link>

				{navLinks.map((link) => (
					<Link
						key={link.label}
						href={link.href}
						onClick={handleIcons}
						className="flex items-center gap-x-3 text-lg py-[.6rem] text-slate-800 dark:text-slate-400 font-semibold hover:bg-slate-300
					 hover:dark:bg-slate-700 active:scale-95 active:bg-slate-400 active:dark:bg-slate-800 transition-all px-3 my-1 mx-3 rounded-md tracking-wider"
					>
						{link.icon}
						{link.label}
					</Link>
				))}
			</aside>
		</header>
	);
}
