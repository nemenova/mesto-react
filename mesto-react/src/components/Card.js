import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }


    return (
        // <template className="card-template">
            <li className="card">
                <button type="button" className="card__delete-btn btn-opacity-change"></button>
                <img onClick={handleClick} src={props.card.link} alt={props.card.name} className="card__image" />
                <div className="card__content">
                    <h2 className="card__title">{props.card.name}</h2>
                    <div>
                        <button type="button" className="card__like-btn btn-opacity-change"></button>
                        <span className="card__likes-number">{props.card.likes.length}</span>
                    </div>
                </div>
            </li>
        // </template>
    )

}
export default Card;