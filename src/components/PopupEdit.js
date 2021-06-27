import React from 'react';
import PopupWithForm from './PopupWithForm'

function PopupEdit(props) {
    return (
        <PopupWithForm name="edit" title="Редактировать профиль" buttonName="Сохранить" isOpened={props.isOpened} onClose={props.onClose}>
<fieldset className="form__input">
    <input id="name-input" name="name" placeholder="Имя" type="text" minLength="2" maxLength="40"
        className="form__item form__item_el_name" required></input>
    <span className="form__item-error name-input-error"></span>
    <input id="about-input" name="occupation" placeholder="Род занятий" type="text" minLength="2" maxLength="200"
        className="form__item form__item_el_about" required></input>
    <span className="form__item-error about-input-error"></span>
</fieldset>
        </PopupWithForm>
    )
}
export default PopupEdit;