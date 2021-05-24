import React from 'react';

import Message from '../Message';
import { useSelector } from 'react-redux';

import './index.css';

export default function Messages() {
    const { messages } = useSelector((state) => state.layout);

    return <div className="messages">{messages.map((msg, index) => <Message key={index} message={msg} />)}</div>;
}