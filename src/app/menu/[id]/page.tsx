import prisma from "@/lib/db";

export default async function Product({ params }: { params: { id: string } }) {
	const product = await prisma.products.findUnique({
		where: {
			id: params.id,
		},
	});
	return (
		<div>
			<h1>{product?.itemName}</h1>
		</div>
	);
}
