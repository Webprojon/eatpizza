"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useRouter } from "next/navigation";
import Image from "next/image";
import basket from "@images/general-imgs/basket.png";
import { animFromBottomToTop } from "@/lib/motion-anim";
import { motion } from "framer-motion";
import { homeinfos } from "@/lib/data";

export default function Slides() {
	const router = useRouter();
	return (
		<Swiper modules={[Autoplay]} loop={true} autoplay={{ delay: 6000 }}>
			{homeinfos.map((info, index) => (
				<SwiperSlide key={index}>
					<motion.div
						initial="initial"
						animate="animate"
						variants={animFromBottomToTop}
						className="h-[75vh] flex items-center justify-around max-sm:px-3 max-sm:flex-col-reverse max-sm:justify-around max-sm:mt-[1rem]"
					>
						<div className="flex flex-col gap-y-10 w-[60%] max-sm:w-full max-sm:gap-y-4 max-sm:text-center">
							<h1 className="tracking-wider text-3xl font-semibold max-sm:text-2xl max-sm:mt-[3rem]">
								{info.heading}
								<span className="bg-green-500 px-2 ml-3 rounded-sm">
									{info.discount} % off
								</span>
							</h1>
							<p className="tracking-wider leading-10 text-lg max-sm:leading-8">
								{info.text}
							</p>
							<button
								onClick={() => router.push("/menu")}
								className="animate-bounce self-start bg-gradient-green font-semibold text-white transition-all rounded-sm py-2 px-4 mt-3
								tracking-widest text-lg max-sm:w-full max-sm:animate-none max-sm:py-3"
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
				</SwiperSlide>
			))}
		</Swiper>
	);
}
