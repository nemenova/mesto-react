import React from 'react';
import ImagePopup from './ImagePopup';
import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import EditAvatarPopup from './EditAvatarPopup';
import PopupAddCard from './PopupAddCard';
import EditProfilePopup from './EditProfilePopup';
import api from '../utils/Api'
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const CurrentUser = React.useContext(CurrentUserContext);
    const [currentUser, setCurrentUser] = React.useState(" ");

    React.useEffect(() => {
        api.getUserInfo()
            .then(([user]) => {
                setCurrentUser(user.name);
                setCurrentUser(user.about)
                setCurrentUser(user.avatar)

            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }, [])
    function handleUpdateUser(data) {
        api.changeUserInfo(data)
            .then(([user]) => {
                setCurrentUser(user.name);
                setCurrentUser(user.about)
               
                closeAllPopups()

            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
   }
    function handleUpdateAvatar(data) {
        api.changeProfilePhoto(data)
            .then(([user]) => {
                setCurrentUser(user.avatar)
                closeAllPopups()

            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }

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
            <CurrentUserContext.Provider value={currentUser}>
                <Header />
                <Main onCardClick={handleCardClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
                <Footer />
                <EditAvatarPopup isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} />
                <PopupAddCard isOpened={isAddPlacePopupOpen} onClose={closeAllPopups} />
                <EditProfilePopup onUpdateUser={handleUpdateUser} isOpened={isEditProfilePopupOpen} onClose={closeAllPopups} />
                <ImagePopup name='image' card={selectedCard !== null && selectedCard} onClose={closeAllPopups} />
            </CurrentUserContext.Provider>
        </>
    );
}

export default App;
