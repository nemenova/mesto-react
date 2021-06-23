import React from 'react'

function Main() {

    handleEditAvatarClick
    handleEditProfileClick
    handleAddPlaceClick

    
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__photo-container">
                    <img src="#" alt="фото профиля" className="profile__photo"></img>
                    <button type="button" className="profile__photo-edit-btn"></button>
                </div>
                <div className="profile__text">
                    <div className="profile__title">
                        <h1 className="profile__name"></h1>
                        <button type="button" aria-label="редактировать" className="profile__edit-btn btn-opacity-change"></button>
                    </div>
                    <p className="profile__about"></p>
                </div>
                <button type="button" className="profile__add-btn btn-opacity-change"></button>
            </section>

            <section className="cards">

            </section>
        </main>
    )
    
}
export default Main;