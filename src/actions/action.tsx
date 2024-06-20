"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function SubmitFormDelivery(formData: FormData) {
	try {
		await prisma.order.create({
			data: {
				userName: formData.get("username") as string,
				userPhone: formData.get("userphonenumber") as string,
				userAddress: formData.get("userstreet") as string,
				userFlat: formData.get("userflatnumber") as string,
				userFloor: formData.get("userfloornumber") as string,
			},
		});
	} catch (error) {
		console.error("Error creating order:", error);
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			console.error("Prisma error code:", error.code);
		}
	}

	revalidatePath("/delivery");
}

//export function SubmitFormFeedback(formData: FormData) {
//	const userName = formData.get("username") as string;
//	const userFeedback = formData.get("userfeedback") as string;

//	console.log(userName, userFeedback);
//}

//export function SubmitFormModalAddress(formData: FormData) {
//	const userAddress = formData.get("useraddress") as string;
//	const userFlat = formData.get("userflat") as string;
//	const userFloor = formData.get("userfloor") as string;

//	console.log(userAddress, userFlat, userFloor);
//}

//export function SubmitFormBasket(formData: FormData) {
//	const promoCode = formData.get("promocode") as string;

//	console.log(promoCode);
//}
