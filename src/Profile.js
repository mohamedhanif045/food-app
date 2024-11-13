import React, { useState, useEffect } from 'react';

function ProfilePage() {
  // Sample user data. In a real app, this data might be fetched from an API.
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
  });

  // Fetching user data (mocking with useEffect for now)
  useEffect(() => {
    // Simulate an API call to fetch user data
    setTimeout(() => {
      setUser({
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        profilePicture: 'https://via.placeholder.com/150/ff7f7f',
      });
    }, 2000);
  }, []);

  return (
    <div style={styles.container}>
      <h2>Your Profile</h2>
      
      <div style={styles.profileInfo}>
        <img
          src={user.profilePicture}
          alt="Profile"
          style={styles.profileImage}
        />
        <div style={styles.profileDetails}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
      
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Edit Profile</button>
        <button style={styles.button}>Logout</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: 'auto',
    textAlign: 'center',
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  profileDetails: {
    textAlign: 'left',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProfilePage;
