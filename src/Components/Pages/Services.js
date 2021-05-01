import React from 'react'
import Features from '../Sections/Features';
import Options from '../Sections/Options';
import Footer from './Footer';
import NavBar from "./NavBar";

function Services() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="m-5">
                <Options />
                <br/>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Services
