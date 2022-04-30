import API from './config';
import { BehaviorSubject } from "rxjs";

export const movie = new BehaviorSubject(null);
export const loading = new BehaviorSubject(false);

const API_SERVER_RICKANDMORTY = "https://rickandmortyapi.com";

const API_SERVER_BREAKINGBAD = "https://www.breakingbadapi.com";

export const getAllCharactersRickAndMorty = async () => {
    loading.next(true)
    API
        .get(`${API_SERVER_RICKANDMORTY}/api/character`)
        .then((res) => {
            const movieList = res.data.results.map(item => ({
                id: item.id,
                image: item.image,
                name: item.name,
                status: item.status
            }))
            loading.next(false)
            movie.next(movieList);
            return res;
        });
}

export const getAllCharactersBreakingBad = async () => {
    loading.next(true)
    API
        .get(`${API_SERVER_BREAKINGBAD}/api/characters`)
        .then((res) => {
            const movieList = res.data.map(item => ({
                id: item.char_id,
                image: item.img,
                name: item.nickname,
                status: item.status
            }))
            loading.next(false)
            movie.next(movieList);
            return res;
        });
}



