import React from 'react'
import api from '../utils/Api'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
    // const [userName, setUserName] = React.useState(" ");
    // const [userDescription, setUserDescription] = React.useState();
    // const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);



    React.useEffect(() => {
        Promise.all(api.getCards())
            .then(([cards]) => {
                setCards(cards);
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }, [])
    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }
    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards(() => cards.filter((c) => c._id !== card._id))
                
            })
            .catch(err => console.log(err))
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__photo-container">
                    <img src={currentUser.avatar} alt="фото профиля" className="profile__photo"></img>
                    <button type="button" className="profile__photo-edit-btn" onClick={props.onEditAvatar} ></button>
                </div>
                <div className="profile__text">
                    <div className="profile__title">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button type="button" aria-label="редактировать" className="profile__edit-btn btn-opacity-change" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__about">{currentUser.about}</p>
                </div>
                <button type="button" className="profile__add-btn btn-opacity-change" onClick={props.onAddPlace}></button>
            </section>

            <section className="cards">
                {cards.map((item) => (
                    <Card card={item} key={item._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
                ))}
            </section>
        </main>
    )

}
export default Main;