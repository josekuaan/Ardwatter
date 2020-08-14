import React from 'react'
import Service from './Service'
import Contact from './Contact'
import ABOUT from './About'
import Testimony from './Testimony'
import Strategy from './Strategy'



export default function Main() {
    return (
        <main>
            <ABOUT />
            <Service />
            <Strategy />
            <Testimony />
            <Contact />
        </main>
    )
}
