import './App.css'
import Home from './container/Home/Home'
import Navigation from './container/Navigation/Navigation'
import Contact from './container/Contact/Contact'
import About from './container/About/About'
import Project from './container/Project/Project'
import Skills from './container/Skills/Skills'
import Education from './container/Education/Education'
import { useEffect } from 'react'
import Footer from './container/Footer/Footer'
function App() {
    useEffect(() => {
        const listSection = document.querySelectorAll('.section')
        const listAnimation = document.querySelectorAll('.animation')

        window.addEventListener('scroll', () => {
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
            listAnimation.forEach((item) => {
                if (
                    item.getBoundingClientRect().top <
                    window.outerHeight - 150
                ) {
                    item.classList.add('active')
                }
            })
        })
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

export default App
