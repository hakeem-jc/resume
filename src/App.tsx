import './App.css'
import profile from './assets/profile.jpg';

const App = () => {
  return (
    <main className='app__container'>
     <header className='app__header'>
      <a href="#" className="app__header-mailto">Get in touch</a>
      <ul>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Github</a></li>
      </ul>
      {/* TODO - Add mobile menu with icons */}
     </header>

     <section className="app__hero">
      <img src={profile} className='app__image' alt="profile"/>
      <h5 className="app__sub-title">Hi, I'm Hakeem</h5>
      <h2 className="app__title">Senior Software Developer</h2>
     </section>

     <section className='app__skills'>
       <section>Projects Carousel</section>
     </section>

     <section className='app__skills'>
       <section>Skills Component</section>
     </section>

     <section className='app__experience'>
       <section>Experience Components</section>
     </section>
     
    </main>
  )
}

export default App
