"use client";
import { useGlobalContext } from "@/context/global-context";
import { ChangeEvent } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SelectCategory() {
	const { selectValue, setSelectValue } = useGlobalContext();

	const handleSelectValue = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectValue(event.target.value);
	};

	return (
		<form className="flex gap-6 items-center mb-4">
			<select
				name="categories"
				value={selectValue}
				onChange={handleSelectValue}
				className="appearance-none bg-slate-100 rounded-sm py-[.5rem] px-4 tracking-wider
				dark:bg-black/40 text-gray-600 dark:text-gray-300 font-semibold cursor-pointer focus:outline-none"
			>
				<option value="all">All products</option>
				<option value="pizzas">Pizzas</option>
				<option value="sauces">Sauces</option>
				<option value="drinks">Drinks</option>
				<option value="creams">Ice creams</option>
			</select>

			<div
				className="flex items-center gap-[.6rem] text-gray-600 dark:text-gray-300 bg-slate-100 rounded-sm dark:bg-black/40 
			py-[.5rem] px-2"
			>
				<IoSearchOutline className="size-5" />
				<input
					type="text"
					placeholder="Search here..."
					className="tracking-wider bg-transparent outline-none placeholder:text-gray-600 dark:placeholder:text-gray-300"
				/>
			</div>
		</form>
	);
}
