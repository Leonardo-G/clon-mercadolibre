import { CategoryCodeProduct } from "./products";

export interface IUser {
    _id: string;
    username: string;
    type: "default" | "company-brand";
    imgUrl: string;
    created: string;
    category?: CategoryCodeProduct[]
}