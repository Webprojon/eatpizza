"use client";
import logo from "@images/general-imgs/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useRouter } from "next/navigation";
import { RiFeedbackFill, RiLogoutBoxLine } from "react-icons/ri";
import Link from "next/link";
import { IoChevronDown, IoChevronUp, IoSettingsSharp } from "react-icons/io5";
import {
	MdAccountBox,
	MdOutlineDeliveryDining,
	MdRestaurantMenu,
} from "react-icons/md";

export default function Header() {
	const [toggleMenu, setToggleMenu] = useState<boolean>(false);
	const [toggleNav, setToggleNav] = useState<boolean>(false);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		if (isVisible) {
			setToggleNav(true);
		} else {
			setToggleNav(false);
		}
	}, [isVisible]);

	const handleToggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => setIsVisible(false),
		onSwipedRight: () => setIsVisible(true),
		trackMouse: true,
	});

	const handleIcons = () => {
		setToggleNav(!toggleNav);
		setIsVisible(!isVisible);
	};

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
				<div className="flex gap-x-5">
					<button className="font-semibold dark:text-gray-300">
						<LoginLink>Log in</LoginLink>
					</button>
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
				<button
					onClick={() => {
						router.push("/modal-address");
						handleIcons();
					}}
					className="flex items-center bg-gradient-green bg-gradient-green-hover font-semibold text-white transition-all
	        rounded-md py-2 px-3 m-4"
				>
					<span className="pr-2 max-sm:px-1">
						<FaLocationDot className="animate-bounce" />
					</span>
					Select your address
				</button>

				<Link
					href="/"
					onClick={handleIcons}
					className="flex items-center gap-x-3 text-lg py-[.6rem] text-slate-800 dark:text-slate-400 font-semibold hover:bg-slate-300
					 hover:dark:bg-slate-700 active:scale-95 active:bg-slate-400 active:dark:bg-slate-800 transition-all px-3 my-1 mx-3 rounded-md tracking-wider"
				>
					<MdRestaurantMenu className="size-5" />
					Menu
				</Link>
				<Link
					href="/delivery"
					onClick={handleIcons}
					className="flex items-center gap-x-3 text-lg py-[.6rem] text-slate-800 dark:text-slate-400 font-semibold hover:bg-slate-300
					 hover:dark:bg-slate-700 active:scale-95 active:bg-slate-400 active:dark:bg-slate-800 transition-all px-3 my-1 mx-3 rounded-md tracking-wider"
				>
					<MdOutlineDeliveryDining className="size-5" />
					Delivery
				</Link>
				<Link
					href="/feedback"
					onClick={handleIcons}
					className="flex items-center gap-x-3 text-lg py-[.6rem] text-slate-800 dark:text-slate-400 font-semibold hover:bg-slate-300
					 hover:dark:bg-slate-700 active:scale-95 active:bg-slate-400 active:dark:bg-slate-800 transition-all px-3 my-1 mx-3 rounded-md tracking-wider"
				>
					<RiFeedbackFill className="size-5" />
					Feedback
				</Link>
				<div className="my-4 border-b border-gray-300 dark:border-gray-600"></div>
				<div
					onClick={handleToggleNav}
					className="flex flex-col text-lg py-[.6rem] text-slate-800 dark:text-slate-400 font-semibold hover:bg-slate-300
					 hover:dark:bg-slate-700 transition-all px-3 my-1 mx-3 rounded-md tracking-wider cursor-pointer"
				>
					<div className="flex items-center justify-between gap-x-3">
						<span className="flex items-center gap-x-3">
							<MdAccountBox className="size-5" />
							Account
						</span>
						{toggleMenu ? <IoChevronUp /> : <IoChevronDown />}
					</div>
				</div>
				{toggleMenu && (
					<div>
						<Link
							href="/settings"
							onClick={handleIcons}
							className="flex items-center gap-x-3 text-lg py-[.6rem] text-slate-800 dark:text-slate-400 font-semibold hover:bg-slate-300
							 hover:dark:bg-slate-700 active:scale-95 active:bg-slate-400 active:dark:bg-slate-800 transition-all px-3 my-1 mx-3 mr-5 ml-5 rounded-md tracking-wider"
						>
							<IoSettingsSharp className="size-5" />
							Settings
						</Link>

						<Link
							href="/"
							className="flex items-center gap-x-3 text-lg py-[.6rem] text-slate-800 dark:text-slate-400 font-semibold hover:bg-slate-300
							 hover:dark:bg-slate-700 active:scale-95 active:bg-slate-400 active:dark:bg-slate-800 transition-all px-3 my-1 mx-3 mr-5 ml-5 rounded-md tracking-wider"
						>
							<RiLogoutBoxLine className="size-5" />
							Log out
						</Link>
					</div>
				)}
			</aside>
		</header>
	);
}

