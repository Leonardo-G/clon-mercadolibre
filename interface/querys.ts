export interface IQuerys {
    category?: string;
    subcategory?: string;
    condition?: string;
    interest?: "true" | "false"; 
    price_lte?: string; // STRING de números
    price_gte?: string;
    offer?: "true";
    shipping?: "0" | "1" | "2";
    search?: string;
    sort?: "price_asc" | "relevant"
}