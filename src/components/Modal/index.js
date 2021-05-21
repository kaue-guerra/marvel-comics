import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const portalRoot = document.getElementById('portal-root');

const Modal = ({ children, isOpen, onClickClose }) => {

    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal__overlay">
            <div className="modal">
                <button type="button" className="modal__close-button" onClick={onClickClose}>X</button>
                {children}
            </div>

        </div>,
        portalRoot,
    );
}

export default Modal;