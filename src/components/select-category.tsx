"use client";
import { useGlobalContext } from "@/context/global-context";
import { ChangeEvent } from "react";

export default function SelectCategory() {
	const { selectValue, setSelectValue } = useGlobalContext();

	const handleSelectValue = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectValue(event.target.value);
	};

	return (
		<form className="mb-4">
			<select
				value={selectValue}
				onChange={handleSelectValue}
				name="categories"
				className="appearance-none bg-slate-100 text-gray-900 rounded-sm py-[.4rem] px-4 tracking-wider
			 dark:bg-black/40 dark:text-gray-300 font-semibold cursor-pointer focus:outline-none"
			>
				<option value="all">All products</option>
				<option value="pizzas">Pizzas</option>
				<option value="sauces">Sauces</option>
				<option value="drinks">Drinks</option>
				<option value="creams">Ice creams</option>
			</select>
		</form>
	);
}
