import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete}) {

    const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `card__delete-btn btn-opacity-change ${isOwn ? 'card__delete-btn' : ' '}`
    ); 
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        `card__like - btn btn-opacity-change ${isLiked ? 'card__like-btn_active' : ' '}`
    );


    function handleClick() {
        onCardClick(card);
    }
    function handleLikeClick() {
        onCardLike(card);
    }
    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
            <li className="card">
            <button onClick={handleDeleteClick} type="button" className={cardDeleteButtonClassName}></button>
                <img onClick={handleClick} src={card.link} alt={card.name} className="card__image" />
                <div className="card__content">
                    <h2 className="card__title">{card.name}</h2>
                    <div>
                    <button onClick={handleLikeClick} type="button" className={cardLikeButtonClassName}></button>
                        <span className="card__likes-number">{card.likes.length}</span>
                    </div>
                </div>
            </li>
    )

}
export default Card;