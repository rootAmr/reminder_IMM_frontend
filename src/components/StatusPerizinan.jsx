import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StatusPerizinan = () => {
  const [suratperizinan, setSuratPerizinan] = useState([]);

  useEffect(() => {
    getSuratPerizinan();
  }, []);

  const getSuratPerizinan = async () => {
    const response = await axios.get("http://localhost:5000/suratperizinan");
    setSuratPerizinan(response.data);
  };

  const deleteSuratPerizinan = async (suratperizinanId) => {
    await axios.delete(`http://localhost:5000/suratperizinan/${suratperizinanId}`);
    getSuratPerizinan();
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
            <th>Surat Perizinan</th>
            <th>NIK</th>
            <th>Jeniskelamin</th>
            <th>Agama</th>
            <th>Pekerjaan</th>
            <th>Alamat</th>
            <th>Tujuan Perizinan</th>
            <th>Tempat</th>
            <th>Waktu</th>
            <th>Status</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suratperizinan.map((suratperizinan, index) => (
            <tr key={suratperizinan.uuid}>
              <td>{index + 1}</td>
              <td>{suratperizinan.nama}</td>
              <td>{suratperizinan.nik}</td>
              <td>{suratperizinan.jeniskelamin}</td>
              <td>{suratperizinan.agama}</td>
              <td>{suratperizinan.pekerjaan}</td>
              <td>{suratperizinan.alamat}</td>
              <td>{suratperizinan.tujuanperizinan}</td>
              <td>{suratperizinan.tempat}</td>
              <td>{suratperizinan.waktu}</td>
              <td>{suratperizinan.suratperizinanstatus}</td>
              <td>{suratperizinan.user.nama}</td>
              <td>
                <Link
                  to={`/suratperizinan/edit/${suratperizinan.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteSuratPerizinan(suratperizinan.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
                <Link
                  to={`/suratperizinan/editstatus/${suratperizinan.uuid}`}
                  className="button is-small mb-2"
                >
                  Status
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatusPerizinan;
