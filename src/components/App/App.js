import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundError from "../NotFoundError/NotFoundError";
import {moviesConstanta, myMoviesConstanta} from "../../temporaryConstats";
import {MyMovieContext} from "../../context/MyMovieContext";
import {UserContext} from "../../context/UserContext";
function App() {

    const [showMovies, setShowMovies] = React.useState([])
    const [searching, setSearching] = React.useState(false)
    const [movies, setMovies] = React.useState([])
    const [isShortFilm, setIsShortFilmOn] = React.useState(false)

    // Данные фильмов
    const [myMovies, setMyMovies] = React.useState([])

    // Данные пользователя
    const [userParams, setUserParams] = React.useState({})


    const onLike = (movie) => {
        if(myMovies.some(myMovie => myMovie.id === movie.id)) {
            const newCards =myMovies.filter((myMovie) => myMovie.id !== movie.id)
            setMyMovies(newCards)
        } else {
            setMyMovies([movie, ...myMovies])
        }
    }

    const getMoviesApi = () => {
        // действия после запроса в базу
        const draftMovies = moviesConstanta
        setMovies(draftMovies)
        setShowMovies(draftMovies.slice(0, 16))
    }

    const addNewListMovie = () => {
        const startSlice = showMovies.length
        const finishSlice = startSlice + 16
        setShowMovies([...showMovies, ...movies.slice(startSlice, finishSlice)])
    }


    const toggleShortFilmOn = () => setIsShortFilmOn(!isShortFilm)


    React.useEffect(() => setMyMovies(myMoviesConstanta), [])
    React.useEffect(() => setUserParams({name: 'Георгий', email: 'asd'}), [])


    const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

    const searchMovie = (e) => {
        e.preventDefault()
        setSearching(true)

        // имитация ожидания запроса запроса в бд
        sleep(500).then(() => {
            getMoviesApi()

            console.log(isShortFilm ? 'поиск короткометражек': 'поиск фильмов')
            setSearching(false)
        })

    }

    const updateUser = (name, email) => {
        setUserParams({name, email})
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
                            onAddMovies={addNewListMovie}
                            findMovies={searchMovie}
                            searching={searching}
                            showMovies={showMovies}
                            ShortFilmOn={toggleShortFilmOn}
                            isShortFilmOn={isShortFilm}
                            onLike={onLike}
                            myMovies={myMovies}
                        />
                    </Route>
                    <Route path="/saved-movies">
                        <SavedMovies
                            findMovies={searchMovie}
                            isShortFilm={isShortFilm}
                            ShortFilmOn={toggleShortFilmOn}
                            searching={searching}
                            onLike={onLike}
                            myMovies={myMovies}
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
