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
		<div className="relative flex gap-x-10 items-end justify-between w-[100%] max-w-[50rem] mx-auto mt-[6rem] p-6 rounded-md dark:bg-black/40 backdrop-blur-sm">
			<Link href={"/menu"} className="absolute top-6 right-5">
				<CgClose className="size-7" />
			</Link>

			<div className="w-[55%] items-center justify-center">
				{product?.itemImg && (
					<Image
						src={product.itemImg}
						width={200}
						height={200}
						alt="product img"
						className="w-[13rem]"
					/>
				)}
				<h2 className="mt-6 mb-3 font-semibold text-2xl tracking-wider text-gray-700 dark:text-gray-300">
					{product?.itemName}
				</h2>
				<p className="text-sm text-gray-500 tracking-wider leading-6 dark:text-gray-300">
					{product?.itemDescription}
				</p>
			</div>

			<div className="w-[45%]">
				<AddToCartBtn product={product} index={product?.id} />
			</div>
		</div>
	);
}
