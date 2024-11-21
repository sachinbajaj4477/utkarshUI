import React from "react";

function MainContent() {
  return (
    <main className="main-content">
      <div className="header">
        <h1>Answer questions and generate text</h1>
        <p>based on your company data</p>
      </div>
      <div className="actions">
        <button className="button">Mode Guide</button>
        <button className="button">Mode Settings</button>
      </div>
      <div className="graph-selection">
        <h2>Select a graph to get started</h2>
        <div className="graph-card">
          <div className="graph-icon"></div>
          <p className="graph-title">Case studies</p>
          <p className="graph-files">13 files</p>
        </div>
      </div>
      <footer className="footer">
        <input type="text" placeholder="What do you need?" className="input" />
        <div className="icons">
          <span role="img" aria-label="folder">
            📁
          </span>
          <span role="img" aria-label="search">
            🔍
          </span>
        </div>
      </footer>
    </main>
  );
}

export default MainContent;
