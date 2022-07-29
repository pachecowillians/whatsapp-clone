import React from 'react';
import styles from './ChatHeader.module.css';
import SearchIcon from '@material-ui/icons/Search';

function ChatHeader({ chat }) {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <img src={chat.profilePicture} alt="Profile picture" />
                <span className={styles.chatName}>{chat.name}</span>
            </div>
            <div className={styles.options}>
                <span>
                    <SearchIcon className={styles.searchIcon} />
                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                </span>
            </div>
        </div>
    );
}

export default ChatHeader;