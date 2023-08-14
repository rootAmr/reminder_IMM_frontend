import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormSuratPerizinan= () => {
    const [nama_perizinan, setNama] = useState("");
    const [pic, setPic] = useState("");
    const [departemen, setDepartemen] = useState("");
    const [tanggalExp, setTanggalExp] = useState("");
    const [reminder, setReminder] = useState("");
    const [uploadFile, setuploadFile] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const savePerizinan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/suratizin", {
        nama_perizinan: nama_perizinan,
        pic: pic,
        departemen: departemen,
        tanggalExp: tanggalExp,
        reminder: reminder,
        uploadFile: uploadFile,
      });
      navigate("/suratperizinan");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const handleFileSelect = (e) => {
    setuploadFile(e.target.files[0]);
  };

  return (
    <div>
      <h1 className="title">Surat Perizinan</h1>
      <h2 className="subtitle">Tambah Surat Perizinan</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={savePerizinan}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nama_perizinan}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Nama"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">PIC</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={pic}
                    onChange={(e) => setPic(e.target.value)}
                    placeholder="PIC"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Departemen</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={departemen}
                    onChange={(e) => setDepartemen(e.target.value)}
                    placeholder="Departemen"
                  />
                </div>
              </div>
              <div className="field">
        <label className="label">Tanggal Exp</label>
        <div className="control">
          <input
            type="date" // Gunakan tipe "date" untuk input tanggal
            className="input"
            value={tanggalExp}
            onChange={(e) => setTanggalExp(e.target.value)}
          />
        </div>
        </div>
              <div className="field">
        <label className="label">Tanggal Reminder</label>
        <div className="control">
          <input
            type="date" // Gunakan tipe "date" untuk input tanggal
            className="input"
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
          />
        </div>
              </div>
              <div className="field">
                <label className="label">Upload File</label>
                <div className="control">
                  <div className="file is-leaft is-info">
                    <label className="file-label">
                      <input
                        className="file-input"
                        type="file"
                        name="resume"
                        onChange={handleFileSelect}
                      />
                      <span className="file-cta">
                        <span className="file-label">Upload File</span>
                      </span>
                      <span className="file-name">
                        {uploadFile ? uploadFile.name : "No file selected"}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSuratPerizinan;
