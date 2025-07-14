import React, { useEffect, useState } from 'react';
import UrlForm from './components/urlForm';
import UrlList from './components/urlList';
import './App.css';

function App() {
  const [urls, setUrls] = useState([]);

  function fetchUrls() {
    fetch('http://localhost:5000/api/urls')
      .then(res => res.json())
      .then(data => {
        const updated = data.map(item => ({
          ...item,
          shortUrl: `http://localhost:5000/${item.code}`
        }));
        setUrls(updated);
      });
  }

  function handleShorten(data) {
    fetch('http://localhost:5000/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => fetchUrls());
  }

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <UrlForm onShorten={handleShorten} />
      <UrlList urls={urls} />
    </div>
  );
}

export default App;
