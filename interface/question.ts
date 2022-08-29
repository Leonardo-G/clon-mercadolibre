export interface IQuestion {
    _id: string;
    idProduct: string;
    idUser: string;
    questions: IUserQuestion[];
}

interface IUserQuestion {
    question: string;
    response: string
    created: string
}