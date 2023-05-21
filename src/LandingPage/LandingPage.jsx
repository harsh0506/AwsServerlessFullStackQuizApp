import React from 'react'
import HeroSection from './HeroSection'
import Advantage from "./AdvantageOfQuiz"
import Navbar from './Navbar'
import Footer from './Footer'
function LandingPage() {
    return (
        <>
            <div style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                width: "98vw",
                gap: "20px",
                justifyContent: "center",
            }}>
                <Navbar />
                <HeroSection />
                <Advantage />
                <Footer />
            </div>

        </>

    )
}

export default LandingPage