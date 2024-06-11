"use client";

import React, { useEffect } from "react";
import Slides from "./slides";
import { useGlobalContext } from "@/context/global-context";
import LoadPopup from "./load-popup";

export default function Home() {
	const { isLoaded, setIsLoaded } = useGlobalContext();

	useEffect(() => {
		setIsLoaded(!isLoaded);
	}, []);

	return (
		<section className="mt-[6rem] mb-[1.6rem] w-[78rem] h-[85vh] max-sm:w-full">
			<Slides />
			{isLoaded ? <LoadPopup /> : ""}
		</section>
	);
}
