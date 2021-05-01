import React from 'react'
import Footer from './Footer';
import NavBar from "./NavBar";

function Blogs() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <h1 style={{color: "red"}}>Blog Page</h1>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Blogs
