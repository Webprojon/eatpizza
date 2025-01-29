import DesktopBasket from "@/components/product-basket";
import prisma from "@/lib/db";
import { Suspense } from "react";
import Loading from "@/components/loading";
import OpenBasketMobile from "@/components/open-basket-mobile";
import ProductCards from "@/components/product-cards";
import SelectCategory from "@/components/select-category";

export default async function Products() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const products = await prisma.products.findMany();

	return (
		<Suspense fallback={<Loading />}>
			<section
				className="md:absolute top-[5.7rem] sm:top-[6.5rem] left-[18.2rem] h-[84.5vh] xl:w-[76rem] mx-auto 
			overflow-y-auto no-scrollbar"
			>
				<div className="flex flex-row justify-between">
					<div>
						<div className="relative">
							<OpenBasketMobile />
						</div>

						<section className="my-5 px-2 sm:px-0 sm:mt-0">
							<div>
								<SelectCategory />

								<ProductCards products={products} />
							</div>
						</section>
					</div>
					<DesktopBasket />
				</div>
			</section>
		</Suspense>
	);
}
