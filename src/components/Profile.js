import React from "react";

function Profile({name, email, onSetUserParams}) {

    return(
        <>
            <h1>Привет, Виталий!</h1>
            <div>
                <p>Имя</p>
                <p>{name}</p>
                <hr className="section__line"/>
                <p>E-mail</p>
                <p>{email}</p>
            </div>

            <button>Редактировать</button>
            <button>Выйти из аккаунта</button>
        </>
    )
}

export default Profile
