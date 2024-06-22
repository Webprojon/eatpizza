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
	const { theme, toggleTheme } = useTheme();
	const router = useRouter();

	useEffect(() => {
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

	const selectAddressBtn = () => {
		router.push("/modal-address");
		setToggle(false);
	};

	return (
		<motion.header
			initial="initial"
			animate="animate"
			variants={animFromTopToBottom}
			className={`bg-gray-50 z-[999] fixed w-full px-10 ${scroll ? "dark:bg-black/50 backdrop-blur-lg" : "dark:bg-transparent"}`}
		>
			<nav className="flex justify-between items-center w-[78rem] h-[4.7rem] mx-auto">
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

				<div className="flex flex-row items-center">
					{toggle && (
						<motion.ul
							className={`flex items-center justify-center gap-8 mr-8 dark:bg-transparent`}
						>
							{links.map((link) => (
								<li key={link.hash}>
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
						</motion.ul>
					)}

					<div className="flex justify-center items-center gap-8">
						<button
							onClick={() => router.push("/modal-address")}
							className="flex items-center bg-gradient-green bg-gradient-green-hover font-semibold text-white transition-all
	            rounded-sm py-2 px-3"
						>
							<span className="pr-2 max-sm:px-1">
								<FaLocationDot className="animate-bounce" />
							</span>
							Select your address
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
								className="text-green-800 dark:text-green-500 size-6 cursor-pointer hover:scale-110 transition-all"
							/>
						) : (
							<GiHamburgerMenu
								onClick={() => setToggle(!toggle)}
								className="text-green-800 dark:text-green-500 size-6 cursor-pointer hover:scale-110 transition-all"
							/>
						)}
					</div>
				</div>
			</nav>
		</motion.header>
	);
}
