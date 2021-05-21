
export class ApiInterFace {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this.headers = {
            "Content-Type": 'application/json'
        }
    }

    queryHandler = (res) => {
        if(res.ok) {
            return res.json(res.ok)
        }
        else {
            return Promise.reject(`Ошибка:${res.status}  ${res.statusText} `)
        }
    }
}


