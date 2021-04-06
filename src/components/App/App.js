import './App.css';

import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies";
import Profile from "../Profile";

function App() {
    const [movies, setMovies] = React.useState([
        {
            image: "https://i.ytimg.com/vi/3HawpxqPWww/maxresdefault.jpg",
            nameRU: 'Титан',
            duration: 123,
            id: 1,
        },
        {
            image: "https://i.ytimg.com/vi/3HawpxqPWww/maxresdefault.jpg",
            nameRU: 'Титан',
            duration: 220,
            id: 2,
        }
    ])

    const [myMovies, setMyMovies] = React.useState([
        {
            image: "https://i.ytimg.com/vi/3HawpxqPWww/maxresdefault.jpg",
            nameRU: 'Титан',
            duration: 123,
            id: 1,
        },
        {
            image: "https://i.ytimg.com/vi/3HawpxqPWww/maxresdefault.jpg",
            nameRU: 'Титан',
            duration: 220,
            id: 2,
        }
    ])

    const [userParams, setUserParams] = React.useState({name: '', email: '',})

    return (
        <div className="App">
            <Switch>
                <Route path="/movies">
                    <Movies movies={movies}/>
                </Route>
                <Route path="/saved-movies">
                    <SavedMovies myMovies={myMovies}/>
                </Route>
                <Route path="/profile">
                    <Profile name={userParams.name} email={userParams.email} onSetUserParams={setUserParams}/>
                </Route>
                <Route path="/">
                    <Main/>
                </Route>
             </Switch>
        </div>
  );
}

export default App;
