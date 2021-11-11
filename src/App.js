import Header from './components/Header';
import whoWeAreIcon from './assets/images/who-we-are-icon.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />

      <section className="home-hero">
        <blockquote>
          <p>"We use insights from neuroscience, psychology and behavioural economics to help our clients build productive microhabits."</p>
        </blockquote>
      </section>

      <section id="who-we-are" className="who-we-are">
        <header className="section-header">
          <figure className="section-icon who-we-are-icon">
            <img src={whoWeAreIcon} alt="Who we are" />
          </figure>
          
          <h2 className="section-title">Who we are</h2>
        </header>

        <div className="entry">
          <p>We are educators who use science and stories to help people find meaning in the workplace. Our team is on the constant lookout for the world's finest research on productivity, efficiency, stress, self-control, learning and leadership. We curate our research from some of the most remarkable institutions in the world and use those insight to systematically solve problems in the workplace and help organisations and people relate to their work expressively.</p>
        </div>
      </section>

      <section id="our-services" className="our-services">
        <header className="section-header">
          <figure className="section-icon our-services-icon">
            <img alt="Our services" />
          </figure>
        
          <h2 className="section-title">Our services</h2>
        </header>

        <div className="entry">
          <p>We create training programs based on the specific problems that our cients need to solve and create a customized training plan based entirely on scientific evidence. Powerful stories and humor are our way of helping people acquire new skills, knowledge and attitudes. The following are some of our training programs that clients loved the most.</p>
        </div>
      </section>

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
            <p>We use the science of focused and diffuse modes to help you learn anything faster.</p>
          </li>

          <li className="list-item">
            <h3>Workshop on the checklist manifesto</h3>
            <p>We use the power of checklist to train you on the meticulous execution of different processes in the workplace.</p>
          </li>
        </ol>
      </div>

      <section id="founders" className="founders">
        <div className="image-grid">
          <div className="image-wrapper">
            <img src="https://loremflickr.com/1080/1920
" alt="Krishnendu" />
          </div>
          
          <div className="image-wrapper">
          <img src="https://loremflickr.com/1080/1920
" alt="Arun" />
          </div>

          <div className="image-wrapper">
          <img src="https://loremflickr.com/1080/1920
" alt="Kiran" />
          </div>
        </div>

        <header className="section-header">          
          <h2 className="section-title">Founders</h2>
        </header>

        <div className="entry">
          <p>Krishnendu, Arun and Kiran came together to found Habit Theory on the belief that science and stories are two of the most powerful ways to inspire anyone. They have diverse experience in areas ranging from personal coaching to organizational problem solving.</p>
        </div>
      </section>

      <section id="what-we-live-by" className="what-we-live-by">
        <header className="section-header">          
          <h2 className="section-title">What we live by</h2>
        </header>

        <div className="icons-list-wrapper">
          <ul className="icons-list">
            <li className="list-item">
              <img src="https://loremflickr.com/100/100" alt="Curiosity" />
              <strong>Curiosity</strong>
            </li>

            <li className="list-item">
              <img src="https://loremflickr.com/100/100" alt="Learning" />
              <strong>Learning</strong>
            </li>

            <li className="list-item">
              <img src="https://loremflickr.com/100/100" alt="Humour" />
              <strong>Humour</strong>
            </li>

            <li className="list-item">
              <img src="https://loremflickr.com/100/100" alt="Science" />
              <strong>Science</strong>
            </li>

            <li className="list-item">
              <img src="https://loremflickr.com/100/100" alt="Stories" />
              <strong>Stories</strong>
            </li>
          </ul>
        </div>
      </section>

      <section id="why-choose-us" className="why-choose-us">
        <header className="section-header">          
          <h2 className="section-title">Why choose us</h2>
        </header>

        <div className="section-content">
          <div className="icon-wrap">
            <img src="https://loremflickr.com/200/200" alt="Why choose us?" />
          </div>

          <div className="details-wrap">
            <ul>
              <li>
                <h4>Our Mission</h4>
                <p>To use science and stories to help people build productive microhabits in the workplace.</p>
              </li>

              <li>
                <h4>Our Vision</h4>
                <p>A day everyone can find meaning in <strong>the/(their)</strong> workplace.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
