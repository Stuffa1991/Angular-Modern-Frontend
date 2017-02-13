import { Injectable } from '@angular/core';
import { PRODUCTDATA } from './products';
import { IProduct } from './product';

@Injectable()
export class DataService {
	public getProductData() : IProduct[]{
		return PRODUCTDATA;
	}
	
	public getProductDataById(productid: number) {
		return PRODUCTDATA.find((p) => p.id == productid);
	}
}