export interface IProduct {
    _id: string;
    title: string;
    imgProduct: [string];
    category: ICategoryObj[],
    subCategory: ISubCategoryObj[],
    characteristics?: string[],
    characteristicsDetail?: 
        {
            code: string,
            info: {
                title: string;
                description: string
            }[]
        }[];
    recommended: boolean;
    visited: number;
    description: string;
    stock: number;
    sold: number;
    created: number;
    offer: boolean;
    priceDetail:{
        price: number;
        offerPrice?: number
    };
    shipping: {
        code: 0 | 1 | 2,
        detail: "Envío gratis" | undefined
    };
    interests: {
        accept: boolean;
        until?: 3 | 6 | 12 | null
    }
    
}

export interface ICategoryObj {
    code: CategoryCodeProduct,
    title: CategoryTitleProduct
}

export interface ISubCategoryObj {
    code: SubCategoryCodeProduct,
    title: SubCategoryTitleProduct
}

export type CategoryCodeProduct = "herramientas" 
                                | "construccion" 
                                | "deportes-y-fitness"
                                | "tecnologia"
                                | "electrodomesticos"
                                | "ropa-y-accesorios"

export type CategoryTitleProduct = "herramientas" 
                                    | "construcción" 
                                    | "deportes y fitness"
                                    | "tecnología"
                                    | "electromésticos"
                                    | "ropa y accesorios"

export type SubCategoryCodeProduct = "electricas"
                                    | "manuales"
                                    | "jardin"
                                    | "accesorios"
                                    | "hidrolavadora"
                                    | "soldadora"
                                    | "sierras"
                                    | "taladros"

export type SubCategoryTitleProduct = "eléctricas" 
                                    | "manuales"
                                    | "jardín"
                                    | "accesorios"
                                    | "hidrolavadora"
                                    | "soldadoras"
                                    | "sierras"
                                    | "taladros"