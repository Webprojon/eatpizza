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

export default function Home() {
	const router = useRouter();
	return (
		<section className="mt-[6rem] mb-[1.6rem] w-[78rem] h-[85vh] mx-auto">
			<Swiper modules={[Autoplay]} loop={true} autoplay={{ delay: 6000 }}>
				{homeinfos.map((info, index) => (
					<SwiperSlide key={index}>
						<motion.div
							initial="initial"
							animate="animate"
							variants={animFromBottomToTop}
							className="h-[75vh] flex items-center justify-around"
						>
							<div className="flex flex-col gap-y-10 w-[60%]">
								<h1 className="tracking-wider text-3xl font-semibold">
									{info.heading}
									<span className="bg-green-500 px-2 ml-3 rounded-sm">
										{info.discount} % off
									</span>
								</h1>
								<p className="tracking-wider leading-10 text-lg">{info.text}</p>
								<button
									onClick={() => router.push("/menu")}
									className="animate-bounce self-start bg-gradient-green font-semibold text-white transition-all rounded-sm py-2 px-4 mt-3
								tracking-widest text-lg"
								>
									{info.btn}
								</button>
							</div>

							<div className="relative">
								<Image
									src={basket}
									alt="basket img"
									className="w-[24rem] h-[22rem]"
								/>
								<Image
									src={info.img}
									width={200}
									height={200}
									alt="pizza img"
									className="absolute top-[11%] left-[26%] animate-spin-17s w-[12rem] h-[12rem]"
								/>
							</div>
						</motion.div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
