"use client";
import { useTheme } from "@/context/theme-context";
import React from "react";
import { FaMoon } from "react-icons/fa6";
import { HiOutlineSun } from "react-icons/hi";

export default function Settings() {
	const { theme, toggleTheme } = useTheme();

	return (
		<section className="absolute left-[1rem] top-[7rem] md:left-[19rem]">
			<h1 className="text-2xl tracking-wider mb-4">Settings</h1>
			<div
				onClick={toggleTheme}
				className="flex items-center justify-center cursor-pointer hover:scale-110 transition-all border w-12 h-12 rounded-full
							 dark:bg-transparent dark:border-slate-500 dark:text-white"
			>
				{theme === "light" ? (
					<HiOutlineSun className="size-7" />
				) : (
					<FaMoon className="size-7" />
				)}
			</div>
		</section>
	);
}
