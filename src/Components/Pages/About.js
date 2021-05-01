import React from 'react'
import Footer from './Footer';
import NavBar from "./NavBar";

function About() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <h1 style={{color: "red"}}>About Page</h1>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default About
