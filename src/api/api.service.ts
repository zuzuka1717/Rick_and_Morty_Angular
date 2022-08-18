import Person from "../models/person.interface";

const baseUrl = 'https://rickandmortyapi.com/api/';
// type DataType = 'character' | 'episode' | 'location';

export interface ApiResponse<T> {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    }
    results: T[];
}

export function fetchCharacterList (page: number): Promise<ApiResponse<Person>> {
    return fetch(`${baseUrl}character?page=${page}`)
        .then((response) => response.json())

}
