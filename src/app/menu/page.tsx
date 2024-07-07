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
			<section className="sm:absolute top-[6.5rem] left-[20.5rem] h-[84.5vh] w-[73.6rem] overflow-y-auto no-scrollbar">
				<div className="flex flex-row justify-between">
					<div>
						<div className="relative">
							<OpenBasketMobile />
						</div>

						<section className={`w-[54rem]`}>
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
