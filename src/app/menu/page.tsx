import Image from "next/image";
import Select from "../../components/select";
import DesktopBasket from "@/components/product-basket";
import prisma from "@/lib/db";
import AddToCartBtn from "@/components/add-to-cart";
import { Suspense } from "react";
import Loading from "@/components/loading";
import OpenBasketMobile from "@/components/open-basket-mobile";
import Link from "next/link";
import { FaInfo } from "react-icons/fa6";

export default async function Products() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const products = await prisma.products.findMany();

	const shortenDescription = (
		description: string | null,
		maxLength: number,
	): string => {
		if (description === null) {
			return "";
		} else if (description.length > maxLength) {
			return `${description.split(" ").slice(0, 7).join(" ")}..`;
		} else {
			return description;
		}
	};

	return (
		<Suspense fallback={<Loading />}>
			<section className="w-[78rem] max-sm:w-[100%] pt-16 mx-auto">
				<div className="flex flex-row items-start">
					<div>
						<div className="relative">
							<OpenBasketMobile />
						</div>

						<section className={`mb-5 scroll-mt-24`}>
							<div>
								<form action="#" className="mt-14 mb-6 cursor-pointer">
									<select name="category" className="">
										<option value="all">All items</option>
										<option value="pizza">Pizzas</option>
										<option value="sauce">Sauces</option>
										<option value="drink">Drinks</option>
										<option value="cream">Ice Creams</option>
									</select>
								</form>

								<div className="flex flex-wrap gap-6 max-sm:gap-y-4">
									{products.map((product, index) => {
										const {
											id,
											itemCategory,
											itemImg,
											itemName,
											itemDescription,
										} = product;
										return (
											<div
												key={index}
												className="w-[30%] rounded-sm overflow-hidden shadow-md max-sm:shadow-sm max-sm:flex max-sm:flex-row
					           	max-sm:justify-between max-sm:w-full max-sm:rounded-none max-sm:pl-2 dark:bg-slate-800 max-sm:py-4"
											>
												<div
													className="p-4 bg-gray-50 dark:bg-slate-700 rounded-sm
						           transition-all max-sm:from-gray-300 max-sm:px-2 max-sm:w-[10rem] max-sm:flex max-sm:my-2"
												>
													<Link href={`/menu/${id}`}>
														<Image
															className={`mx-auto max-sm:h-[7rem] max-sm:w-[9rem]
											  ${itemCategory == "pizza" ? "h-[11rem] w-[11rem] hover:animate-spin-17s" : "h-[8rem] w-[8rem]"}
											`}
															src={itemImg}
															quality="95"
															priority={true}
															width={200}
															height={200}
															alt="sale product"
														/>
													</Link>
												</div>
												<div className="p-4 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:pr-[.6rem] max-sm:pb-2 max-sm:pt-0">
													<div>
														<div className="flex items-center justify-between">
															<h2 className="tracking-wider font-semibold text-xl max-sm:pb-1 max-sm:text-gray-700 dark:text-gray-400">
																{itemName}
															</h2>
															<Link
																href={`/menu/${product.id}`}
																className="border rounded-full p-1 cursor-pointer hover:scale-110 transition-all"
															>
																<FaInfo className="size-3" />
															</Link>
														</div>
														<p
															className="tracking-wide w-[15rem] max-sm:text-sm py-1 text-gray-600 dark:text-gray-400 max-sm:py-0
						        		max-sm:w-[11rem]"
														>
															{shortenDescription(itemDescription, 20)}
														</p>
													</div>
													<AddToCartBtn product={product} index={index} />
												</div>
												{/*{selectedPizza && selectedPizza.id === id && (
													<Select
														id={id}
														img={img}
														name={name}
														description={description}
														volumes={volumes}
														hideModal={hideModal}
														setHideModal={setHideModal}
													/>
												)}*/}
											</div>
										);
									})}
								</div>
							</div>
						</section>
					</div>
					<DesktopBasket />
				</div>
			</section>
		</Suspense>
	);
}

// ===========================================================================================
// States
//const [selectedPizza, setSelectedPizza] = useState<any>(null);
//const [hideModal, setHideModal] = useState<boolean>(false);
//const [isClient, setIsClient] = useState(false);
//const { choosenPizza, setChoosenPizza } = useGlobalContext();
//const [selectedVolume, setSelectedVolume] = useState<SelectedItemType>({});
//const [productPrices, setProductPrices] = useState<SelectedItemType>({});

//useEffect(() => {
//setIsClient(true);
//}, []);

