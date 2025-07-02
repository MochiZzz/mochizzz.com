// import { Link } from 'react-router-dom';
import MZR08459 from '../../public/MZR08476-Pano-2.jpg'

function NotFound() {
  return (
    <div className="homepage">
      {/* Header Section */}

      {/* Hero Section */}
      <section className="hero" style={{backgroundImage: `url(${MZR08459})`}}>
        <div className="hero-content">
          <h1 className="hero-title">
            This <span className="highlight">page</span> does not exist!
          </h1>
          <p className="hero-subtitle">
            Nothing to see here!
          </p>
        </div>
      </section>
    </div>
  );
}

export default NotFound;