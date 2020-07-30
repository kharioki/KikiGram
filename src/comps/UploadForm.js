import React, { useState } from 'react';

export const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // allow only jpeg and png files
  const types = ['image/png', 'image/jpeg'];

  const handleChange = e => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  return (
    <form>
      <input type="file" onChange={handleChange} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};
