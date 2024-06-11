"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { FaLocationDot, FaMoon, FaPhoneFlip } from "react-icons/fa6";
import logo from "@images/general-imgs/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/context/global-context";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineSun } from "react-icons/hi";
import { useTheme } from "@/context/theme-context";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { animFromTopToBottom } from "@/lib/motion-anim";

export default function Header() {
	const pathname = usePathname();
	const [scroll, setScroll] = useState<boolean>();
	const [toggle, setToggle] = useState<boolean>(true);
	const [checkWidth, setCheckWidth] = useState<boolean>(false);
	const [isClient, setIsClient] = useState(false);
	const { userAddress } = useGlobalContext();
	const router = useRouter();
	const { theme, toggleTheme } = useTheme();
	const [storedUserAddress, setStoredUserAddress] = useState<string | null>(
		null,
	);

	useEffect(() => {
		setIsClient(true);
		if (typeof window !== "undefined") {
			const address = localStorage.getItem("storeUserStreet");
			if (address) {
				setStoredUserAddress(JSON.parse(address));
			}
		}

		if (window.innerWidth < 640) {
			setToggle(false);
			setCheckWidth(true);
		}

		const handleScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			if (scrollTop) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	console.log(checkWidth);

	const displayAddress =
		userAddress || storedUserAddress || "Select your address";

	return (
		<motion.header
			initial="initial"
			animate="animate"
			variants={animFromTopToBottom}
			className={`bg-gray-50 z-[999] fixed w-full px-10 max-md:px-2 max-lg:px-1 max-sm:px-0 ${scroll ? "dark:bg-slate-800" : "dark:bg-transparent"}`}
		>
			<nav className="flex justify-between items-center w-[78rem] h-[4.7rem] mx-auto max-sm:px-2 max-sm:w-full">
				<div className="flex items-center justify-center cursor-pointer">
					<Image
						src={logo}
						className="animate-spin-3s w-[2.3rem] h-[2.3rem] mr-3 max-sm:mr-2 max-sm:w-[2.1rem] max-sm:h-[2.1rem]"
						quality="95"
						priority={true}
						alt="logo"
					/>
					<h2 className="font-semibold">Eat Pizza</h2>
				</div>

				<div className="flex flex-row items-center">
					{toggle && (
						<motion.ul
							className={`flex items-center justify-center gap-8 mr-8 max-lg:gap-6 max-md:gap-6 max-sm:gap-7 max-sm:border-t max-sm:border-gray-300
					 max-sm:absolute max-sm:top-[100%] max-sm:right-0 max-sm:left-0 max-sm:h-[100vh] max-sm:w-[100%] max-sm:flex-col max-sm:items-start 
					 max-sm:justify-start max-sm:bg-gray-50 max-sm:dark:bg-slate-800 dark:bg-transparent  max-sm:py-5`}
						>
							{links.map((link) => (
								<li key={link.hash} className="max-sm:px-6">
									<Link
										onClick={() =>
											checkWidth ? setToggle(false) : setToggle(true)
										}
										href={link.hash}
										className={`${pathname === link.hash ? "after:bg-green-400 opacity-[0.70]" : ""} font-semibold hover:text-green-950
										 dark:text-gray-300 hover:opacity-[0.85] tracking-wider transition-all relative block after:block after:content-['']
										  after:absolute after:h-[3px] after:rounded-md after:w-full after:scale-x-1 after:hover:scale-x-100`}
									>
										{link.name}
									</Link>
								</li>
							))}
							<div className="hidden max-sm:flex w-full border-b border-gray-300"></div>
							<div className="hidden max-sm:flex justify-between items-center w-full px-6 py-1">
								<span className="font-semibold">+48 22 575 71 71</span>
								<FaPhoneFlip className="rounded-full border border-gray-300 p-2 w-[2.3rem] h-[2.3rem]" />
							</div>
						</motion.ul>
					)}

					<div className="flex justify-center items-center gap-8 max-sm:gap-4">
						<button
							onClick={() => router.push("/modal-address")}
							className="flex items-center bg-gradient-green bg-gradient-green-hover font-semibold text-white transition-all
	            rounded-sm py-2 px-3 max-sm:w-full max-sm:mx-0 max-sm:py-1 max-sm:px-1 max-sm:hidden"
						>
							<span className="pr-2 max-sm:px-1">
								<FaLocationDot className="animate-bounce" />
							</span>
							{displayAddress}
						</button>
						<div
							onClick={toggleTheme}
							className="flex items-center justify-center cursor-pointer hover:scale-110 transition-all border w-8 h-8 rounded-full
							 dark:bg-transparent dark:border-slate-500 dark:text-white"
						>
							{theme === "light" ? (
								<HiOutlineSun className="size-5" />
							) : (
								<FaMoon className="size-5" />
							)}
						</div>
						<button className="font-semibold dark:text-gray-300">
							<LoginLink>Log in</LoginLink>
						</button>

						{toggle ? (
							<CgClose
								onClick={() => setToggle(!toggle)}
								className="text-green-800 dark:text-green-500 size-6 max-sm:block max-sm:size-8 cursor-pointer hover:scale-110 transition-all"
							/>
						) : (
							<GiHamburgerMenu
								onClick={() => setToggle(!toggle)}
								className="text-green-800 dark:text-green-500 max-sm:block size-6 max-sm:size-8 cursor-pointer hover:scale-110 transition-all"
							/>
						)}
					</div>
				</div>
			</nav>
		</motion.header>
	);
}
