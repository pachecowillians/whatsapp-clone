import Head from 'next/head'
import { useEffect, useState } from 'react'
import Chat from '../components/Chat'
import SideBar from '../components/SideBar'
import styles from '../styles/Home.module.css'
import Chats from './api/Chats'

export default function Home() {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState({});

  useEffect(() => {
    setChats(Chats.getChats());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Whatsapp clone</title>
        <meta name="description" content="Whatsapp clone" />
        <link rel="icon" href="/Whatsapp.ico" />
      </Head>

      <SideBar chats={chats} setActiveChat={setActiveChat} />
      <main className={styles.main}>
        {
          (!(Object.keys(activeChat).length === 0)) && <Chat chat={activeChat} />
        }
      </main>
    </div>
  )
}
