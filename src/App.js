import './App.scss'
import Home from './container/Home/Home'
import Navigation from './container/Navigation/Navigation'
import Contact from './container/Contact/Contact'
import About from './container/About/About'
import Project from './container/Project/Project'
import Skills from './container/Skills/Skills'
import Education from './container/Education/Education'
function App() {
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
