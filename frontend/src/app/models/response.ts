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
    disabled?: boolean;
}

interface Cart {
    _id?:string;
    productId: string;
    quantity:number;
}

interface CartFull {
    _id?:string;
    productId: Product;
    quantity:number;
}

export interface Response {
    isSuccessful: boolean;
    message: string;
    alreadyExist?:boolean;
    cartItems?: CartFull[];
    product?: Product;
    products?: Product[];
    totalLength?: number;
}