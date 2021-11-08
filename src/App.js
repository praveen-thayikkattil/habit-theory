import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-logo" title="Habit Theory">Habit Theory</h1>

        <button className="nav-open">MENU</button>
      </header>

      <section className="home-hero">
        <blockquote>
          <p>"We use insights from neuroscience, psychology and behavioural economics to help our clients build productive microhabits."</p>
        </blockquote>
      </section>

      <section className="who-we-are">
        <header className="section-header">
          <figure className="section-icon who-we-are-icon">
            <img alt="Who we are" />
          </figure>
          
          <h2 className="section-title">Who we are</h2>
        </header>

        <div className="entry">
          <p>We are educators who use science and stories to help people find meaning in the workplace. Our team is on the constant lookout for the world's finest research on productivity, efficiency, stress, self-control, learning and leadership. We curate our research from some of the most remarkable institutions in the world and use those <strong>insight/(insights)</strong> to systematically solve problems in the workplace and help organisations and people relate to their work expressively</p>
        </div>
      </section>

      <section className="our-services">
        <header className="section-header">
          <figure className="section-icon our-services-icon">
            <img alt="Our services" />
          </figure>
        
          <h2 className="section-title">Our services</h2>
        </header>

        <div className="entry">
          <p>We create training programs based on the specific problems that our cients need to solve and create a <strong>customized/(customised)</strong> training plan based entirely on scientific evidence. Powerful stories and <strong>humor/(humour)</strong> are our way of helping people acquire new skills, knowledge and <strong>attitudes/(attitude)</strong>. The following are some of our training programs that clients loved the most.</p>

          <div className="clients-loved-these">
            <ol className="love-list">
              <li className="list-item">
                <h3>Workshop on calming your busy mind</h3>
                <p>We use the science of stress, exercise, meditiation and diet to help you clear your mind and be more productive.</p>
              </li>

              <li className="list-item">
                <h3>Workshop on becoming a productivity ninja</h3>
                <p>We use the science of willpower and procrastination to help you become super-productive.</p>
              </li>

              <li className="list-item">
                <h3>Workshop on becoming a master learner</h3>
                <p>We use the science of focused and <strong>diffuse/(diffused)</strong> modes to help you learn anything faster.</p>
              </li>

              <li className="list-item">
                <h3>Workshop on the checklist manifesto</h3>
                <p>We use the power of checklist to train you on the meticulous execution of different processes in the workplace.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="founders">Founders</section>

      <section className="what-we-live-by">What we live by</section>

      <section className="why-choose-us">Why choose us</section>
    </div>
  );
}

export default App;
