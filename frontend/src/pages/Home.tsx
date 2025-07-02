// import { Link } from 'react-router-dom'; 
import MZR08459 from '../../public/MZR08476-Pano-2.jpg'

function Home() {
  return (
    <div className="homepage">
      {/* Header Section */}

      {/* Hero Section */}
      <section className="hero" style={{backgroundImage: `url(${MZR08459})`}}>
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">Morgan</span>
          </h1>
          <p className="hero-subtitle">
            Developer, Photographer
          </p>
          <p className="hero-description">
            
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="https://linktr.ee/mochizzz" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
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
            I'm passionate about creating digital experiences and solving problems through code. 
            Currently exploring modern web technologies and building projects that matter.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-gray">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project One</h3>
              <p>Description of your first project. What technologies did you use? What problem does it solve?</p>
              <a href="#" className="project-link">View Project →</a>
            </div>
            <div className="project-card">
              <h3>Project Two</h3>
              <p>Description of your second project. Highlight the key features and your role in building it.</p>
              <a href="#" className="project-link">View Project →</a>
            </div>
            <div className="project-card">
              <h3>Project Three</h3>
              <p>Description of your third project. What did you learn? What makes it special?</p>
              <a href="#" className="project-link">View Project →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>
            Interested in working together or just want to say hello? 
            I'd love to hear from you.
          </p>
          <a href="https://www.instagram.com/_mochizzz/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Connect on Linktree
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Mochi. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
