import React from 'react';
import './App.css';
import Api from './Api';
import Card from './Card';
import FormValidator from './FormValidator';
import Popup from './Popup';
import PopupDeletion from './PopupDeletion';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import Section from './Section';
import UserInfo from './UserInfo';


function App() {
    return (
    <>
            <div className="page">
                <header className="header">
                    <img src="<%=require('./images/logo.svg')%>" alt="логотип" class="logo"></img>
                </header>
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
                <footer className="footer">
                    <p className="footer__text">&copy; 2020 Mesto Russia</p>
                </footer>

                <div className="popup popup-edit">
                    <div className="popup__container">
                        <button type="button" className="popup__close-btn btn-opacity-change">+</button>
                        <h2 className="popup__title">Редактировать профиль</h2>
                        <form name="profile-info" class="form form-profile" novalidate>
                            <fieldset className="form__input">
                                <input id="name-input" name="name" placeholder="Имя" type="text" minlength="2" maxlength="40"
                                    className="form__item form__item_el_name" required></input>
                                <span className="form__item-error name-input-error"></span>
                                <input id="about-input" name="occupation" placeholder="Род занятий" type="text" minlength="2" maxlength="200"
                                    className="form__item form__item_el_about" required></input>
                                <span className="form__item-error about-input-error"></span>
                            </fieldset>
                            <button type="submit" className="popup__submit-btn black-btn-style">Сохранить</button>
                        </form>
                    </div>
                </div>
                <div className="popup popup-add-card">
                    <div className="popup__container">
                        <button type="button" className="popup__close-btn btn-opacity-change">+</button>
                        <h2 className="popup__title">Новое место</h2>
                        <form name="place" className="form form-place" novalidate>
                            <fieldset className="form__input">
                                <input id="place-name-input" name="place-name" placeholder="Название" type="text" minlength="2" maxlength="30"
                                    className="form__item form__item_el_place-name" required></input>
                                <span class="form__item-error place-name-input-error"></span>
                                <input id="place-img-input" name="place-img" placeholder="Ссылка на картинку" type="url"
                                    className="form__item form__item_el_place-img" required></input>
                                <span className="form__item-error place-img-input-error"></span>
                            </fieldset>
                            <button type="submit" className="popup__submit-btn black-btn-style add-submit-btn">Создать</button>
                        </form>
                    </div>
                </div>
                <div className="popup popup_theme_dark popup-photo">
                    <div className="popup__container-photo">
                        <button type="button" className="popup__close-btn btn-opacity-change">+</button>
                        <img src="<%=require('./images/like.svg')%>" alt="картинка" className="popup__image" />
                        <p className="popup__caption"></p>
                    </div>
                </div>
                <div className="popup popup-change-photo">
                    <div className="popup__container">
                        <button type="button" className="popup__close-btn btn-opacity-change">+</button>
                        <h2 className="popup__title">Обновить аватар</h2>
                        <form name="avatar" className="form form-avatar" novalidate>
                            <fieldset className="form__input">
                                <input id="avatar-input" name="avatar" placeholder="Ссылка на картинку" type="url"
                                    className="form__item form__item_el_avatar" required />
                                <span className="form__item-error avatar-input-error"></span>
                            </fieldset>
                            <button type="submit" className="popup__submit-btn black-btn-style avatar-submit-btn">Сохранить</button>
                        </form>
                    </div>
                </div>
                <div className="popup popup-card-delete">
                    <div className="popup__container">
                        <button type="button" className="popup__close-btn btn-opacity-change">+</button>
                        <h2 className="popup__title">Вы уверены?</h2>
                        <form name="delete" className="form form-delete" novalidate>
                            <button type="submit" className="popup__submit-btn black-btn-style deletion-submit-btn">Да</button>
                        </form>
                    </div>
                </div>
                <template className="card-template">
                    <li className="card">
                        <button type="button" className="card__delete-btn btn-opacity-change"></button>
                        <img src="<%=require('./images/like.svg')%>" alt="развалины" className="card__image" />
                            <div className="card__content">
                                <h2 className="card__title">Карачаевск</h2>
                                <div>
                                    <button type="button" className="card__like-btn btn-opacity-change"></button>
                                    <span className="card__likes-number">0</span>
                                </div>
                            </div>
        </li>
    </template>
</div>
    </>
  );
}

export default App;
