import React from 'react'

function Main() {

   function  handleEditAvatarClick(){
       document.querySelector('.popup-change-photo').classList.add('.popup_opened')
    }
    function handleEditProfileClick(){
        document.querySelector('.popup_type_edit').classList.add('.popup_opened')
    }
    function handleAddPlaceClick() {
        document.querySelector('.popup-add-card').classList.add('.popup_opened')
   } 


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__photo-container">
                    <img src="#" alt="фото профиля" className="profile__photo"></img>
                    <button type="button" className="profile__photo-edit-btn" onClick={handleEditAvatarClick} ></button>
                </div>
                <div className="profile__text">
                    <div className="profile__title">
                        <h1 className="profile__name"></h1>
                        <button type="button" aria-label="редактировать" className="profile__edit-btn btn-opacity-change" onClick={handleEditProfileClick}></button>
                    </div>
                    <p className="profile__about"></p>
                </div>
                <button type="button" className="profile__add-btn btn-opacity-change" onClick={handleAddPlaceClick}></button>
            </section>

            <section className="cards">

            </section>
        </main>
    )
    
}
export default Main;