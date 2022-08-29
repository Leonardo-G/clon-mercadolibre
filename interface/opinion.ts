export interface IOpinion {
    _id: string;
    idProduct: string;
    idUserOpinion: string;
    title: string;
    opinion: IComment;
    created: string;
}

interface IComment {
    comment: string;
    rate: number;
    like: number;
    down: number;
}