import React, { useState } from 'react';

function UrlForm(props) {
  const [longUrl, setLongUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [validity, setValidity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = { longUrl };
    if (customCode) data.customCode = customCode;
    if (validity) data.validity = parseInt(validity);
    props.onShorten(data);

    // clear
    setLongUrl('');
    setCustomCode('');
    setValidity('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Shorten a URL</h2>
      <input
        type="text"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Custom shortcode (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />
      <input
        type="number"
        placeholder="Validity (minutes)"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
}

export default UrlForm;

