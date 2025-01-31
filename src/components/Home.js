import iconImage from "../image/shop.png";
import "../style/home.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [chooseChoice, setChooseChoise] = useState(true);

  return (
    <div>
      <div className="form">
        <div className="chooseform">
          <p
            className={chooseChoice ? "active" : "inactive"}
            onClick={() => {
              setChooseChoise(true);
            }}
          >
            Sell items
          </p>
          <p
            className={chooseChoice ? "inactive" : "active"}
            onClick={() => {
              setChooseChoise(false);
            }}
          >
            Assist you
          </p>
        </div>
        {!chooseChoice ? <DropPhoto /> : <SellProduct />}
      </div>
    </div>
  );
}

function SellProduct() {
  return (
    <div>
      {/* add name instead of undefine */}
      <p className="header1">Nice to meet you, </p>
      <img 
        src={iconImage} 
        alt="image1" 
        style={{ width: "20rem", height: "70%" }} 
      />

      <p className="header2 header3">Wish to Sell Good product more.</p>
      <br />
      <div className="footer">
        <Link to="/auth" className="link">
          Logout
        </Link>
        <p className="message">
          Facing Problems? Call us at <span>+918960106544</span>
        </p>
      </div>
    </div>
  );
}

function DropPhoto() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleDrop = (event) => {
    event.preventDefault();
    setError("");
    const files = event.dataTransfer.files;

    if (files && files[0]) {
      const file = files[0];
      if (!file.type.startsWith("image/")) {
        setError("Please drop an image file.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
  };

  return (
    <div className="aifeature">
      <p className="feature">
      Once you upload an image, our <span>AI-powered</span> system analyzes it and generates an image featuring the dress you've uploaded.
      </p>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        style={{
          border: "2px dashed #ccc",
          borderRadius: "10px",
          width: "300px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "20px auto",
          cursor: "pointer",
          backgroundColor: "#f9f9f9",
        }}
      >
        {image ? (
          <img
            src={image}
            alt="Uploaded Preview"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <p style={{ color: "#3ab34a" }}>
            Drag & Drop a photo here <br /> or click to upload
          </p>
        )}
        {error && (
          <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
        )}
      </div>
    </div>
  );
}

export default Home;
