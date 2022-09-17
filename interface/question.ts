export interface IQuestion {
    _id: string;
    created: number;
    idProduct: string;
    question: string;
    response: string,
    answered: boolean;
}