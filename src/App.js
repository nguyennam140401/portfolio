import './App.scss'
import Home from './container/Home/Home'
import Navigation from './container/Navigation/Navigation'
import Contact from './container/Contact/Contact'
import About from './container/About/About'
import Project from './container/Project/Project'
import Skills from './container/Skills/Skills'
import Education from './container/Education/Education'
import { useEffect } from 'react'
function App() {
    useEffect(() => {
        const listSection = document.querySelectorAll('.section')

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
        </div>
    )
}

export default App
