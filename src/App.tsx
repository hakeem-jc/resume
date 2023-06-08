import './App.css'

const App = () => {
  return (
    <>
     <header className='app__header'>
      <ul>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Github</a></li>
      </ul>
     </header>

     <section className="app__hero">
      <img src="#" className='app__image' alt="profile"/>
      <h5 className="app__sub-title">Hi, I'm Hakeem</h5>
      <h2 className="app__title">Building digital experiences in React and Next.js</h2>
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
     
    </>
  )
}

export default App
