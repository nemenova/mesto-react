import React from 'react';
import './App.css';
import logo from '../images/logo.svg';

import PopupWithImage from './PopupWithImage';
import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import PopupAvatar from './PopupAvatar';
import PopupAddCard from './PopupAddCard';
import PopupEdit from './PopupEdit';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditAvatarClick() {
       setIsEditAvatarPopupOpen(true)
    }
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }
    function handleCardClick(card) {
        setSelectedCard(card)
    }
    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false)
        setSelectedCard(null)
    }

    return (
        <>
            <div className="page">
                <Header />
                <Main onCardClick={handleCardClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
                <Footer />
                <PopupAvatar isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} />
                <PopupAddCard isOpened={isAddPlacePopupOpen} onClose={closeAllPopups} />
                <PopupEdit isOpened={isEditProfilePopupOpen} onClose={closeAllPopups} />
                <PopupWithImage name='image' card={selectedCard !==null && selectedCard} onClose={closeAllPopups} />                
            </div>
        </>
    );
}

export default App;
