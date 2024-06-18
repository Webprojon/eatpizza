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
			<section className="w-[78rem] max-sm:w-[100%] pt-16 mx-auto">
				<div className="flex flex-row justify-between">
					<div>
						<div className="relative">
							<OpenBasketMobile />
						</div>

						<section className={`w-[59rem] max-sm:w-full mb-5 scroll-mt-24`}>
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
