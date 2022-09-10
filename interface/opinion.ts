export interface IOpinion {
    created: string;
    _id: string;
    idProduct: string;
    idUserOpinion: string;
    title: string;
    comment: string;
    like: number;
    down: number;
    rate: number;
}