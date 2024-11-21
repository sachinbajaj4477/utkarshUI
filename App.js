import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Logo */}
        <div className="logo-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_80jc7CxPtZnDFTI5qwRHu8T0nU04NlTKdw&s"
            alt="Ask UI Logo"
            className="logo"
          />
          <h2 className="sidebar-title">Ask UI</h2>
        </div>
        {/* Modes */}
        <div className="modes">
          <p className="mode-header">Modes</p>
          <ul>
            <li>General mode</li>
            <li>Document mode</li>
            <li className="active">Knowledge Graph mode</li>
          </ul>
        </div>
        {/* Additional Options */}
        <div className="additional-settings">
          <p>Settings</p>
          <p>Guide</p>
          <p>Sessions</p>
        </div>
        <button className="switch-btn">Switch to current version</button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>Answer questions and generate text</h1>
          <p>based on your company data</p>
        </header>
        <div className="actions">
          <button className="action-btn">Mode Guide</button>
          <button className="action-btn">Mode Settings</button>
        </div>
      </main>

      {/* Login Profile */}
      <div className="navbar">
        <div className="profile-btn">
          <img src="https://via.placeholder.com/40" alt="Profile" />
          <p>User</p>
        </div>
      </div>

      {/* Prompt Bar */}
      <div className="prompt-bar">
        <input type="text" placeholder="Ask something here..." />
        <button className="icon-btn">🎤</button>
        <button className="icon-btn">📁</button>
        <button>Send</button>
      </div>
    </div>
  );
}

export default App;
