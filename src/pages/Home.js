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
    const [specialists, setSpecialists] = useState([])
    const [testimonis, setTestimonis] = useState([])

    useEffect(() => {
        PortoAPI.find().then((res) => {
            console.log("Work : ", res)
            setPortos(res)
        })

        PortoAPI.findSpecialist().then((res) => {
            console.log("Specialist Data : ", specialists)
            setSpecialists(res)
        })

        PortoAPI.findReview().then((res) => {
            console.log("Review: ", res)
            setTestimonis(res)
        })
    }, [])

    return (
        <>
            <NavbarComponent></NavbarComponent>
            <Hero></Hero>
            <Specialist specialists={specialists}></Specialist>
            <Works portos={portos}></Works>
            <Testimoni testimonis={testimonis}></Testimoni>
            <Contact></Contact>
        </>
    )
}

export default Home
