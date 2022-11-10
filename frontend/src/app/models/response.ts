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
}

interface Cart {
    _id?:string;
    productId: string;
    quantity:number;
}

export interface Response {
    isSuccessful: boolean;
    message: string;
    alreadyExist?:boolean;
    cartItems?: Cart[];
    product?: Product;
    products?: Product[];
}