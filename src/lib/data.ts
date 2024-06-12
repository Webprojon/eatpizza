// Sale
import salecola from "@images/drinks/cole.png";
import saleburger from "@images/sales/saleburger.webp";
import salesauces from "@images/sales/salesauces.png";

// Pizza
import firstpizza from "@images/pizzas/1-pizza.png";
import thridpizza from "@images/pizzas/3-pizza.png";
import fourthpizza from "@images/pizzas/4-pizza.png";
import fifthpizza from "@images/pizzas/5-pizza.png";
import sixthpizza from "@images/pizzas/6-pizza.png";

// Sauces
import sauce1 from "@images/sauces/sauce-1.png";
import sauce2 from "@images/sauces/sauce-2.png";
import sauce3 from "@images/sauces/sauce-3.png";
import sauce4 from "@images/sauces/sauce-4.png";
import sauce5 from "@images/sauces/sauce-5.png";

// Drinks
import cola from "@images/drinks/cole.png";
import fanta from "@images/drinks/fanta.png";
import pepsi from "@images/drinks/pepsi.png";
import sprite from "@images/drinks/sprite.png";
import orange from "@images/drinks/orange.png";
import liptonpeach from "@images/drinks/lipton-peach.png";

// Ice Creams
import netflixbj from "@images/icecreams/netflixchilll.webp";
import choco from "@images/icecreams/choco.webp";
import lovefair from "@images/icecreams/love-a-fair.png";
import { StaticImageData } from "next/image";

//Home Img
import pizzaspinner1 from "@images/pizzas/pngtree-pizza-red-food-png-image_12472941.png";
import pizzaspinner2 from "@images/pizzas/02-Mini-Pizza-1.png";

export const links = [
	{
		name: "Home",
		hash: "/home",
	},
	{
		name: "Menu",
		hash: "/menu",
	},
	{
		name: "Delivery",
		hash: "/delivery",
	},
	{
		name: "Feedback",
		hash: "/feedback",
	},
] as const;

export const homeinfos = [
	{
		heading: "Two large pizzas",
		discount: 50,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate beatae perferendis cupiditate in quibusdam magni at recusandae libero delectus asperiores.",
		img: pizzaspinner1,
		btn: "Add to Basket",
	},
	{
		heading: "Three medium pizzas",
		discount: 50,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate beatae perferendis cupiditate in quibusdam magni at recusandae libero delectus asperiores.",
		img: pizzaspinner2,
		btn: "Add to Basket",
	},
] as const;

interface ItemsDataType {
	id: number;
	itemCategory: string;
	img: StaticImageData;
	name: string;
	description?: string;
	price: number;
	sizes: number[];
	volumes: number[];
}

