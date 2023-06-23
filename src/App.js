import React from 'react'
import { Brand, CTA, Navbar, Article } from './components';
import { Footer, Header, Possibility, WhatGPT3, Features, Blog } from './containers';



const App = () => {
    return (
        <div className="App">
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />

        </div>
    )
}

export default App
