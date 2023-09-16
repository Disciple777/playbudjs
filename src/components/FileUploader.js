import React, { useState } from "react";

function FileUploader({ onUpload }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleUpload = () => {
    // Handle file uploads using the FileReader API
    const uploadedFiles = selectedFiles.map((file) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileData = event.target.result;
        onUpload(fileData, file.name);
      };

      reader.readAsDataURL(file); // Read file as a data URL
      return file.name;
    });

    setSelectedFiles([]);
  };

  return (
    <div className="file-uploader">
      <input
        type="file"
        accept="audio/*"
        multiple
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUploader;
