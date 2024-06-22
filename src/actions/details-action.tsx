"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function SubmitFormDelivery(formData: FormData) {
	try {
		await prisma.order.create({
			data: {
				userName: formData.get("username") as string,
				userPhone: ("+48" + formData.get("userphonenumber")) as string,
				userAddress: formData.get("userstreet") as string,
				userFlat: formData.get("userflatnumber") as string,
				userFloor: formData.get("userfloornumber") as string,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			console.error("Prisma error code:", error.code);
		}
	}

	revalidatePath("/delivery");
}
