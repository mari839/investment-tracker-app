import React, { useState } from 'react';
import '../styles/pages/settings.scss'; 

const Settings = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || '');

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

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

      <div className="setting-item">
        <button onClick={handleSave}>Save API Key</button>
      </div>
    </div>
  );
};

export default Settings;


