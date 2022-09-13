export interface IQuerys {
    category?: string;
    subcategory?: string;
    condition?: string;
    interest?: "true" | "false"; 
    price_lte?: string; // STRING de números
    price_gte?: string;
}