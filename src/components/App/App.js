import './App.css';

import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundError from "../NotFoundError/NotFoundError";
import {myMoviesConstanta} from "../../temporaryConstats";
import {MyMovieContext} from "../../context/MyMovieContext";
import {UserContext} from "../../context/UserContext";

function App() {

    React.useEffect(() =>
            setMyMovies(myMoviesConstanta),
        []
    )
    React.useEffect(() =>
            setUserParams({name: 'Георгий', email: 'asd'}),
        []
    )

    // Данные фильмов
    const [myMovies, setMyMovies] = React.useState([])

    // Данные пользователя
    const [userParams, setUserParams] = React.useState({})

    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    const searchMovie = (e, getApiData, setShowMovies, isShortFilmOn, setSearching) => {
        e.preventDefault()
        setSearching(true)

        // имитация ожидания запроса запроса в бд
        sleep(500).then(() => {
            getApiData()

            console.log(isShortFilmOn ? 'поиск короткометражек': 'поиск фильмов')
            setSearching(false)
        })

    }

    const updateUser = (name, email) => {
        setUserParams({name, email})
    }

    const addNewListMovie = (showMovies, setShowMovies, movies) => {
        const startSlice = showMovies.length
        const finishSlice = startSlice + 16
        setShowMovies([...showMovies, ...movies.slice(startSlice, finishSlice)])
    }


    return (
        <MyMovieContext.Provider value={myMovies}>
        <UserContext.Provider value={userParams}>
            <div className="App">
                <Switch>
                    <Route path="/signup">
                        <Register />
                    </Route>
                    <Route path="/signin">
                        <Login />
                    </Route>
                    <Route path="/movies">
                        <Movies
                            searchMovie={searchMovie}
                            addNewListMovie={addNewListMovie}

                        />
                    </Route>
                    <Route path="/saved-movies">
                        <SavedMovies
                            searchMovie={searchMovie}
                            addNewListMovie={addNewListMovie}
                        />
                    </Route>
                    <Route path="/profile">
                        <Profile updateUser={updateUser}/>
                    </Route>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path="/*">
                        <NotFoundError/>
                    </Route>
                 </Switch>
            </div>
        </UserContext.Provider>
        </MyMovieContext.Provider>
  );
}

export default App;
