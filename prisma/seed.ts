import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const initialProducts: Prisma.ProductsCreateInput[] = [
	{
		itemCategory: "pizza",
		itemImg:
			"https://static.vecteezy.com/system/resources/previews/024/589/314/non_2x/top-view-pizza-with-ai-generated-free-png.png",
		itemName: "Super Pizza",
		itemDescription:
			"Colorful and tempting veggie option: tomato sauce, mozzarella, mushrooms, tomatoes, red onions, green peppers and sweetcorn.",
		itemPrice: 29.99,
	},
	{
		itemCategory: "pizza",
		itemImg: "https://pngimg.com/d/pizza_PNG7136.png",
		itemName: "Margherita",
		itemDescription:
			"A classy choice: tomato sauce + wonderfully stretchy and gooey mozzarella cheese.",
		itemPrice: 29.99,
	},
	{
		itemCategory: "pizza",
		itemImg:
			"https://www.pngplay.com/wp-content/uploads/2/Top-View-Pizza-Transparent-File.png",
		itemName: "Pepperoni",
		itemDescription:
			"A treat for fans of spicy flavors: tomato sauce, mozzarella, pepperoni and jalapeño pepper.",
		itemPrice: 29.99,
	},
	{
		itemCategory: "pizza",
		itemImg: "https://pngimg.com/uploads/pizza/pizza_PNG44092.png",
		itemName: "Garden Party",
		itemDescription:
			"Colorful and tempting veggie option: tomato sauce, mozzarella, mushrooms, tomatoes, red onions, green peppers and sweetcorn.",
		itemPrice: 29.99,
	},

	{
		itemCategory: "pizza",
		itemImg:
			"https://www.cateringatitsfinest.com/wp-content/uploads/2016/10/02-Mini-Pizza-1.png",
		itemName: "Home Spring",
		itemDescription:
			"Traditional flavor with a hint of nostalgia: tomato sauce, mozzarella, Mediterranean cheese, grilled chicken, ham, tomatoes, green peppers, and white onions.",
		itemPrice: 29.99,
	},
	{
		itemCategory: "pizza",
		itemImg:
			"https://www.pngplay.com/wp-content/uploads/2/Top-View-Pizza-Transparent-File.png",
		itemName: "Margherita",
		itemDescription:
			"A classy choice: tomato sauce + wonderfully stretchy and gooey mozzarella cheese.",
		itemPrice: 29.99,
	},
	{
		itemCategory: "sauce",
		itemImg:
			"https://png.pngtree.com/png-vector/20230926/ourmid/pngtree-fresh-red-sauce-bowl-isolated-png-image_10147443.png",
		itemName: "Ketchup",
		itemDescription: "Ketchup sauce heinz",
		itemPrice: 2.99,
	},
	{
		itemCategory: "sauce",
		itemImg: "https://pngimg.com/d/mayonnaise_PNG75.png",
		itemName: "Garlic",
		itemDescription: "Garlic sauce heinz",
		itemPrice: 2.99,
	},
	{
		itemCategory: "sauce",
		itemImg: "https://pngimg.com/d/sauce_PNG43.png",
		itemName: "Ketchup",
		itemDescription: "Ketchup sauce heinz",
		itemPrice: 2.99,
	},
	{
		itemCategory: "drink",
		itemImg:
			"https://www.freeiconspng.com/thumbs/coca-cola-png/bottle-coca-cola-png-transparent-2.png",
		itemName: "Coca Cola",
		itemDescription: "Drink and fly",
		itemPrice: 9.99,
	},
	{
		itemCategory: "drink",
		itemImg: "https://pngfre.com/wp-content/uploads/Fanta-1.png",
		itemName: "Fanta",
		itemDescription: "Drink and fly",
		itemPrice: 9.99,
	},
	{
		itemCategory: "drink",
		itemImg:
			"https://www.freeiconspng.com/thumbs/pepsi-png/pepsi-png-image-22.png",
		itemName: "Pepsi",
		itemDescription: "Drink and fly",
		itemPrice: 9.99,
	},
	{
		itemCategory: "drink",
		itemImg:
			"https://i.pinimg.com/originals/fe/79/a7/fe79a77d57b98386b8c05706eec0bd84.png",
		itemName: "Sprite",
		itemDescription: "Drink and fly",
		itemPrice: 9.99,
	},
	{
		itemCategory: "drink",
		itemImg:
			"https://cdn11.bigcommerce.com/s-zj6x66u8ej/images/stencil/1500x1500/products/249/503/MM_JTG_12z_OJ__21807.1734722272.png?c=1",
		itemName: "Orange Juice",
		itemDescription: "Drink and fly",
		itemPrice: 9.99,
	},
	{
		itemCategory: "drink",
		itemImg: "https://www.smakolyk.co.uk/wp-content/uploads/2023/03/6479-1.png",
		itemName: "Lipton Ice Tea",
		itemDescription: "Drink and fly",
		itemPrice: 9.99,
	},
	{
		itemCategory: "cream",
		itemImg:
			"https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/The%20Tonight%20Dough%20Ice%20Cream/tonight-dough-2022-detail.png",
		itemName: "B&J Netflix Chilld",
		itemDescription: "Eat for dream come true",
		itemPrice: 18.98,
	},
	{
		itemCategory: "cream",
		itemImg:
			"https://www.benjerry.co.uk/files/live/sites/systemsite/files/EU%20Specific%20Assets/Flavors/Product%20Assets/Chocolate%20Fudge%20Brownie%20Ice%20Cream/37877_AT-BE-CH-DE-FR-NL_IC_Chocolate-Fudge-Brownie_465ml_Open_Brand-1920px_8711327370708.png",
		itemName: "B&J Chocolate",
		itemDescription: "Eat for dream come true",
		itemPrice: 18.98,
	},
	{
		itemCategory: "cream",
		itemImg:
			"https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Chocolatey%20Love-A-Fair%20Ice%20Cream/chocolatey-love-a-fair-2022-detail.png",
		itemName: "B&J Love A Fair",
		itemDescription: "Eat for dream come true",
		itemPrice: 18.98,
	},
];

async function main() {
	for (const product of initialProducts) {
		const newProduct = await prisma.products.create({
			data: product,
		});
		console.log(`Created product with ID: ${newProduct.id}`);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
