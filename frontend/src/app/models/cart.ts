interface Product {
    _id?:string;
    productName: string;
    productShortCode: string;
    category: string;
    price: number;
    quantity: number;
    description: string,
    imageUrl: string,
    isBestAchieved: boolean;
    createdDate: Date;
    origin: string;
    disabled: boolean;
}

export interface CartFull {
    _id?:string;
    productId: Product;
    quantity:number;
}