import AddToCartBtn from "@/components/add-to-cart";
import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

export default async function Product({ params }: { params: { id: string } }) {
	const product = await prisma.products.findUnique({
		where: {
			id: params.id,
		},
	});

	return (
		<div
			className="relative flex gap-x-10 items-end justify-between w-[100%] max-w-[50rem] mx-auto mt-[8rem] dark:bg-slate-800 p-6 rounded-md
		max-sm:flex-col max-sm:h-[90vh] max-sm:items-center max-sm:w-[96%] max-sm:mt-[5.2rem] max-sm:p-3"
		>
			<Link href={"/menu"} className="absolute top-6 right-5">
				<CgClose className="size-7" />
			</Link>

			<div className="w-[55%] max-sm:w-full text-center max-sm:flex max-sm:flex-col items-center justify-center max-sm:mt-20">
				{product?.itemImg && (
					<Image
						src={product.itemImg}
						width={200}
						height={200}
						alt="product img"
						className="max-sm:w-[15rem] w-[13rem]"
					/>
				)}
				<h2 className="mt-6 mb-3 font-semibold text-2xl tracking-wider text-gray-700 dark:text-gray-300 max-sm:text-4xl">
					{product?.itemName}
				</h2>
				<p className="text-sm text-gray-500 tracking-wider leading-6 dark:text-gray-300 font-medium max-sm:text-xl">
					{product?.itemDescription}
				</p>
			</div>

			<div className="w-[45%] max-sm:w-full">
				<AddToCartBtn product={product} index={product?.id} />
			</div>
		</div>
	);
}
