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

      <section className="who-we-are">Who we are</section>
      
      <section className="who-we-are">Our services</section>

      <section className="who-we-are">Founders</section>

      <section className="who-we-are">What we live by</section>

      <section className="who-we-are">Why choose us</section>
    </div>
  );
}

export default App;
