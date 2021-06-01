import React from 'react'
import styles from './ChatFooter.module.css'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

function ChatFooter() {
    return (
        <div className={styles.container}>
            <div className={styles.leftIcons}>
                <InsertEmoticonIcon style={{fontSize:25}}  className={styles.emoticon}/>
                <AttachFileIcon style={{fontSize:25}} className={styles.attach}/>
            </div>
            <div className={styles.searchArea} >
                <div
                    className={styles.input}
                    contentEditable={true}
                    data-placeholder={'Type a message'}
                />
            </div>
            <div className={styles.icon}>
                <MicIcon style={{fontSize:25}} className={styles.recordVoice}/>
                <SendIcon style={{fontSize:25}} className={styles.sendMessage}/>
            </div>
        </div>
    );
}

export default ChatFooter;