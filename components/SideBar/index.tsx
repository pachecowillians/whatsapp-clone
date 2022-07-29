import React from 'react'
import styles from './SideBar.module.css'
import SideBarHeader from '../SideBarHeader';
import Search from '../Search';
import ChatShortcut from '../ChatShortcut';

function SideBar({ chats, setActiveChat }) {
    return (
        <div className={styles.container}>
            <div className={styles.sideBarTop}>
                <SideBarHeader />
                <Search />
            </div>
            <div className={styles.chatList}>
                {
                    chats.map((chat, key) => (
                        <ChatShortcut key={key} chat={chat} setActiveChat={setActiveChat} />
                    ))
                }
            </div>
        </div>
    );
}

export default SideBar;