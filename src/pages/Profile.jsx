import React from 'react';
import { useAuth } from '../pages/AuthContext'; // Use the AuthContext to access user info and logout
import profilePic from '../assets/profilePic.jpg'; // Example profile picture

const Profile = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Redirect to login page or home after logout
    window.location.href = '/login';
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <img src={profilePic} alt="Profile" style={styles.profileImage} />
        <h2 style={styles.username}>John Doe</h2>
        <p style={styles.email}>johndoe@example.com</p>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  profileImage: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  username: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  email: {
    fontSize: '16px',
    color: '#777',
    marginBottom: '20px',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Profile;