export const items = {
	sales: [
		{
			id: 1,
			itemCategory: "sale",
			img: salecola,
			name: "Coca cola",
			description: "Cola",
			price: 8.99,
		},
		{
			id: 2,
			itemCategory: "sale",
			img: saleburger,
			name: "Burger + Fritki",
			description: "Hamburger, Potato",
			price: 28.99,
		},
		{
			id: 3,
			itemCategory: "sale",
			img: salesauces,
			name: "Set of 4 sauces",
			description: "Ranch, BBQ, tomato",
			price: 6.35,
		},
	] as ItemsDataType[],
	pizzas: [
		{
			id: 1,
			itemCategory: "pizza",
			img: firstpizza,
			name: "Super Pizza",
			description:
				"Colorful and tempting veggie option: tomato sauce, mozzarella, mushrooms, tomatoes, red onions, green peppers and sweetcorn.",
			price: 29.99,
			volumes: [24, 29, 34, 39],
		},
		{
			id: 2,
			itemCategory: "pizza",
			img: sixthpizza,
			name: "Margherita",
			description:
				"A classy choice: tomato sauce + wonderfully stretchy and gooey mozzarella cheese.",
			price: 29.99,
			volumes: [24, 29, 34, 39],
		},
		{
			id: 3,
			itemCategory: "pizza",
			img: thridpizza,
			name: "Pepperoni",
			description:
				"A treat for fans of spicy flavors: tomato sauce, mozzarella, pepperoni and jalapeño pepper.",
			price: 29.99,
			volumes: [24, 29, 34, 39],
		},
		{
			id: 4,
			itemCategory: "pizza",
			img: fourthpizza,
			name: "Garden Party",
			description:
				"Colorful and tempting veggie option: tomato sauce, mozzarella, mushrooms, tomatoes, red onions, green peppers and sweetcorn.",
			price: 29.99,
			volumes: [24, 29, 34, 39],
		},

		{
			id: 5,
			itemCategory: "pizza",
			img: fifthpizza,
			name: "Home Spring",
			description:
				"Traditional flavor with a hint of nostalgia: tomato sauce, mozzarella, Mediterranean cheese, grilled chicken, ham, tomatoes, green peppers, and white onions.",
			price: 29.99,
			volumes: [24, 29, 34, 39],
		},
		{
			id: 6,
			itemCategory: "pizza",
			img: sixthpizza,
			name: "Margherita",
			description:
				"A classy choice: tomato sauce + wonderfully stretchy and gooey mozzarella cheese.",
			price: 29.99,
			volumes: [24, 29, 34, 39],
		},
	] as ItemsDataType[],
	sauces: [
		{
			id: 1,
			itemCategory: "sauce",
			img: sauce1,
			name: "Tomato",
			price: 2.99,
		},
		{
			id: 2,
			itemCategory: "sauce",
			img: sauce5,
			name: "Garlic",
			price: 2.99,
		},
		{
			id: 3,
			itemCategory: "sauce",
			img: sauce3,
			name: "Sweet Chilli",
			price: 2.99,
		},
		{
			id: 4,
			itemCategory: "sauce",
			img: sauce4,
			name: "Ranch",
			price: 2.99,
		},
		{
			id: 5,
			itemCategory: "sauce",
			img: sauce2,
			name: "BBQ",
			price: 2.99,
		},
	] as ItemsDataType[],
	drinks: [
		{
			id: 1,
			itemCategory: "drink",
			img: cola,
			name: "Coca Cola",
			price: 9.99,
			volumes: [0.5, 0.85, 1.5],
		},
		{
			id: 2,
			itemCategory: "drink",
			img: fanta,
			name: "Fanta",
			price: 9.99,
			volumes: [0.5, 0.85, 1.5],
		},
		{
			id: 3,
			itemCategory: "drink",
			img: pepsi,
			name: "Pepsi",
			price: 9.99,
			volumes: [0.5, 0.85, 1.5],
		},
		{
			id: 4,
			itemCategory: "drink",
			img: sprite,
			name: "Sprite",
			price: 9.99,
			volumes: [0.5, 0.85, 1.5],
		},

		{
			id: 5,
			itemCategory: "drink",
			img: orange,
			name: "Orange Juice",
			price: 5.99,
			volumes: [0.5, 0.85, 1.5],
		},
		{
			id: 6,
			itemCategory: "drink",
			img: liptonpeach,
			name: "Lipton Ice Tea",
			price: 7.99,
			volumes: [0.5, 0.85, 1.5],
		},
	] as ItemsDataType[],
	icecreams: [
		{
			id: 1,
			itemCategory: "cream",
			img: netflixbj,
			name: "B&J Netflix Chilld",
			price: 18.98,
			volumes: [100, 465],
		},
		{
			id: 2,
			itemCategory: "cream",
			img: choco,
			name: "B&J Chocolate",
			price: 18.98,
			volumes: [100, 465],
		},
		{
			id: 3,
			itemCategory: "cream",
			img: lovefair,
			name: "B&J Love A Fair",
			price: 18.98,
			volumes: [100, 465],
		},
	] as ItemsDataType[],
} as const;
