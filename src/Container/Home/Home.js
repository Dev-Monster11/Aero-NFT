import React, {useRef} from 'react';
import Header from "../../Components/Header/Header";
import About from "../About/About";
import PlaneDsc from "../PlaneDsc/PlaneDsc";
import Timeline from "../TimeLine/TimeLine";
import Team from "../Team/Team";
import Tokenomics from "../Tokenomics/Tokenomics";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    const AboutSection = useRef(null)
    const WhitePaperSection = useRef(null)
    const flightSection = useRef(null)
    const TeamSection = useRef(null)

    const goToWhiteSection = () => {
        window.scrollTo({
            top: WhitePaperSection.current.offsetTop,
            behavior: 'smooth'
        })
    }
    const goToAboutSection = () => {
        window.scrollTo({
            top: AboutSection.current.offsetTop,
            behavior: 'smooth'
        })
    }
    const goToFlightSection = () => {
        window.scrollTo({
            top: flightSection.current.offsetTop,
            behavior: 'smooth'
        })
    }
    const goToTeamSection = () => {
        window.scrollTo({
            top: TeamSection.current.offsetTop,
            behavior: 'smooth'
        })
    }
    return(
        <div className={'main_background'}>
            <Header whitePaper={goToWhiteSection} about={goToAboutSection} flight={goToFlightSection} team={goToTeamSection} />

            <div ref={AboutSection}>
                <About />
            </div>

            <div ref={WhitePaperSection}>
                <PlaneDsc />
            </div>

            <div ref={flightSection}>
                <Timeline />
            </div>

            <div ref={TeamSection}>
                <Team />
            </div>
            <Tokenomics />
            <Footer whitePaper={goToWhiteSection} about={goToAboutSection} flight={goToFlightSection} team={goToTeamSection} />
        </div>
    )
}
export default Home