
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80  z-0'>
      <Header/>
      <section id='hero' className='snap-center'>
        <Hero/>
      </section>
      <section id ='about' className='snap-start'>
        <About/>
      </section>
      <section id='experience' className='snap-start'>
        <WorkExperience/>
      </section>
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>
      <section  id='projects' className='snap-start'>
        <Projects/>
      </section>
      <section  id='contact' className='snap-start'>
        <Contact/>
      </section>
    </div>

  )
}

export default App
