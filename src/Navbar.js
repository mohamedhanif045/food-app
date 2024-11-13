import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Change based on actual auth state
  
  const handleLogout = () => {
    // Logic to handle logout
    setIsAuthenticated(false);
  };

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Restaurant App</h1>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/cart" style={styles.link}>Cart</Link>
        <Link to="/order-tracking" style={styles.link}>Order Tracking</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>

        {/* Conditionally render Login/Logout based on auth status */}
        {!isAuthenticated ? (
          <Link to="/login" style={styles.link}>Login</Link>
        ) : (
          <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
        )}

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search food or restaurants..."
          style={styles.searchBar}
        />

        {/* Notifications (Example icon, could be a dropdown or button) */}
        <Link to="/notifications" style={styles.link}>
          <span style={styles.notificationIcon}>🔔</span>
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    marginLeft: '1rem',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: '#fff',
    margin: '0 1rem',
    textDecoration: 'none',
    fontSize: '16px',
  },
  searchBar: {
    padding: '0.5rem',
    marginLeft: '1rem',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
    marginLeft: '1rem',
  },
  notificationIcon: {
    fontSize: '20px',
    marginLeft: '1rem',
  }
};

export default Navbar;
