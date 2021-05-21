import {ApiInterFace} from "./ApiInterFace";

const baseUrl = "http://localhost:8000"

class ApiMain extends ApiInterFace {

    setToken(token) {
        this.headers['Authorization'] = `Bearer ${token}`
    }

    getMyMovies() {
        return fetch(`${this._baseUrl}/movies/`, {
            headers: this.headers,
        }).then(res => this.queryHandler(res))

    }

    signUp(data) {
        return fetch(`${this._baseUrl}/signup/`, {
            headers: this.headers,
            method: 'post',
            body: JSON.stringify(data),
        }).then(res => this.queryHandler(res))
    }

    signIn(data) {
        return fetch(`${this._baseUrl}/signin/`, {
            headers: this.headers,
            method: 'post',
            body: JSON.stringify(data),
        }).then(res => this.queryHandler(res))
    }
    getProfileInfo(token) {
        if (token) this.setToken(token)
        return fetch(`${this._baseUrl}/users/me/`, {
            headers: this.headers,
        }).then(res => this.queryHandler(res))


    }

    setProfileInfo(data) {
        return fetch(`${this._baseUrl}/users/me/`, {
            headers: this.headers,
            method: 'PATCH',
            body: JSON.stringify(data)
        }).then(res => this.queryHandler(res))
    }

    onLike(data) {
        return fetch(`${this._baseUrl}/movies/`, {
            headers: this.headers,
            method: 'post',
            body: JSON.stringify(data),
        }).then(res => this.queryHandler(res))
    }

    onDisLike(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            headers: this.headers,
            method: 'delete',
        }).then(res => this.queryHandler(res))
    }



}

export  const apiMain = new ApiMain({baseUrl: baseUrl})
