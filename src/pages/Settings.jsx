import React, { useState, useEffect } from 'react';
import '../styles/pages/settings.scss'; // Importing SCSS styles

const Settings = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || '');

  // Handle API key change
  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  // Handle Save button click
  const handleSave = () => {
    if (apiKey) {
      localStorage.setItem('apiKey', apiKey);
      alert("API Key saved successfully!");
    } else {
      alert("Please enter a valid API Key.");
    }
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>

      {/* API Key Input */}
      <div className="setting-item">
        <label htmlFor="api-key">API Key</label>
        <input
          type="text"
          id="api-key"
          value={apiKey}
          onChange={handleApiKeyChange}
          placeholder="Enter your Alpha Vantage API Key"
        />
      </div>

      {/* Save Button */}
      <div className="setting-item">
        <button onClick={handleSave}>Save API Key</button>
      </div>
    </div>
  );
};

export default Settings;


