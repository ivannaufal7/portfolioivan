import React from 'react'

import NavbarComponent from '../components/NavbarComponent';
import Hero from '../components/Hero';
import Specialist from '../components/Specialist';
import Works from '../components/Works';
import Testimoni from '../components/Testimoni';
import Contact from '../components/Contact';
import { useState, useEffect } from 'react'
import PortoAPI from '../config/PortoAPI';

function Home() {
    const [portos, setPortos] = useState([])

    useEffect(() => {
        PortoAPI.find().then((res) => {
            console.log(res)
            setPortos(res)
        })
    }, [])

    return (
        <>
            <NavbarComponent></NavbarComponent>
            <Hero></Hero>
            <Specialist></Specialist>
            <Works portos={portos}></Works>
            <Testimoni></Testimoni>
            <Contact></Contact>
        </>
    )
}

export default Home
