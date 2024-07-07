"use client";
import { useTheme } from "@/context/theme-context";
import React from "react";
import { FaMoon } from "react-icons/fa6";
import { HiOutlineSun } from "react-icons/hi";

export default function Settings() {
	const { theme, toggleTheme } = useTheme();

	return (
		<section className="ml-[20rem]">
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
		</section>
	);
}
