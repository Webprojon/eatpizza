import prisma from "@/lib/db";

export default async function Ordered() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const orderedItems = await prisma.order.findMany();
	return (
		<div>
			{orderedItems.map((item, index) => (
				<div key={index}>
					<span>{item.userName}</span>
					<span>{item.userPhone}</span>
					<span>{item.userAddress}</span>
					<span>{item.userFlat}</span>
					<span>{item.userFloor}</span>
				</div>
			))}
		</div>
	);
}
