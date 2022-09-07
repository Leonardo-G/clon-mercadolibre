import { CategoryCodeProduct } from "./products";

export interface IUser {
    _id: string;
    username: string;
    type: "user" | "official-store";
    imgUrl: string;
    created: string;
    categories?: CategoryCodeProduct[]
}