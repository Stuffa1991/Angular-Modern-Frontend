export interface IProduct {
	id: number,
	name: string,
	description: string,
	sizingDesc: string,
	shippingDesc: string,
	price: number,
	rating: number,
	currency: string,
	frontImage: string,
	image: string[],
	sizes: string[],
	stock: number,
	discount: number,
	isLiked: boolean,
	isFavorited: boolean
}