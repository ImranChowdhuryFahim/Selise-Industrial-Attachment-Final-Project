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

interface tableColumn{
    display:string;
    value:string;
  }

export interface dataTable{
    dataSources: Product[];
    displayedColumns: string[];
    displayedCOlumnsSettings: tableColumn[];
    isLoading: boolean;
    pageSizeOptions: number[];
}