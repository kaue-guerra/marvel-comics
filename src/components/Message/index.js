import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { removeMessage } from '../../store/ducks/layout'

const Message = ({ message }) => {
    return (
        <div className="container mt-3">
            <div className="alert alert-success" role="alert">
                {message}
            </div>
        </div>
    )
}

export default Message;