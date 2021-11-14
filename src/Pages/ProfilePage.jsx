import React, { useEffect } from 'react'
import Home from '../container/Home/Home'
import Navigation from '../container/Navigation/Navigation'
import Contact from '../container/Contact/Contact'
import About from '../container/About/About'
import Project from '../container/Project/Project'
import Skills from '../container/Skills/Skills'
import Education from '../container/Education/Education'
import Footer from '../container/Footer/Footer'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
    const params = useParams()
    console.log(params.id)
    const eventScroll = () => {
        const listSection = document.querySelectorAll('.section')
        const listAnimation = document.querySelectorAll('.animation')
        if (listSection) {
            listSection.forEach((section) => {
                if (section.getBoundingClientRect().top <= 100) {
                    document
                        .querySelector('.nav a.active')
                        .classList.remove('active')
                    const listLink = document.querySelectorAll('.nav a')
                    listLink.forEach((item) => {
                        if (
                            item.getAttribute('href') ===
                            '#' + section.getAttribute('id')
                        ) {
                            item.classList.add('active')
                        }
                    })
                }
            })
        }
        if (listAnimation) {
            listAnimation.forEach((item) => {
                if (item.getAttribute('data-delay')) {
                    let timeDelay = item.getAttribute('data-delay')

                    item.style.transitionDelay = timeDelay * 0.1 + 's'
                }
                if (
                    item.getBoundingClientRect().top <
                    window.outerHeight - 150
                ) {
                    item.classList.add('animation-start')
                }
            })
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', eventScroll)
        return () => {
            window.removeEventListener('scroll', eventScroll)
        }
    }, [])

    return (
        <div className="App">
            <Navigation />
            <Home />
            <About />
            <Education />
            <Skills />
            <Project />
            <Contact />
            <Footer></Footer>
        </div>
    )
}

export default ProfilePage
