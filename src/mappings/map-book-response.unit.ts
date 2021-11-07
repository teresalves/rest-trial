import { idText } from "typescript";
import { mapBookResponse } from "./map-book-response";

describe('mapBookResponse', () => {
    const rows = [
        {
            id: '1',
            title: 'title',
            year: 2000
        },
        {
            id: '2',
            title: 'title2',
            year: 2001
        }
    ]
    
    it('should map db rows to proper json object', () => {
        const result = mapBookResponse(rows);
        expect(result).toMatchSnapshot();
    })
})