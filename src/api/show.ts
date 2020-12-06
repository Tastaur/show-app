import {showFromApi} from "./types";

export const fetchShow = async () : Promise<showFromApi[]> => {
    const requestPath = 'https://api.tvmaze.com/shows?page=1'
    const requestOptions: RequestInit = {
        method: "GET",
    }
    return await fetch(requestPath, requestOptions)
        .then(async (response) => {
            if ((response.status >= 200 && response.status < 400)) {
                return response;
            }
        })
        .then(async (response) => {
            const data: showFromApi[] = response ? await response.json() : undefined;
            return data
        })
        .catch(err => {
            throw new Error(err)
        })
}