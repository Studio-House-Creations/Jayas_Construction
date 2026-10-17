import React from 'react'
import AboutHero from "../components/About/AboutHero"
import AboutIntro from '../components/About/AboutIntro'
import MissionVision from '../components/About/MissionVision'
import Team from '../components/About/Team'

function About() {
  return (
    <>
        <AboutHero/>
        <AboutIntro/>
        <MissionVision/>
        <Team/>
    </>
  )
}

export default About