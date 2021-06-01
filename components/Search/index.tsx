import React from 'react'
import styles from './Search.module.css'
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Search() {
    return (
        <div className={styles.container}>
            <div className={styles.searchArea} >
                <div className={styles.icon}>
                    <ArrowBackIcon className={styles.arrow} />
                    <SearchIcon style={{ fontSize: 19 }} className={styles.searchIcon} />
                </div>
                <div
                    className={styles.input}
                    contentEditable={true}
                    data-placeholder={'Search or start a new conversation'}
                />
            </div>
        </div>
    );
}

export default Search;