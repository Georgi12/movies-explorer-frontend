import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundError from "../NotFoundError/NotFoundError";
import {lowMovieDuration} from "../../temporaryConstats";
import {UserContext} from "../../context/UserContext";
import {apiBeatFilm} from "../../utils/MoviesApi"
import defaultImage from "../../images/noImage.jpg"
import useBreakpoints from "../../utils/MediaQueryRecognizer";
import {apiMain} from "../../utils/MainApi";
import {useHistory} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {

    const [showMovies, setShowMovies] = React.useState([])
    const [showMyMovies, setShowMyMovies] = React.useState([])
    const [searching, setSearching] = React.useState(false)
    const [movies, setMovies] = React.useState([])
    const [isShortFilm, setIsShortFilmOn] = React.useState(false)
    const [isFindNothing, setIsFindNothing] = React.useState(false)
    const [loggedIn, setLoggedIn] = React.useState(false)
    // Данные фильмов
    const [myMovies, setMyMovies] = React.useState([])

    // Данные пользователя
    const [userParams, setUserParams] = React.useState({})

    const [stepAndSlice, setStepAndSlice] =  React.useState({})

    const {tabletResolution, mobileResolution} = useBreakpoints()

    const history = useHistory()

    const changeStep = () => {
        if(!tabletResolution && !mobileResolution) {
            setStepAndSlice({'step': 4, 'slice': 12})
        }
        if(tabletResolution) {
            setStepAndSlice({'step': 2, 'slice': 8})
        }
        if(mobileResolution) {
            setStepAndSlice({'step': 1, 'slice': 5})
        }
    }

    React.useEffect(() => {
        changeStep()
    }, [mobileResolution, tabletResolution])


    React.useEffect( () => {
        handleTokenCheck()
    },[loggedIn])

    React.useEffect(() => {
        if (!loggedIn) return
        Promise.all(
            [apiMain.getProfileInfo(), apiMain.getMyMovies()]
        ).then(([userData, initialMovies]) => {
            setUserParams(userData.data)
            setMyMovies(initialMovies.data);
            }
        ).catch((err) => console.log(err))
    }, [loggedIn])


    React.useEffect(() => {
        if(localStorage.getItem('movies')) {
            const storageMovies = JSON.parse(localStorage.getItem("movies"))
            setMovies(storageMovies)
            setShowMovies(storageMovies.slice(0, stepAndSlice['slice']))
        }
    }, [stepAndSlice])


    React.useEffect(() => {
        const newShowMyMovies = showMyMovies.filter((movie) => {
            return myMovies.some((myMovie) => myMovie.movieId === movie.movieId)
        })
        setShowMyMovies(newShowMyMovies)
    }, [myMovies])


    const addNewListMovie = () => {
        const startSlice = showMovies.length
        const finishSlice = startSlice + stepAndSlice['step']
        setShowMovies([...showMovies, ...movies.slice(startSlice, finishSlice)])
    }


    const toggleShortFilmOn = () => setIsShortFilmOn(!isShortFilm)


    const onLikeToggle = (movie) => {
        let movieId = ''
        if(myMovies.some(myMovie => {
            if(myMovie.movieId === movie.movieId) {
                movieId = myMovie._id
                return true
            }
            return false
        })) {
            if(movieId === '') return
            apiMain.onDisLike(movieId)
                .then(() => {
                    const newCards = myMovies.filter((myMovie) => myMovie.movieId !== movie.movieId)
                    setMyMovies(newCards)
                    // reShowMovies()
                })
                .catch(err => console.log(err))

        } else {
            apiMain.onLike(movie)
                .then(newMyMovie => {
                    setMyMovies([newMyMovie.data, ...myMovies])
                })
                .catch(err => console.log(err))

        }
    }

    const rewriteMovieParams = (movie) => {
        const beatUrl = 'https://api.nomoreparties.co'
        const defaultImgUrl = `http://localhost:3000${defaultImage}`
        movie.thumbnail = movie.image ? `${beatUrl}${movie.image.formats.thumbnail.url}` : defaultImgUrl
        movie.image = movie.image ? `${beatUrl}${movie.image.url}` : defaultImgUrl
        movie.movieId = movie.id
        movie.trailer = movie.trailerLink
        delete movie.id
        delete movie.trailerLink
        delete movie.created_at
        delete movie.updated_at
    }

    const movieFinderLogic = (movies, finderValue, needToRename=true) => {
        return movies.filter(movie => {
            let returnDecide = true
            if (!movie.nameRU.toLowerCase().includes(finderValue.toLowerCase())) returnDecide = false
            if (isShortFilm && movie.duration > lowMovieDuration) returnDecide = false
            if (returnDecide) {
                if(needToRename) rewriteMovieParams(movie)
                return true
            }
            return false

        })
    }

    const searchMovie = (e, finderValue) => {
        e.preventDefault()
        setSearching(true)
        apiBeatFilm.getMovies()
            .then(beatMovies => {
                const redactBeatMovies = movieFinderLogic(beatMovies, finderValue)
                setMovies(redactBeatMovies)
                localStorage.setItem('movies', JSON.stringify(redactBeatMovies))
                setShowMovies(redactBeatMovies.slice(0, stepAndSlice['slice']))
                if(redactBeatMovies.length === 0) {
                    setIsFindNothing(true)
                } else {
                    setIsFindNothing(false)
                }
            })
            .catch(err => console.log(err))
            .finally(() => setSearching(false))
    }



    const searchMyMovie = (e, finderValue) => {
        e.preventDefault()
        const myFilterMovies = movieFinderLogic(myMovies, finderValue, false)
        setShowMyMovies(myFilterMovies)
    }

    const signUp = (e, data) => {
        e.preventDefault()
        apiMain.signUp(data)
            .then((res) => {
                setUserParams(res)
                history.push('/signin')
            })
            .catch(err => console.log(err))

    }


    const handleTokenCheck = () => {
        if (localStorage.getItem('jwt')){
            const jwt = localStorage.getItem('jwt')
            apiMain.getProfileInfo(jwt)
                .then((res) => {
                    if(res) {
                        setLoggedIn(true)
                        // history.push('/movies')
                    }
                })
                .catch(err => console.log(err));
        }
    }

    const signIn = (e, data) => {
        e.preventDefault()
        apiMain.signIn(data)
            .then((res) => {
                if(res.token) {
                    localStorage.setItem('jwt', res.token)
                    setUserParams(res)
                    setLoggedIn(true)
                    history.push('/movies')
                }
            })
            .catch((err) => console.log(err))
    }

    const signOutOn = () => {
        setLoggedIn(false)
        localStorage.removeItem('movies')
        localStorage.removeItem('jwt')
        history.push('/')
    }


    const updateUser = (e, data) => {
        e.preventDefault()
        apiMain.setProfileInfo(data)
            .then(newCurrentUser => setUserParams(newCurrentUser.data))
            .catch((err) => console.log(err))
    }

    return (
        <UserContext.Provider value={userParams}>
            <div className="App">
                <Switch>
                    <Route path="/signup">
                        <Register onSubmit={signUp} />
                    </Route>
                    <Route path="/signin">
                        <Login onSubmit={signIn}/>
                    </Route>
                    <ProtectedRoute
                        path="/movies"
                        Component={Movies}
                        loggedIn={loggedIn}
                        onAddMovies={addNewListMovie}
                        findMovies={searchMovie}
                        searching={searching}
                        showMovies={showMovies}
                        ShortFilmOn={toggleShortFilmOn}
                        isShortFilmOn={isShortFilm}
                        onLike={onLikeToggle}
                        myMovies={myMovies}
                        movies={movies}
                        isFindNothing={isFindNothing}

                    />

                    <ProtectedRoute
                        path="/saved-movies"
                        Component={SavedMovies}
                        loggedIn={loggedIn}
                        findMovies={searchMyMovie}
                        isShortFilmOn={isShortFilm}
                        ShortFilmOn={toggleShortFilmOn}
                        showMyMovies={showMyMovies}
                        searching={searching}
                        onLike={onLikeToggle}
                        myMovies={myMovies}
                    />

                    <ProtectedRoute
                        path="/profile"
                        Component={Profile}
                        loggedIn={loggedIn}
                        updateUser={updateUser}
                        signOutOn={signOutOn}
                    />

                    <Route exact path="/">
                        <Main
                            loggedIn={loggedIn}
                        />
                    </Route>
                    <Route path="/*">
                        <NotFoundError/>
                    </Route>
                 </Switch>
            </div>
        </UserContext.Provider>
  );
}

export default App;
