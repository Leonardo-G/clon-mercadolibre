export interface IProduct {
    _id: string;
    idUser: {
        _id: string;
        typeUser: "user" | "official-store";
        username: "string";
    }
    title: string;
    imgProduct: string[];
    category: CategoryCodeProduct[],
    subCategory: SubCategoryCodeProduct[],
    characteristics: string[],
    characteristicsDetail: ICharacteristicsDetail[]
    recommended: boolean;
    visited: number;
    description: string;
    stock: number;
    sold: number;
    created: number;
    offer: boolean;
    priceDetail: IPriceDetail;
    shipping: {
        code: 0 | 1 | 2,
        detail: "Envío gratis" | undefined
    };
    interests: InterfaceInterests;
    condition: "nuevo" | "usado" | "reacondicionado";
    tags: string[];
}

export interface ICharacteristicsDetail {
    code: string,
    info: {
        title: string;
        description: string
    }[]
}

export interface IPriceDetail{
    price: number;
    offerPrice?: number
}

export interface InterfaceInterests{
    accept: boolean;
    until: 3 | 6 | 12 | 0
}

export interface IHistoryMinin {
    _id: string;
    title: string;
    imgUrl: string;
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
                                | "hogar-muebles"

export type CategoryTitleProduct = "herramientas" 
                                    | "construcción" 
                                    | "deportes y fitness"
                                    | "tecnología"
                                    | "electromésticos"
                                    | "ropa y accesorios"
                                    | "hogar muebles"

export type SubCategoryCodeProduct = "electricas"
                                    | "manuales"
                                    | "jardin"
                                    | "accesorios"
                                    | "hidrolavadora"
                                    | "soldadora"
                                    | "sierras"
                                    | "taladros"
                                    | "griferias"
                                    | "pinturas"
                                    | "pisos-y-revestimientos"
                                    | "electricidad"
                                    | "plomeria"
                                    | "aberturas"
                                    | "materiales-de-obra"
                                    | "accesorios-de-construccion"
                                    | "fitness-y-musculacion"
                                    | "ciclismo"
                                    | "zapatillas"
                                    | "camping"
                                    | "aires-ac"
                                    | "aires-inverter"
                                    | "calefaccion"
                                    | "pequeños"
                                    | "heladeras"
                                    | "lavarropas"
                                    | "cocinas"
                                    | "freezers"
                                    | "hornos"
                                    | "microondas"
                                    | "zapatillas"
                                    | "calzado"
                                    | "remeras-y-chombas"
                                    | "jeans-y-pantalones"
                                    | "buzos-y-sweaters"
                                    | "anteojos"
                                    | "bolso-y-mochilas"
                                    | "joyas-y-relojes"
                                    | "muebles"
                                    | "cocina-y-bazar"
                                    | "decoracion"
                                    | "jardin"
                                    | "iluminacion"
                                    | "baños"
                                    | "segurdidad-para-el-hogar"
                                    | "textiles-y-blancos"
                                    | "organizacion"
                                    | "cortinas-y-accesorios"
                                    | "cuidado-y-lavanderia"

export type SubCategoryTitleProduct = "eléctricas" 
                                    | "manuales"
                                    | "jardín"
                                    | "accesorios"
                                    | "hidrolavadora"
                                    | "soldadoras"
                                    | "sierras"
                                    | "taladros"
                                    | "griferías"
                                    | "pinturas"
                                    | "pisos y revestimientos"
                                    | "electricidad"
                                    | "plomería"
                                    | "aberturas"
                                    | "materiales de obra"
                                    | "acc. de construcción"
                                    | "fitness y musculación"
                                    | "ciclismo"
                                    | "zapatillas"
                                    | "camping"
                                    | "aires accon."
                                    | "aires inverter"
                                    | "calefacción"
                                    | "pequeños"
                                    | "heladeras"
                                    | "lavarropas"
                                    | "cocinas"
                                    | "freezers"
                                    | "hornos"
                                    | "microondas"
                                    | "zapatillas"
                                    | "calzado"
                                    | "remeras ychombas"
                                    | "jeans y pantalones"
                                    | "buzos y sweaters"
                                    | "anteojos"
                                    | "bolso y mochilas"
                                    | "joyas y relojes"
                                    | "muebles"
                                    | "cocina y bazar"
                                    | "decoración"
                                    | "jardín"
                                    | "iluminación"
                                    | "baños"
                                    | "segurdidad para el hogar"
                                    | "textiles y blancos"
                                    | "organización"
                                    | "cortinas y accesorios"
                                    | "cuidado y lavanderia"