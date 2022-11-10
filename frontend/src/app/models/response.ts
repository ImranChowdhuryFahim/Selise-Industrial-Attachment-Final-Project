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
export interface Response {
    isSuccessful: boolean;
    message: string;
    product?: Product
    products?: Product[]
}