import { useState, useEffect } from 'react'
import './App.css'
import ProjectCard from './components/ProjectCard'
import ContactForm from './components/ContactForm'
import Nav from './components/NavigationMain'
import Header from './components/Header'
import Footer from './components/Footer'
import Presentation from './components/Presentation'
import { Helmet } from 'react-helmet'

function App() {
   const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(console.error)
  }, [])

  return (
    <>
    <Helmet>
        <title>Mon Portfolio - Accueil</title>
        <meta name="description" content="Bienvenue sur mon portfolio professionnel" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Header/>
     <Nav/>
      <div className="container mx-auto p-4">
        <section>
          <Presentation/>
        </section>
      <section>
        <h2 className="text-2xl mb-4">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map(proj => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </section>
      <section className=" justify-items-center mt-10">
        <h2 className=" text-2xl mb-4">Contact</h2>
        <ContactForm />
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default App
