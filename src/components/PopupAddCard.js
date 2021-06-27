import React from 'react';
import PopupWithForm from './PopupWithForm'

function PopupAddCard(props) {
    return (
        <PopupWithForm name="add-card" title="Новое место" buttonName="Создать" isOpened={props.isOpened} onClose={props.onClose}>
            <fieldset className="form__input">
                <input id="place-name-input" name="place-name" placeholder="Название" type="text" minLength="2" maxLength="30"
                    className="form__item form__item_el_place-name" required></input>
                <span className="form__item-error place-name-input-error"></span>
                <input id="place-img-input" name="place-img" placeholder="Ссылка на картинку" type="url"
                    className="form__item form__item_el_place-img" required></input>
                <span className="form__item-error place-img-input-error"></span>
            </fieldset>
        </PopupWithForm>
    )
}
export default PopupAddCard;