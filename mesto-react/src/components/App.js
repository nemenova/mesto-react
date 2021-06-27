import React from 'react';
import './App.css';
import logo from '../images/logo.svg';
import Api from './Api';
import Card from './Card';
import PopupDeletion from './PopupDeletion';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import Header from './Header';
import Main from './Main'
import Footer from './Footer'


function App() {
    function handleEditAvatarClick() {
        document.querySelector('.popup-change-photo').classList.add('.popup_opened')
    }
    function handleEditProfileClick() {
        document.querySelector('.popup_type_edit').classList.add('.popup_opened')
    }
    function handleAddPlaceClick() {
        document.querySelector('.popup-add-card').classList.add('.popup_opened')
    }
    return (
        <>
            <div className="page">
                <Header />
                <Main />
                <Footer />







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
