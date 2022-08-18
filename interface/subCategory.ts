import { ICategoryObj, ISubCategoryObj } from './products';

export interface ISubCategory {
    _id: string;
    category: ICategoryObj,
    subCategory: ISubCategoryObj,
    imgUrl: string;
}