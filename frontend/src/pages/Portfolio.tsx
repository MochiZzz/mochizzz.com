import { useState } from 'react';
import './Portfolio.css'; // Import the CSS file

const R2_BASE_URL = 'https://images.mochizzz.com/business%20cards/Processed';

const portfolioPhotos = [
  {
    id: 1,
    title: 'Mountain Landscape',
    description: 'Captured during a sunrise hike in the Rocky Mountains. Shot with Canon EOS R5, 24-70mm f/2.8',
    location: 'Rocky Mountain National Park, Colorado',
    date: 'October 2024',
    camera: 'Canon EOS R5',
    lens: '24-70mm f/2.8L',
    settings: 'f/8, 1/250s, ISO 100',
    thumbnail: `${R2_BASE_URL}/MZR08444_PSMS.jpg`,
    fullImage: `${R2_BASE_URL}/MZR08444_PSMS.jpg`
  },
  {
    id: 2,
    title: 'Street Portrait',
    description: 'A candid moment captured in downtown during golden hour. The natural lighting created perfect contrast.',
    location: 'Downtown Seattle, WA',
    date: 'September 2024',
    camera: 'Sony A7IV',
    lens: '85mm f/1.4',
    settings: 'f/1.8, 1/500s, ISO 200',
    thumbnail: `${R2_BASE_URL}/MZR08476-Pano-2.jpg`,
    fullImage: `${R2_BASE_URL}/MZR08476-Pano-2.jpg`
  },
  {
    id: 3,
    title: 'Architecture Study',
    description: 'Modern building with interesting geometric patterns. I love how the light plays across the facade.',
    location: 'San Francisco, CA',
    date: 'August 2024',
    camera: 'Fujifilm X-T5',
    lens: '16-80mm f/4',
    settings: 'f/11, 1/125s, ISO 160',
    thumbnail: `${R2_BASE_URL}/MZR08444_PSMS.jpg`,
    fullImage: `${R2_BASE_URL}/MZR08444_PSMS.jpg`
  },
  {
    id: 4,
    title: 'Night Photography',
    description: 'Long exposure shot of the city skyline. Spent 2 hours waiting for the perfect moment when the lights came on.',
    location: 'Chicago, IL',
    date: 'November 2024',
    camera: 'Canon EOS R5',
    lens: '16-35mm f/2.8L',
    settings: 'f/8, 30s, ISO 50',
    thumbnail: `${R2_BASE_URL}/MZR08444_PSMS.jpg`,
    fullImage: `${R2_BASE_URL}/MZR08444_PSMS.jpg`
  },
  {
    id: 5,
    title: 'Wildlife',
    description: 'A patient moment waiting for this bird to land. Wildlife photography teaches you so much about timing.',
    location: 'Yellowstone National Park, WY',
    date: 'July 2024',
    camera: 'Nikon D850',
    lens: '200-500mm f/5.6',
    settings: 'f/5.6, 1/1000s, ISO 400',
    thumbnail: `${R2_BASE_URL}/MZR08444_PSMS.jpg`,
    fullImage: `${R2_BASE_URL}/MZR08444_PSMS.jpg`
  },
  {
    id: 6,
    title: 'Abstract Macro',
    description: 'Close-up details of everyday objects can reveal incredible patterns and textures.',
    location: 'Home Studio',
    date: 'December 2024',
    camera: 'Sony A7R V',
    lens: '90mm f/2.8 Macro',
    settings: 'f/8, 1/60s, ISO 100',
    thumbnail: `${R2_BASE_URL}/MZR08444_PSMS.jpg`,
    fullImage: `${R2_BASE_URL}/MZR08444_PSMS.jpg`
  }
];

function Portfolio() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof portfolioPhotos[0] | null>(null);
  const [imageLoading, setImageLoading] = useState(false);

  const handlePhotoClick = (photo: typeof portfolioPhotos[0]) => {
    setImageLoading(true);
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setImageLoading(false);
  };

  return (
    <div className="homepage">
      {/* Photo Gallery Section */}
      <section id="gallery" className="section bg-gray">
        <div className="container">
          {/* Photo Grid */}
          <div className="photo-grid">
            {portfolioPhotos.map((photo) => (
              <div 
                key={photo.id}
                className="photo-card"
                onClick={() => handlePhotoClick(photo)}
              >
                <img 
                  src={photo.thumbnail} 
                  alt={photo.title}
                  className="photo-thumbnail"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="photo-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            
            <div className="modal-image-container">
              {imageLoading && <div className="loading-spinner">Loading...</div>}
              <img 
                src={selectedPhoto.fullImage} 
                alt={selectedPhoto.title}
                className="modal-image"
                onLoad={() => setImageLoading(false)}
              />
            </div>
            
            <div className="modal-info">
              <div className="photo-details">
                <h3>{selectedPhoto.title}</h3>
                <p className="photo-description">{selectedPhoto.description}</p>
                
                <div className="photo-meta">
                  <div className="meta-group">
                    <h4>Location</h4>
                    <p>{selectedPhoto.location}</p>
                  </div>
                  <div className="meta-group">
                    <h4>Date</h4>
                    <p>{selectedPhoto.date}</p>
                  </div>
                  <div className="meta-group">
                    <h4>Camera</h4>
                    <p>{selectedPhoto.camera}</p>
                  </div>
                  <div className="meta-group">
                    <h4>Lens</h4>
                    <p>{selectedPhoto.lens}</p>
                  </div>
                  <div className="meta-group">
                    <h4>Settings</h4>
                    <p>{selectedPhoto.settings}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 MochiZzz. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;