import prisma from "@/lib/db";

export default async function SubmitedOrders() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const orders = await prisma.order.findMany();
	const lastone = orders.length - 1;
	return (
		<div className="w-[50%] mx-auto mt-[10rem] bg-gray-50 dark:bg-black/40 backdrop-blur-sm">
			<div className="px-6 pt-4 pb-2 border-b dark:border-gray-600">
				<h1 className="text-2xl tracking-wide">
					Hi {orders[lastone].userName}, you are in the qeue !
				</h1>
			</div>
			<div className="flex flex-col gap-y-4 p-6">
				<h2>
					<b className="text-green-400">Name:</b> {orders[lastone].userName}
				</h2>
				<h2>
					<b className="text-green-400">Phone:</b> {orders[lastone].userPhone}
				</h2>
				<h2>
					<b className="text-green-400">Street:</b>{" "}
					{orders[lastone].userAddress}
				</h2>
				<h2>
					<b className="text-green-400">Floor:</b> {orders[lastone].userFlat}
				</h2>
				<h2>
					<b className="text-green-400">Flat:</b> {orders[lastone].userFloor}
				</h2>
			</div>

			<div className="flex justify-between gap-x-8 px-6 py-4 border-t dark:border-gray-600">
				<h1 className="text-xl tracking-wider">Looking for deliver...</h1>
				<button className="px-3 bg-red-600 rounded-sm">Remove Details</button>
			</div>
		</div>
	);
}