//import { motion } from "framer-motion";
//import { usePathname, useRouter } from "next/navigation";
//import { animFromTopToBottom } from "@/lib/motion-anim";

//export default function Header() {
//	const pathname = usePathname();
//	const [scroll, setScroll] = useState<boolean>();
//	const [toggle, setToggle] = useState<boolean>(true);
//	const [checkWidth, setCheckWidth] = useState<boolean>(false);
//	const { theme, toggleTheme } = useTheme();
//	const router = useRouter();

//	useEffect(() => {
//		if (window.innerWidth < 640) {
//			setToggle(false);
//			setCheckWidth(true);
//		}

//		const handleScroll = () => {
//			const scrollTop = window.scrollY || document.documentElement.scrollTop;
//			if (scrollTop) {
//				setScroll(true);
//			} else {
//				setScroll(false);
//			}
//		};
//		window.addEventListener("scroll", handleScroll);

//		return () => {
//			window.removeEventListener("scroll", handleScroll);
//		};
//	}, []);

//	return (
//		<motion.header
//			initial="initial"
//			animate="animate"
//			variants={animFromTopToBottom}
//			className={`bg-gray-50 z-[999] fixed w-full px-10 ${scroll ? "dark:bg-black/50 backdrop-blur-lg" : "dark:bg-transparent"}`}
//		>
//			<nav className="flex justify-between items-center w-[78rem] h-[4.7rem] mx-auto">
//				<div className="flex items-center justify-center cursor-pointer">
//					<Image
//						src={logo}
//						className="animate-spin-3s w-[2.3rem] h-[2.3rem] mr-3"
//						quality="95"
//						priority={true}
//						alt="logo"
//					/>
//					<h2 className="font-semibold">Eat Pizza</h2>
//				</div>

//				<div className="hidden sm:flex items-center gap-x-8">
//					<motion.ul
//						className={`flex items-center gap-x-10 dark:bg-transparent`}
//					>
//						{links.map((link) => (
//							<li key={link.hash}>
//								<Link
//									onClick={() =>
//										checkWidth ? setToggle(false) : setToggle(true)
//									}
//									href={link.hash}
//									className={`${pathname === link.hash && "after:bg-green-400 opacity-[0.70]"} font-semibold hover:text-green-950
//										 dark:text-gray-300 hover:opacity-[0.85] tracking-wider transition-all relative block after:block after:content-['']
//										  after:absolute after:h-[3px] after:rounded-md after:w-full after:scale-x-1 after:hover:scale-x-100`}
//								>
//									{link.name}
//								</Link>
//							</li>
//						))}
//					</motion.ul>

//					<button
//						onClick={() => router.push("/modal-address")}
//						className="flex items-center bg-gradient-green bg-gradient-green-hover font-semibold text-white transition-all
//	            rounded-sm py-2 px-3"
//					>
//						<span className="pr-2 max-sm:px-1">
//							<FaLocationDot className="animate-bounce" />
//						</span>
//						Select your address
//					</button>
//					<div
//						onClick={toggleTheme}
//						className="flex items-center justify-center cursor-pointer hover:scale-110 transition-all border w-8 h-8 rounded-full
//							 dark:bg-transparent dark:border-slate-500 dark:text-white"
//					>
//						{theme === "light" ? (
//							<HiOutlineSun className="size-5" />
//						) : (
//							<FaMoon className="size-5" />
//						)}
//					</div>
//					<button className="font-semibold dark:text-gray-300">
//						<LoginLink>Log in</LoginLink>
//					</button>

//					{/*{toggle ? (
//							<CgClose
//								onClick={() => setToggle(!toggle)}
//								className="text-green-800 dark:text-green-500 size-6 cursor-pointer hover:scale-110 transition-all"
//							/>
//						) : (
//							<GiHamburgerMenu
//								onClick={() => setToggle(!toggle)}
//								className="text-green-800 dark:text-green-500 size-6 cursor-pointer hover:scale-110 transition-all"
//							/>
//						)}*/}
//				</div>
//			</nav>
//		</motion.header>
//	);
//}
