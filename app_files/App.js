import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = () => {  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);
  
    axios
      .post(UPLOAD_URL, formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };

  return(
    <div className="App">
      <form>
        <input 
          type = "text" 
          value={name}
          onChange={(e) => setName(e.target.value)}/>

        <input 
          type = "file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <button onClick={submitForm}>Submit</button>
      </form>  
    </div>

  );
};

const FileUploader = ({onFileSelect}) => {
  const fileInput = useRef(null)

  const handleFileInput = (e) => {
    const file = e.target.files[0]
    // handle validations
    if (file.size>5120)
      onFileSelectError({error: 'File is too large to process'});
    else onFileSelect(file)
  }

  return (
      <div className="file-uploader">
          <input type="file" onChange={handleFileInput}/>
          <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"/>
      </div>
  );
};