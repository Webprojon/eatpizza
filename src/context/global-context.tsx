"use client";
import React, { useState, createContext, useContext } from "react";

type GlobalContextProviderProps = {
	children: React.ReactNode;
};

type SelectedItemsType = {
	itemCategory: string;
	itemDesc: string;
	itemId: number;
	itemImg: string;
	itemName: string;
	itemPrice: number;
	itemSize: number;
};

type GlobalDataType = {
	choosenPizza: SelectedItemsType[];
	setChoosenPizza: React.Dispatch<React.SetStateAction<SelectedItemsType[]>>;
	selectValue: string;
	setSelectValue: React.Dispatch<React.SetStateAction<string>>;
};

const defaultGlobalContextValue: GlobalDataType = {
	choosenPizza: [],
	setChoosenPizza: () => {},
	selectValue: "",
	setSelectValue: () => {},
};

const GlobalContext = createContext<GlobalDataType>(defaultGlobalContextValue);

export default function GlobalContextProvider({
	children,
}: GlobalContextProviderProps) {
	const [choosenPizza, setChoosenPizza] = useState<SelectedItemsType[]>([]);
	const [selectValue, setSelectValue] = useState<string>("all");

	const contextValue: GlobalDataType = {
		choosenPizza,
		setChoosenPizza,
		selectValue,
		setSelectValue,
	};
	return (
		<GlobalContext.Provider value={contextValue}>
			{children}
		</GlobalContext.Provider>
	);
}

export function useGlobalContext() {
	const context = useContext(GlobalContext);

	if (!context) {
		console.warn("useGlobalContext must be used within GlobalContextProvider");
	}

	return context || defaultGlobalContextValue;
}
