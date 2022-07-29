import React from 'react'
import ChatFooter from '../ChatFooter'
import ChatHeader from '../ChatHeader'
import styles from './Chat.module.css'
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DoneIcon from '@material-ui/icons/Done';

function Chat({ chat }) {

    const generateIcon = (message) => {
        if (message.type == 'sent') {
            switch (message.status) {
                case 'sent':
                    return <DoneIcon style={{ fontSize: 15, marginLeft: 5 }} />

                    break;

                case 'visualized':
                    return <DoneAllIcon style={{ fontSize: 15, marginLeft: 5, color: '#00a5f4' }} />
                    break;

                case 'recived':
                    return <DoneAllIcon style={{ fontSize: 15, marginLeft: 5 }} />
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <div className={styles.container}>
            <ChatHeader chat={chat} />
            <div className={styles.messagesArea} data-background={chat.profilePicture}>
                {
                    chat.messages.map((message, key) => (
                        <div key={key} className={styles.messageLine} style={message.type == 'sent' ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }}>
                            <div className={styles.message} style={message.type == 'sent' ? { backgroundColor: '#e8ffd6' } : { backgroundColor: '#fff' }}>
                                <span className={styles.messageContent}>{message.text}</span>
                                <span className={styles.messageTime}>{message.time} {generateIcon(message)}</span>
                            </div>
                        </div>
                    ))
                }



            </div >
            <ChatFooter />
        </div >
    );
}

export default Chat;