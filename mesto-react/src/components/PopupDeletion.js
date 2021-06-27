import React from 'react';
import PopupWithForm from './PopupWithForm'

function PopupDeletion(props) {
    return (
        <PopupWithForm name="delete-card" title="Вы уверены?" buttonName="Да" isOpened={props.isOpened} onClick={props.onClose}>
           
        </PopupWithForm>
    )
}
export default PopupDeletion;