import React from 'react';
import PopupWithForm from './PopupWithForm'

function PopupAvatar(props) {
    return (
        <PopupWithForm name="avatar" title="Обновить аватар" buttonName="Сохранить" isOpened={props.isOpened} onClose={props.onClose}>
            <fieldset className="form__input">
                <input id="avatar-input" name="avatar" placeholder="Ссылка на картинку" type="url"
                    className="form__item form__item_el_avatar" required />
                <span className="form__item-error avatar-input-error"></span>
            </fieldset>
        </PopupWithForm>
    )
}
export default PopupAvatar;