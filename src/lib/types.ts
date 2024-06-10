import { StaticImageData } from "next/image";

export interface ItemsType {
	id: number;
	itemCategory: string;
	img: StaticImageData;
	name: string;
	description?: string;
	discountPrice?: number;
	price?: number;
}

export type SelectedItemType = {
	[key: number]: number;
};
