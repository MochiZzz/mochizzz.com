import MZR08459 from '../../public/MZR08476-Pano-2.jpg'

function Home() {
  return (
    <div className="homepage">
      {/* Header Section */}
      <section className="hero" style={{backgroundImage: `url(${MZR08459})`}}>
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">Morgan</span>.
          </h1>
          <p className="hero-subtitle">
            Developer, Photographer
          </p>
          <p className="hero-description">
            
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="https://instagram.com/_mochizzz" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Connect With Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm passionate about creating digital experiences and solving problems through code. <br></br>
            I also enjoy throwing my money away at photography.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 MochiZzz. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
