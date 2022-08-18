import { ICategoryObj } from './products';

export interface ICategory{
    _id: string;
    category: ICategoryObj;
    images: string[];
}