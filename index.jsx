import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"

function App() {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
      <Banner className="banner" variant="success" line="single-line">
        <p>Your download was successful!</p>
      </Banner>
      <Banner className="banner" variant="warning">
        <p>Your download has potential issues</p>
      </Banner>
      <Banner className="banner" variant="danger">
        <p>Your download failed. Please try again</p>
      </Banner>
      <Banner className="banner" variant="neutral">
        <p>Click the button below to download</p>
      </Banner>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
