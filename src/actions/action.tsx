export function SubmitFormDelivery(formData: FormData) {
	const userName = formData.get("username") as string;
	const userPhoneNumber = formData.get("userphonenumber") as string;
	const userStreet = formData.get("userstreet") as string;
	const userFlatNumber = formData.get("userflatnumber") as string;
	const userFloorNumber = formData.get("userfloornumber") as string;

	console.log(
		userName,
		userPhoneNumber,
		userStreet,
		userFlatNumber,
		userFloorNumber,
	);
}

export function SubmitFormFeedback(formData: FormData) {
	const userName = formData.get("username") as string;
	const userFeedback = formData.get("userfeedback") as string;

	console.log(userName, userFeedback);
}

export function SubmitFormModalAddress(formData: FormData) {
	const userAddress = formData.get("useraddress") as string;
	const userFlat = formData.get("userflat") as string;
	const userFloor = formData.get("userfloor") as string;

	console.log(userAddress, userFlat, userFloor);
}

export function SubmitFormBasket(formData: FormData) {
	const promoCode = formData.get("promocode") as string;

	console.log(promoCode);
}

//const calculatePromoBonus = () => {
//	const promo = "MYPIZZA";
//	if (promoCode === promo) {
//		setTotalPrice((prevPrice) => {
//			const percentage = (bonus / 100) * prevPrice;
//			return prevPrice - percentage;
//		});
//		setPromoCode("");
//		toast.success(`You got ${bonus} % bonus !`);
//	}
//	toast.error("Not available code 😉");
//};
