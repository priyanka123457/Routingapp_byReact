
import React from "react";
import { Link } from "react-router-dom"; // Optional: if you're using React Router

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* <div style={styles.logo}>MyApp</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
        <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
        <li style={styles.navItem}><Link to="/services" style={styles.navLink}>Services</Link></li>
        <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact</Link></li>
      </ul> */}
      </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
