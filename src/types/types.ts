export interface IWork {
    id: number;
    title: string | undefined
    complete: boolean
}

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}