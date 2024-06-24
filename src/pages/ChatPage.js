import React, { useState } from 'react';
import '../styles/Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, user: 'Me' }]);
            setNewMessage('');
        }
    };

    return (
        <div className='chat-container'>
            <div className='sidebar'>
                <h1>Chats</h1>
                <div className='chat-list'>
                    <div className='chat-item'>Chat 1</div>
                    <div className='chat-item'>Chat 2</div>
                    <div className='chat-item'>Chat 3</div>
                </div>
            </div>
            <div className='chat-main'>
                <div className='messages'>
                    {messages.map((message, index) => (
                        <div key={index} className='message'>
                            <div className='message-avatar'>A</div>
                            <div className='message-content'>{message.text}</div>
                        </div>
                    ))}
                </div>
                <div className='message-input'>
                    <input
                        type='text'
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder='Write a message...'
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
