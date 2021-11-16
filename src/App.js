import { useState } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import { InView } from 'react-intersection-observer';
import { FaChevronUp } from 'react-icons/fa';
import Header from './components/Header';
import whoWeAreIcon from './assets/images/who-we-are-icon.png';
import ourServicesIcon from './assets/images/our-services-icon.png';
import CalmIcon from './assets/images/lovelist-calm-icon.png';
import NinjaIcon from './assets/images/lovelist-ninja-icon.png';
import LearnerIcon from './assets/images/lovelist-learner-icon.png';
import ChecklistIcon from './assets/images/lovelist-checklist-icon.png';
import KrishnenduImage from './assets/images/founder-krishnendu.png';
import ArunImage from './assets/images/founder-arun.png';
import KiranImage from './assets/images/founder-kiran.png';
import CuriosityIcon from './assets/images/curiosity-icon.png';
import LearningIcon from './assets/images/learning-icon.png';
import HumourIcon from './assets/images/humour-icon.png';
import ScienceIcon from './assets/images/science-icon.png';
import StoriesIcon from './assets/images/stories-icon.png';
import WhyChooseUsIcon from './assets/images/why-choose-us-icon.png';
import ScrollWrapper from './components/ScrollWrapper';
import './App.scss';

function App() {
  const [heroInView, setHeroInView] = useState(true);
  const [whoweareHeaderInView, setWhoweareHeaderInView] = useState(false);
  const [whoweareEntryInView, setWhoweareEntryInView] = useState(false);
  const [ourservicesHeaderInView, setOurservicesHeaderInView] = useState(false);
  const [ourservicesEntryInView, setOurservicesEntryInView] = useState(false);
  const [loveitemOneInView, setLoveitemOneInView] = useState(false);
  const [loveitemTwoInView, setLoveitemTwoInView] = useState(false);
  const [loveitemThreeInView, setLoveitemThreeInView] = useState(false);
  const [loveitemFourInView, setLoveitemFourInView] = useState(false);
  const [krishnenduInView, setKrishnenduInView] = useState(false);
  const [arunInView, setArunInView] = useState(false);
  const [kiranInView, setKiranInView] = useState(false);
  const [foundersHeaderInView, setFoundersHeaderInView] = useState(false);
  const [foundersEntryInView, setFoundersEntryInView] = useState(false);
  const [whatwelivebyHeaderInView, setWhatwelivebyHeaderInView] = useState(false);
  const [curiosityInView, setCuriosityInView] = useState(false);
  return (
    <div className="App">
      <Header />

      {!heroInView &&
        <a href="#header" className="scroll-to-top">
          <FaChevronUp />
        </a>
      }

      <ScrollWrapper inView={true}>
        <InView onChange={setHeroInView} />
      </ScrollWrapper>

      <section className="home-hero">
        {heroInView &&
          <blockquote>
            <TypeWriterEffect
                textStyle={{ fontFamily: 'Fjalla One' }}
                startDelay={0}
                cursorColor="white"
                text='"We use insights from neuroscience, psychology and behavioural economics to help our clients build productive microhabits."'
                typeSpeed={70}
            />
          </blockquote>
        }
        {!heroInView && <blockquote><p className="animate__animated animate__fadeIn">"We use insights from neuroscience, psychology and behavioural economics to help our clients build productive microhabits."</p></blockquote>}
      </section>

      <ScrollWrapper inView={true}>
        <section id="who-we-are" className="who-we-are">
          <header className="section-header">
            <InView onChange={setWhoweareHeaderInView}>
              <figure className={`section-icon who-we-are-icon ${whoweareHeaderInView ? 'animate__animated animate__slideInLeft' : ''}`}>
                <img src={whoWeAreIcon} alt="Who we are" />
              </figure>
            
              <h2 className={`section-title ${whoweareHeaderInView ? 'animate__animated animate__slideInLeft' : ''}`}>Who we are</h2>
            </InView>
          </header>

          <div className="entry">
            <InView onChange={setWhoweareEntryInView}>
              <p className={`${whoweareEntryInView ? 'animate__animated animate__bounceInRight' : ''}`}>We are educators who use science and stories to help people find meaning in the workplace. Our team is on the constant lookout for the world's finest research on productivity, efficiency, stress, self-control, learning and leadership. We curate our research from some of the most remarkable institutions in the world and use those insight to systematically solve problems in the workplace and help organisations and people relate to their work expressively.</p>
            </InView>
          </div>
        </section>

        <section id="our-services" className="our-services">
          <header className="section-header">
            <InView onChange={setOurservicesHeaderInView}>
              <figure className={`section-icon our-services-icon ${ourservicesHeaderInView ? 'animate__animated animate__slideInRight' : ''}`}>
                <img src={ourServicesIcon} alt="Our services" />
              </figure>

              <h2 className={`section-title ${ourservicesHeaderInView ? 'animate__animated animate__slideInRight' : ''}`}>Our services</h2>
            </InView>
          </header>

          <div className="entry">
            <InView onChange={setOurservicesEntryInView}>
              <p className={`${ourservicesEntryInView ? 'animate__animated animate__bounceInLeft' : ''}`}>We create training programs based on the specific problems that our clients need to solve and create a customized training plan based entirely on scientific evidence. Powerful stories and humor are our ways of helping people acquire new skills, knowledge and attitudes. The following are some of our training programs that clients loved the most.</p>
            </InView>
          </div>
        </section>
      </ScrollWrapper>

      <div className="clients-loved-these">
        <ul className="love-list">
          <ScrollWrapper inView={true}>
            <InView onChange={setLoveitemOneInView}>
              <li className={`list-item ${loveitemOneInView ? 'animate__animated animate__bounceInRight animate__slow' : ''}`}>
                <div className="icon-wrap">
                  <img src={CalmIcon} alt="" />
                </div>

                <div className="content-wrap">
                  <div className="item-number"><strong>1.</strong></div>

                  <div className="item-details">
                    <h3>Workshop on calming your busy mind</h3>
                    <p>We use the science of stress, exercise, meditiation and diet to help you clear your mind and be more productive.</p>
                  </div>
                </div>
              </li>
            </InView>

            <InView onChange={setLoveitemTwoInView}>
              <li className={`list-item ${loveitemTwoInView ? 'animate__animated animate__bounceInLeft animate__slow' : ''}`}>
                <div className="icon-wrap">
                  <img src={NinjaIcon} alt="" />
                </div>

                <div className="content-wrap">
                  <div className="item-number"><strong>2.</strong></div>

                  <div className="item-details">
                    <h3>Workshop on becoming a productivity ninja</h3>
                    <p>We use the science of willpower and procrastination to help you become super-productive.</p>
                  </div>
                </div>
              </li>
            </InView>

            <InView onChange={setLoveitemThreeInView}>
              <li className={`list-item ${loveitemThreeInView ? 'animate__animated animate__bounceInRight animate__slow' : ''}`}>
                <div className="icon-wrap">
                  <img src={LearnerIcon} alt="" />
                </div>

                <div className="content-wrap">
                  <div className="item-number"><strong>3.</strong></div>

                  <div className="item-details">
                    <h3>Workshop on becoming a master learner</h3>
                    <p>We use the science of focused and diffuse modes to help you learn anything faster.</p>
                  </div>
                </div>
              </li>
            </InView>

            <InView onChange={setLoveitemFourInView}>
              <li className={`list-item ${loveitemFourInView ? 'animate__animated animate__bounceInLeft animate__slow' : ''}`}>
                <div className="icon-wrap">
                  <img src={ChecklistIcon} alt="" />
                </div>

                <div className="content-wrap">
                  <div className="item-number"><strong>4.</strong></div>

                  <div className="item-details">
                    <h3>Workshop on the checklist manifesto</h3>
                    <p>We use the power of checklist to train you on the meticulous execution of different processes in the workplace.</p>
                  </div>
                </div>
              </li>
            </InView>
          </ScrollWrapper>
        </ul>
      </div>

      <section id="founders" className="founders">
        <ScrollWrapper inView={true}>
          <div className="image-grid">
            <div className="image-wrapper">
              <InView onChange={setKrishnenduInView}>
                <img className={`${krishnenduInView ? 'animate__animated animate__fadeInLeft' : ''}`} src={KrishnenduImage} alt="Krishnendu" />
              </InView>
            </div>

            <div className="image-wrapper">
              <InView onChange={setArunInView}>
                <img className={`${arunInView ? 'animate__animated animate__fadeInUp' : ''}`} src={ArunImage} alt="Arun" />
              </InView>
            </div>

            <div className="image-wrapper">
              <InView onChange={setKiranInView}>
                <img className={`${kiranInView ? 'animate__animated animate__fadeInRight' : ''}`} src={KiranImage} alt="Kiran" />
              </InView>
            </div>
          </div>

          <header className="section-header">
            <InView onChange={setFoundersHeaderInView}>
              <h2 className={`section-title ${foundersHeaderInView ? 'animate__animated animate__bounceInLeft' : ''}`}>Founders</h2>
            </InView>
          </header>

          <div className="entry">
            <InView onChange={setFoundersEntryInView}>
              <p className={`section-title ${foundersEntryInView ? 'animate__animated animate__fadeIn' : ''}`}>Krishnendu, Arun and Kiran came together to found Habit Theory on the belief that science and stories are two of the most powerful ways to inspire anyone. They have diverse experience in areas ranging from personal coaching to organizational problem solving.</p>
            </InView>
          </div>
        </ScrollWrapper>
      </section>

      <section id="what-we-live-by" className="what-we-live-by">
        <ScrollWrapper inView={true}>
          <header className="section-header">
            <InView onChange={setWhatwelivebyHeaderInView}>
              <h2 className="section-title">
                <div className={`${whatwelivebyHeaderInView ? 'animate__animated animate__bounceInRight' : ''}`}>What we live by</div></h2>
            </InView>
          </header>

          <div className="icons-list-wrapper">
            <ul className="icons-list">
              <li className="list-item">
                <InView onChange={setCuriosityInView}>
                  <img className={`${curiosityInView ? 'animate__animated animate__flipInY animate__slow' : ''}`} src={CuriosityIcon} alt="Curiosity" />
                </InView>

                <strong>Curiosity</strong>
              </li>

              <li className="list-item">
                <InView onChange={setCuriosityInView}>
                  <img className={`${curiosityInView ? 'animate__animated animate__flipInY animate__slow' : ''}`} src={LearningIcon} alt="Learning" />
                </InView>

                <strong>Learning</strong>
              </li>

              <li className="list-item">
                <InView onChange={setCuriosityInView}>
                  <img className={`${curiosityInView ? 'animate__animated animate__flipInY animate__slow' : ''}`} src={HumourIcon} alt="Humor" />
                </InView>

                <strong>Humor</strong>
              </li>

              <li className="list-item">
                <InView onChange={setCuriosityInView}>
                  <img className={`${curiosityInView ? 'animate__animated animate__flipInY animate__slow' : ''}`} src={ScienceIcon} alt="Science" />
                </InView>

                <strong>Science</strong>
              </li>

              <li className="list-item">
                <InView onChange={setCuriosityInView}>
                  <img className={`${curiosityInView ? 'animate__animated animate__flipInY animate__slow' : ''}`} src={StoriesIcon} alt="Stories" />
                </InView>

                <strong>Stories</strong>
              </li>
            </ul>
          </div>
        </ScrollWrapper>
      </section>

      <section id="why-choose-us" className="why-choose-us">
        <header className="section-header">          
          <h2 className="section-title">Why choose us</h2>
        </header>

        <div className="section-content">
          <div className="icon-wrap">
            <img src={WhyChooseUsIcon} alt="Why choose us?" />
          </div>

          <div className="details-wrap">
            <ul>
              <li>
                <h4>Our Mission</h4>
                <p>To use science and stories to help people build productive microhabits in the workplace.</p>
              </li>

              <li>
                <h4>Our Vision</h4>
                <p>A day everyone can find meaning in the workplace.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="app-footer">
        <div className="contact-details">
          <address>
            <h3 className="company-name">Habit Theory Pvt Ltd</h3>

            <p>First Floor, Anna Maria Complex 62, 5383 A<br />
            PT Usha Road, Kochi, Kerala, 682011</p>

            <span className="email">director@habittheory.in</span>

            <span className="phone">Kiran Ramachandran: +91 9995918705</span>
          </address>
        </div>

        <header className="section-header">
          <h2 className="section-title">Contact Us</h2>
        </header>
      </footer>
    </div>
  );
}

export default App;