//<section className="w-[78rem] max-sm:w-[100%] pt-16 mx-auto">
//	<div className="flex flex-row items-start">
//		<div>
//			<div className="relative">
//				{choosenPizza.length === 0 ? (
//					""
//				) : (
//					<div
//						onClick={() => router.push("/delivery")}
//						className="fixed bottom-9 right-2 z-10 hidden max-sm:flex bg-red-600 dark:bg-red-900 py-[.9rem] px-4 rounded-full"
//					>
//						<span className="flex items-center justify-center font-semibold tracking-wider text-white text-md">
//							<FaCartShopping className="mr-2" />
//							{choosenPizza && choosenPizza[0].itemPrice} zł
//						</span>
//					</div>
//				)}
//			</div>
//			<section className={`mb-5 scroll-mt-24`}>
//				{Object.entries(items).map((categories, id) => (
//					<div key={id}>
//						<HeadingSection>{categories[0]}</HeadingSection>
//						<div className="flex flex-wrap gap-6 max-sm:gap-y-4">
//							{categories[1].map((category, index) => {
//								const {
//									id,
//									itemCategory,
//									img,
//									name,
//									description,
//									price,
//									volumes,
//								} = category;
//								return (
//									<motion.div
//										variants={fadeInAnimationsVariants}
//										initial="initial"
//										whileInView="animate"
//										viewport={{
//											once: true,
//										}}
//										custom={index}
//										key={index}
//										className="w-[30%] rounded-sm overflow-hidden shadow-md max-sm:shadow-sm max-sm:flex max-sm:flex-row
//			           	max-sm:justify-between max-sm:w-full max-sm:rounded-none max-sm:pl-2 dark:bg-slate-800 max-sm:py-4"
//									>
//										<div
//											className="p-4 cursor-zoom-in bg-gray-50 dark:bg-slate-700 rounded-sm
//				           transition-all max-sm:from-gray-300 max-sm:px-2 max-sm:w-[10rem] max-sm:flex max-sm:my-2"
//										>
//											<Image
//												className={`mx-auto max-sm:h-[7rem] max-sm:w-[9rem]
//									${itemCategory == "pizza" ? "h-[11rem] w-[14rem]" : itemCategory == "sale" ? "h-[11rem] w-[12rem]" : "h-[8rem] w-[8rem]"}
//									`}
//												src={img}
//												quality="95"
//												priority={true}
//												alt="sale product"
//											/>
//										</div>
//										<div className="p-4 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:pr-[.6rem] max-sm:pb-2 max-sm:pt-0">
//											<div>
//												<h2 className="tracking-wider font-semibold text-xl max-sm:pb-1 max-sm:text-gray-700 dark:text-gray-400">
//													{name}
//												</h2>
//												<p
//													className="tracking-wide w-[15rem] max-sm:text-sm py-1 text-gray-600 dark:text-gray-400 font-medium max-sm:py-0
//				        		max-sm:w-[11rem]"
//												>
//													{shortenDescription(description, 20)}
//												</p>
//											</div>

//											<div>
//												{volumes && (
//													<div
//														className={`${itemCategory == "pizza" ? "max-sm:hidden" : "flex"} flex rounded-sm my-4 max-sm:my-1 border
//											 border-gray-200 dark:border-slate-600 max-sm:w-[12rem]`}
//													>
//														{volumes.map((volume: number, idx: number) => (
//															<div
//																key={idx}
//																className={clsx(
//																	`w-full ${itemCategory == "cream" ? "w-full" : "max-sm:w-[4rem]"} text-center py-2 relative text-sm cursor-pointer rounded-sm text-gray-600 dark:text-gray-400`,
//																	{
//																		"bg-gray-200 text-gray-700 dark:bg-slate-700":
//																			selectedVolume[index] === volume ||
//																			(idx === 0 && !selectedVolume[index]),
//																	},
//																)}
//																onClick={() => {
//																	handleChangeItemVolume(
//																		index,
//																		volume,
//																		itemCategory,
//																	);
//																}}
//															>
//																{selectedVolume[index] === volume ||
//																(idx === 0 && !selectedVolume[index])
//																	? `${volume} ${itemCategory == "pizza" ? "sm" : itemCategory == "drink" ? "l" : "ml"}`
//																	: volume}
//															</div>
//														))}
//													</div>
//												)}
//											</div>

//											<div className="flex justify-between items-end mt-5">
//												<div className="text-md text-gray-700 dark:text-gray-400 font-bold max-sm:text-sm pr-2">
//													<span>
//														{definedPrice(itemCategory, price, index)} zł
//													</span>
//												</div>
//												<button
//													className="bg-gradient-green bg-gradient-green-hover flex place-items-center text-sm transition-all
//			       			text-white content-start font-semibold px-2 py-2 rounded-sm max-sm:px-2 trackinwg-wider"
//												>
//													<span
//														onClick={() =>
//															handleAddSelectedItems(
//																itemCategory,
//																category,
//																category.price,
//																index,
//															)
//														}
//														className={`flex justify-center items-center
//											${isClient && window.innerWidth <= 640 && itemCategory == "pizza" ? "hidden" : "flex"}
//											`}
//													>
//														<FaCartShopping className="mr-2" />
//														Add to cart
//													</span>

//													{itemCategory == "pizza" && (
//														<span
//															onClick={() => {
//																handleSelect(category);
//																setHideModal(true);
//															}}
//															className="hidden max-sm:flex items-center tracking-widest"
//														>
//															<FaChevronUp className="mr-2" />
//															Select
//														</span>
//													)}
//												</button>
//											</div>
//										</div>
//										{selectedPizza && selectedPizza.id === id && (
//											<Select
//												id={id}
//												img={img}
//												name={name}
//												description={description}
//												volumes={volumes}
//												hideModal={hideModal}
//												setHideModal={setHideModal}
//											/>
//										)}
//									</motion.div>
//								);
//							})}
//						</div>
//					</div>
//				))}
//			</section>
//		</div>
//		<DesktopBasket />
//	</div>
//</section>
