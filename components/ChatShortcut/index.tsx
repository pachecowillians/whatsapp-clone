import React from 'react'
import styles from './ChatShortcut.module.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DoneIcon from '@material-ui/icons/Done';

function ChatShortcut({ chat, setActiveChat }) {

    const lastMessage = chat.messages[chat.messages.length - 1];

    function openChat() {
        setActiveChat(chat);
    }

    const generateIcon = (message) => {
        if (message.type == 'sent') {
            switch (message.status) {
                case 'sent':
                    return <DoneIcon style={{ fontSize: 15, marginRight: 5 }} />

                    break;

                case 'visualized':
                    return <DoneAllIcon style={{ fontSize: 15, marginRight: 5, color: '#00a5f4' }} />
                    break;

                case 'recived':
                    return <DoneAllIcon style={{ fontSize: 15, marginRight: 5 }} />
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <div className={styles.container} onClick={openChat}>
            <div className={styles.profilePicture}>
                <img src={chat.profilePicture} alt="Profile picture" />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.upRow}>
                    <div className={styles.contactName}>{chat.name}</div>
                    <div className={styles.timeLastMessage}>{lastMessage.time}</div>
                </div>
                <div className={styles.downRow}>
                    <div className={styles.lastMessage}>{generateIcon(lastMessage)}{lastMessage.text}</div>
                    <ExpandMoreIcon style={{ fontSize: 25 }} className={styles.expand} tabIndex={-1} />
                    <div className={styles.dropdownMenu}>
                        <div className={styles.menuItem}>Archive chat</div>
                        <div className={styles.menuItem}>Silence notifications</div>
                        <div className={styles.menuItem}>Delete chat</div>
                        <div className={styles.menuItem}>Fix chat</div>
                        <div className={styles.menuItem}>Mark as unread</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatShortcut;