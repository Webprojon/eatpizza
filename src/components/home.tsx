"use client";

import React, { useEffect } from "react";
import Slides from "./slides";
import { FaLocationDot } from "react-icons/fa6";
import { useGlobalContext } from "@/context/global-context";
import LoadPopup from "./load-popup";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	const { isLoaded, setIsLoaded } = useGlobalContext();

	useEffect(() => {
		setIsLoaded(!isLoaded);
	}, []);

	return (
		<section className="mt-[6rem] mb-[1.6rem] w-[78rem] h-[85vh] max-sm:w-full">
			<Slides />
			<button
				onClick={() => router.push("/modal-address")}
				className="bg-gradient-green hidden place-items-center font-semibold text-white transition-all rounded-sm py-3 px-2 mt-6 w-[95%]
				 m-auto justify-center max-sm:flex tracking-wide"
			>
				<FaLocationDot className="mr-2 animate-bounce" />
				Select your address
			</button>
			{isLoaded ? <LoadPopup /> : ""}
		</section>
	);
}
