import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Contact from '../components/Contact'
import ABOUT from '../components/About'
import Testimony from '../components/Testimony'

export default function Home() {
    return (
        <div>
            <Header />
            <ABOUT />
            <Main />
            <Testimony />
            <Contact />
        </div>
    )
}
