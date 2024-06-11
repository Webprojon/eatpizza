"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import Loader from "./loader";
import { useRouter } from "next/navigation";
import Image from "next/image";
import thridpizza from "@images/pizzas/pngtree-pizza-red-food-png-image_12472941.png";
import sixthpizza from "@images/pizzas/02-Mini-Pizza-1.png";
import basket from "@images/general-imgs/basket.png";
import { animFromBottomToTop } from "@/lib/motion-anim";
import { motion } from "framer-motion";

//import { homeinfos } from "@/lib/data";

const homeinfos = [
	{
		heading: "Two large pizzas",
		discount: 50,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate beatae perferendis cupiditate in quibusdam magni at recusandae libero delectus asperiores.",
		img: thridpizza,
		btn: "Add to Basket",
	},
	{
		heading: "Three medium pizzas",
		discount: 50,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate beatae perferendis cupiditate in quibusdam magni at recusandae libero delectus asperiores.",
		img: sixthpizza,
		btn: "Add to Basket",
	},
];

export default function Slides() {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setLoading(false);
		}, 100);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<div>
			<Swiper modules={[Autoplay]} loop={true} autoplay={{ delay: 6000 }}>
				{homeinfos.map((info, index) => (
					<SwiperSlide key={index}>
						{loading ? (
							<Loader />
						) : (
							<motion.div
								initial="initial"
								animate="animate"
								variants={animFromBottomToTop}
								className="h-[75vh] flex items-center justify-around max-sm:px-3 max-sm:flex-col-reverse max-sm:justify-around max-sm:mt-[1rem]"
							>
								<div className="flex flex-col gap-y-10 w-[60%] max-sm:w-full max-sm:gap-y-4 max-sm:text-center">
									<h1 className="tracking-wider text-3xl font-semibold max-sm:text-2xl">
										{info.heading}
										<span className="bg-green-500 px-2 ml-3 rounded-sm">
											{info.discount} % discount
										</span>
									</h1>
									<p className="tracking-wider leading-10 text-lg max-sm:leading-8">
										{info.text}
									</p>
									<button
										onClick={() => router.push("/menu")}
										className="animate-bounce w-[11rem] bg-gradient-green font-semibold text-white transition-all rounded-sm py-2 px-4 mt-3
										 tracking-wider max-sm:w-full max-sm:animate-none max-sm:py-3"
									>
										{info.btn}
									</button>
								</div>

								<div className="relative">
									<Image
										src={basket}
										alt="basket img"
										className="w-[20rem] h-[18rem] max-sm:w-[16rem] max-sm:h-[14rem]"
									/>
									<Image
										src={info.img}
										alt="pizza img"
										className="absolute top-[12%] left-[26%] animate-spin-17s w-[10rem] h-[10rem] max-sm:w-[8rem] max-sm:h-[8rem]"
									/>
								</div>
							</motion.div>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
