// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Mycomp from './qcomps/firstcomp.js'
import Bio from './qcomps/bios.js'
import TodoList from './qcomps/todos.js'
import Profile from './components/profile_props.js'
import Gallery from './qcomps/gallery_props.js'
import Holder from './components/square.js'

import PackingList from './qcomps/props_item.js'

export default function Home() {
  return (
    <div className={styles.main}>
        <PackingList />        
    </div>
  )
}
