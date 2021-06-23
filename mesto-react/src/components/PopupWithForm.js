import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__container">
                <button type="button" className="popup__close-btn btn-opacity-change">+</button>
                <h2 className="popup__title">{props.title}</h2>
                <form name={props.name} class="form form-profile" novalidate>
                    <button type="submit" className="popup__submit-btn black-btn-style">{props.buttonName}</button>
                    {props.children}
                </form>
            </div>
        </div>
    )
    
}
export default PopupWithForm;