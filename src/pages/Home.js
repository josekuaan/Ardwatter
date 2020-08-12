import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Contact from '../components/Contact'
import ABOUT from '../components/About'
import Testimony from '../components/Testimony'
import Strategy from '../components/Strategy'

export default function Home() {
    return (
        <div>
            <Header />
            <ABOUT />
            <Main />
            <Strategy />
            <Testimony />
            <Contact />
        </div>
    )
}
