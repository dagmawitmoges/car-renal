// Navbar.js
import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundImage: 'url("https://images.unsplash.com/photo-1616363088386-31c4a8414858?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcmtpbmd8ZW58MHx8MHx8fDA%3D")', // Replace with your image URL
    backgroundSize: 'cover',
    color: 'white', // Text color
    height: '20vh', // Set height to 100% of viewport height
    margin: '0', // Remove margin
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '40px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const signinButtonStyle = {
    backgroundColor: '#4caf50', 
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={navbarStyle}>
      <div style={logoStyle}>YourLogo</div>
      <div style={navLinksStyle}>
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="/cars" style={linkStyle}>
          Cars
        </a>
        <a href="/booking" style={linkStyle}>
          Booking
        </a>
        <a href="/pages" style={linkStyle}>
          Pages
        </a>
        <a href="/news" style={linkStyle}>
          News
        </a>
        <a href="/elements" style={linkStyle}>
          Elements
        </a>
      </div>
      <div style={{ ...signinButtonStyle, ...{ marginLeft: '20px' } }}>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
