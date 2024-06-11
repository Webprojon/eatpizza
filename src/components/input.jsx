import React from "react";

export default function Input({ type, text = "", size = "", direction = "" }) {
	return (
		<>
			<input
				type={type}
				placeholder={text}
				autoComplete="off"
				className={`border border-gray-300 outline-green-500 tracking-wider text-gray-500 placeholder:text-gray-500 px-3 py-2 rounded-sm
				dark:outline-none dark:bg-slate-800 dark:text-gray-300 dark:placeholder:text-gray-300 dark:border-gray-500 max-sm:py-3 
				max-sm:w-full max-sm:text-lg
       ${direction === "pl" ? "pl-10" : ""} 
			 ${
					size === "sm"
						? "w-[8rem] max-sm:w-[12rem]"
						: size === "md"
							? "max-sm:w-[10rem]"
							: size === "lg"
								? "w-full"
								: ""
				} `}
			/>
		</>
	);
}
