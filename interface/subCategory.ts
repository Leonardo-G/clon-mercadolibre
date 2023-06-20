import { ICategory } from "./category";
import { ISubCategoryObj } from "./products";

export interface ISubCategory extends ISubCategoryObj {
    _id: string;
    category: ICategory;
    imgUrl: string;
}