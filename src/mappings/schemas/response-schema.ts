export interface BookResponse {
    books: {[key: string]: Book};
}

export interface Book {
    id: string,
    title: string,
    year: number
}