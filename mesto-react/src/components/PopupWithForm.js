import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpened} ? ('.popup_opened') : '' `}>
            <div className="popup__container">
                <button onClick={props.onClose} type="button" className="popup__close-btn btn-opacity-change">+</button>
                <h2 className="popup__title">{props.title}</h2>
                <form name={props.name} className="form" noValidate> 
                    <button type="submit" className="popup__submit-btn black-btn-style">{props.buttonName}</button>
                    {props.children}
                </form>
            </div>
        </div>
    )
    
}
export default PopupWithForm;