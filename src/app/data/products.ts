import { IProduct } from './product';

export const PRODUCTDATA: IProduct[] = [
	{
		id: 1,
		name: 'GEL-FUJITRABUCO 5 G-TX',
		description: 'Gel-Fujitrabuco 5 G-Tx Running Shoe God og robust terrænløbesko med GORE- TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod',
		sizingDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		shippingDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		price: 947.90,
		rating: 2,
		currency: 'DKK',
		frontImage: 'assets/img/shoe.png',
		image: ['assets/img/shoe.png', 'assets/img/shoe_1.png', 'assets/img/shoe_2.png'],
		sizes: ['EU 40 Black','EU 41 Black','EU 42 Black','EU 43 Black','EU 44 Black'],
		stock: 10,
		discount: 15,
		isLiked: false,
		isFavorited: false
	},
	{
		id: 2,
		name: 'GEL-FUJITRABUCO 5 G-TX',
		description: 'Gel-Fujitrabuco 5 G-Tx Running Shoe God og robust terrænløbesko med GORE- TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod, Gel-Fujitrabuco 5 G-Tx Running Shoe God og robust terrænløbesko med GORE- TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod',
		sizingDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		shippingDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		price: 947.90,
		rating: 5,
		currency: 'USD',
		frontImage: 'assets/img/shoe.png',
		image: ['assets/img/shoe.png', 'assets/img/shoe_1.png', 'assets/img/shoe_2.png'],
		sizes: ['EU 40 Black','EU 41 Black','EU 42 Black','EU 43 Black','EU 44 Black'],
		stock: 10,
		discount: 15,
		isLiked: true,
		isFavorited: true
	}
];