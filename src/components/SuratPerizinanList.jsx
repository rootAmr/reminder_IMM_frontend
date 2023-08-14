import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SuratIzinList = () => {
  const [suratizin, setSuratIzin] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    getSuratIzin();
  }, []);

  const getSuratIzin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/suratizin");
      setSuratIzin(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (!selectedFile) {
      console.log("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData);
      console.log("File uploaded successfully:", response.data.filePath);
      // Refresh the list of suratizin after successful upload
      getSuratIzin();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h1 className="title">Surat Perizinan</h1>
      <h2 className="subtitle">Surat Perizinan</h2>
      <Link to="/suratperizinan/add" className="button is-primary mb-2">
        Tambah Surat Perizinan
      </Link>

      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>PIC</th>
            <th>Departemen</th>
            <th>Tanggal Expaired</th>
            <th>Reminder</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {suratizin.map((suratizin, index) => (
            <tr key={suratizin.uuid}>
              <td>{index + 1}</td>
              <td>{suratizin.nama_perizinan}</td>
              <td>{suratizin.pic}</td>
              <td>{suratizin.departemen}</td>
              <td>{suratizin.tanggalExp}</td>
              <td>{suratizin.reminder}</td>
              <td>
                {suratizin.uploadFile && (
                  <div>
                    <a href={`http://localhost:5000/${suratizin.uploadFile}`} target="_blank" rel="noopener noreferrer">
                      Lihat File
                    </a>
                    <br />
                    <input type="file" onChange={handleFileChange} />
                    <button onClick={uploadFile}>Unggah File</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuratIzinList;
