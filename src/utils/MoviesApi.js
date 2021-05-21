import {ApiInterFace} from "./ApiInterFace";

const baseUrl = "https://api.nomoreparties.co/beatfilm-movies"

class ApiBeatFilm extends ApiInterFace{

    getMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: this.headers,
        }).then(res => this.queryHandler(res))
    }

}

export  const apiBeatFilm = new ApiBeatFilm({baseUrl: baseUrl})
