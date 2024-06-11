"use client";

import React from "react";
import { motion } from "framer-motion";
import { animFromBottomToTop } from "@/lib/motion-anim";

export default function Contact() {
	return (
		<motion.section
			initial="initial"
			animate="animate"
			variants={animFromBottomToTop}
			className="max-w-[78rem] bg-slate-800 mx-auto mt-[8rem] py-5 px-10 rounded-sm"
		>
			<h2 className="font-semibold mb-5 text-center text-2xl tracking-wider text-gray-600 dark:text-gray-300 max-sm:text-xl max-sm:mb-2">
				Feedback Us
			</h2>
			<form action="#" className="flex flex-col gap-y-4 w-[40rem]">
				<input
					type="text"
					placeholder="Enter your name"
					autoComplete="off"
					className="border py-3 px-4 tracking-wider rounded-sm outline-green-500 text-gray-500 placeholder:text-gray-500
							dark:outline-none dark:bg-transparent dark:text-gray-300 dark:placeholder:text-gray-300"
				/>
				<textarea
					rows={7}
					id="message"
					name="message"
					placeholder="Type your feedback here..."
					className="border p-4 rounded-sm outline-green-500 text-gray-500 placeholder:text-gray-500 dark:outline-none 
							dark:bg-transparent dark:text-gray-300 dark:placeholder:text-gray-300"
				></textarea>
				<button
					className="w-[9rem] bg-gradient-green bg-gradient-green-hover font-bold tracking-wider text-white py-2 rounded-sm 
				     	transition-all text-md max-sm:mt-2 max-sm:py-3 max-sm:w-full"
				>
					Submit
				</button>
			</form>
		</motion.section>
	);
}
