import '../styles/Chat.css';
import React from 'react';
import { supabase } from '../services/supabaseClient';


const Chat = () => {
    const logoff = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Error signing out:', error.message);
        } else {
            console.log('User signed out successfully');
        }
    };

    return (
        <>
            <div>
                <button className='btn-logoff' onClick={logoff}>Logoff</button>
                <h1>Chat Page</h1>
                <p>Welcome to the Chat Page!</p>
            </div>
        </>
    );
};

export default Chat;
