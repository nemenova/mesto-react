import React from 'react'
import api from '../utils/Api'
import Card from './Card'
import PopupWithForm from './PopupWithForm'

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([user, cards]) => {
                setUserName(user.name);
                setUserDescription(user.about)
                setUserAvatar(user.avatar)
                setCards(cards);
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
    }, [])


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__photo-container">
                    <img src={userAvatar} alt="фото профиля" className="profile__photo"></img>
                    <button type="button" className="profile__photo-edit-btn" onClick={props.onEditAvatar} ></button>
                </div>
                <div className="profile__text">
                    <div className="profile__title">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" aria-label="редактировать" className="profile__edit-btn btn-opacity-change" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__about">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-btn btn-opacity-change" onClick={props.onAddPlace}></button>
            </section>

            <section className="cards">
                {cards.map((item) => (
                    <Card card={item} key={item._id} onCardClick={props.onCardClick} />
                ))}
            </section>
        </main>
    )

}
export default Main;