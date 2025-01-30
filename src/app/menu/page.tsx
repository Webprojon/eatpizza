import DesktopBasket from "@/components/product-basket";
import prisma from "@/lib/db";
import { Suspense } from "react";
import Loading from "@/components/loading";
import OpenBasketMobile from "@/components/open-basket-mobile";
import ProductCards from "@/components/product-cards";

export default async function Products() {
	const products = await prisma.products.findMany();

	return (
		<Suspense fallback={<Loading />}>
			<section className="md:absolute top-[5.7rem] sm:top-[6.5rem] left-[18.2rem] h-[84.5vh] xl:w-[76rem] mx-auto overflow-y-auto no-scrollbar">
				<div className="flex flex-row justify-between">
					<OpenBasketMobile />
					<div className="px-2 sm:px-0 sm:mt-0">
						<ProductCards products={products} />
					</div>
					<DesktopBasket />
				</div>
			</section>
		</Suspense>
	);
}
