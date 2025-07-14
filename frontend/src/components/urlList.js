import React from 'react';

function UrlList({ urls }) {
  return (
    <div>
      <h2>Shortened URLs</h2>
      {urls.length === 0 && <p>No URLs yet.</p>}
      <ul>
        {urls.map((url, index) => (
          <li key={index}>
            <div><strong>Short:</strong> <a href={url.shortUrl} target="_blank" rel="noreferrer">{url.shortUrl}</a></div>
            <div><strong>Original:</strong> {url.longUrl}</div>
            <div><strong>Clicks:</strong> {url.clicks}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UrlList;
