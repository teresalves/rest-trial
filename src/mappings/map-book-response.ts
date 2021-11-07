import { Book, BookResponse } from "./schemas/response-schema";

export function mapBookResponse(books: Book[]): BookResponse {
    const jsonResponse: BookResponse = { books: {}};
    books.map((book) => jsonResponse.books[book.id] = book);
    return jsonResponse;
}