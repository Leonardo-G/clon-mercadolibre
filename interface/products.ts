export interface IProduct {
    _id: string;
    title: string;
    imgProduct: [string];
    category: {
        code: CategoryCodeProduct,
        title: CategoryTitleProduct
    }[],
    subCategory: {
        code: SubCategoryCodeProduct,
        title: SubCategoryTitleProduct
    }[],
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

export type CategoryCodeProduct = "tools" 
                                | "construction" 
                                | "sports_and_fitness"
                                | "tecnology"
                                | "home_appliances"
                                | "clothes"

export type CategoryTitleProduct = "herramientas" 
                                    | "construcción" 
                                    | "deportes y fitness"
                                    | "tecnología"
                                    | "electromésticos"
                                    | "ropa y accesorios"

export type SubCategoryCodeProduct = "electrical"
                                    | "manuals"
                                    | "garden"
                                    | "accessories"
                                    | "pressure_washer"
                                    | "welders"
                                    | "saws"
                                    | "drills"

export type SubCategoryTitleProduct = "eléctricidad" 
                                    | "manuales"
                                    | "jardín"
                                    | "accesorios"
                                    | "hidrolavadora"
                                    | "soldadoras"
                                    | "sierras"
                                    | "taladros"