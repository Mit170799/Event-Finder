import React from 'react';

// Dummy Event Data
const events = [
  {
    id: 1,
    title: "Bridging Cultures Through Art and Music",
    image: "art_music_event.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    title: "Empowering Communities for Global Change Impact",
    image: "community_event.jpg",
  },
  {
    id: 3,
    title: "Sustainable Living: Solutions for a Better Tomorrow",
    image: "sustainability_event.jpg",
  },
];

const EventFinderPage = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src="eventfinder_logo.png" alt="Logo" style={styles.logo} />
          <h1>eventfinder</h1>
        </div>

        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search Events..."
            style={styles.searchInput}
          />
          <button style={styles.searchButton}>
            <i className="fa fa-search"></i>
          </button>
        </div>

        <nav style={styles.navLinks}>
          <a href="" style={styles.navLink}>Purchased Tickets</a>
          <a href="" style={styles.navLink}>Login</a>
          <a href="" style={styles.navLink}>Sign Up</a>
        </nav>
      </header>

      {/* Main Banner */}
      <div style={styles.mainBanner}>
        <img
          src="main_banner_event.jpg" // Replace with actual path
          alt="Main Event"
          style={styles.bannerImage}
        />
      </div>

      {/* Events Section */}
      <section style={styles.eventsSection}>
        <h2 style={styles.sectionTitle}>Available Events!</h2>

        <div style={styles.filterContainer}>
          <label htmlFor="categoryFilter">Select Category</label>
          <select id="categoryFilter" style={styles.filterDropdown}>
            <option value="all">All Categories</option>
            <option value="music">Music</option>
            <option value="community">Community</option>
            <option value="sustainability">Sustainability</option>
          </select>
        </div>

        <div style={styles.eventsGrid}>
          {events.map((event) => (
            <div key={event.id} style={styles.eventCard}>
              <img
                src={event.image} // Replace with actual image paths
                alt={event.title}
                style={styles.eventImage}
              />
              <p>{event.title}</p>
              <div style={styles.eventActions}>
                <i className="fa fa-heart" title="Like"></i>
                <i className="fa fa-share" title="Share"></i>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Copyright, all rights reserved 2024</p>
        <div style={styles.footerLinks}>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
          <a href="">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '50px',
    marginRight: '10px',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '10px',
  },
  searchButton: {
    padding: '8px 10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
  mainBanner: {
    marginTop: '20px',
    textAlign: 'center',
  },
  bannerImage: {
    width: '80%',
    borderRadius: '10px',
  },
  eventsSection: {
    padding: '20px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '24px',
    color: '#A52A2A',
  },
  filterContainer: {
    margin: '20px 0',
    textAlign: 'right',
  },
  filterDropdown: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  eventsGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '20px',
    flexWrap: 'wrap',
  },
  eventCard: {
    width: '250px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
  },
  eventImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  eventActions: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px 0',
  },
  footer: {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderTop: '1px solid #ccc',
    textAlign: 'center',
  },
  footerLinks: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
};

export default EventFinderPage;
