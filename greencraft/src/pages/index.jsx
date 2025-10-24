import React from 'react';
import Contact from './contact.jsx';

function Landing() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap"
        rel="stylesheet"
      />
      <div style={{ position: "relative", textAlign: "center" }}>
        <img src="src/assets/20250913_095514.jpg" alt="Landscape" style={{ width: "100%" }} />
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -200%)",
              color: "green",
              fontWeight: "bold",
              fontSize: "50px",
            backgroundColor: "#bbf7d0",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.5)"
            }}
          >
            KMM Property Maintenance
          </h1>
        <p style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "85%",
            transform: "translate(-50%, -20%)",
            color: "green",
            fontSize: "30px",
            backgroundColor: "#bbf7d0",
            borderRadius: "10px",
            padding: "10px",
              boxShadow: "5px 5px 10px 2px rgba(0, 0, 0, 0.5)"
          }}
        >Your lawn. Our passion. Every detail counts.
          At KMM Property Maintenance, we bring a professional touch to residential and commercial properties across Winnipeg and surrounding towns. We specialize in high quality lawn care that makes your property stand out, along with expert garden and rock bed installations and seasonal cleanups.
          Whether it’s your home or your business, we leave every property looking better than when we arrived — guaranteed.</p>
      </div>
      <Contact/>
    </div>
  );
}

export default Landing;