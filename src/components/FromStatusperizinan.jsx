import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import API_CONFIG from "../config";
const API_URL = API_CONFIG.PORT;
const FromStatusperizinan= () => {
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [jeniskelamin, setJeniskelamin] = useState("");
  const [agama, setAgama] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tujuanperizinan, setTujuanperizinan] = useState("");
  const [tempat, setTempat] = useState("");
  const [waktu, setWaktu] = useState("");
  const [suratperizinanstatus, setSuratperizinanStatus] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/suratperizinan/${id}`
        );
        setNama(response.data.nama);
        setNik(response.data.nik);
        setJeniskelamin(response.data.jeniskelamin);
        setAgama(response.data.agama);
        setPekerjaan(response.data.pekerjaan);
        setAlamat(response.data.alamat);
        setTujuanperizinan(response.data.tujuanperizinan);
        setTempat(response.data.tempat);
        setWaktu(response.data.waktu);
        setSuratperizinanStatus(response.data.suratperizinanstatus);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${API_URL}/suratperizinan/status/${id}`, {
        nama: nama,
        nik: nik,
        jeniskelamin: jeniskelamin,
        agama: agama,
        pekerjaan: pekerjaan,
        alamat: alamat,
        tujuanperizinan: tujuanperizinan,
        tempat: tempat,
        suratperizinanstatus:suratperizinanstatus,
        waktu:waktu
      });
      navigate("/suratperizinan");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
    <h1 className="title">Products</h1>
    <h2 className="subtitle">Add New Product</h2>
    <div className="card is-shadowless">
      <div className="card-content">
        <div className="content">
          <form onSubmit={updateProduct}>
            <p className="has-text-centered">{msg}</p>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Product Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Nik</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nik}
                  onChange={(e) => setNik(e.target.value)}
                  placeholder="Product Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Jenis Kelamin</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={jeniskelamin}
                  onChange={(e) => setJeniskelamin(e.target.value)}
                  placeholder="Jenis Kelamin"
                />
              </div>
              </div>
            <div className="field">
              <label className="label">agama</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={agama}
                  onChange={(e) => setAgama(e.target.value)}
                  placeholder="Agama"
                />
              </div>
              </div>
            <div className="field">
              <label className="label">Pekerjaan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={pekerjaan}
                  onChange={(e) => setPekerjaan(e.target.value)}
                  placeholder="Pekerjaan"
                />
              </div>
              </div>
            <div className="field">
              <label className="label">Alamat</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  placeholder="Alamat"
                />
              </div>
              </div>
            <div className="field">
              <label className="label">Bentuk Laporan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={tujuanperizinan}
                  onChange={(e) => setTujuanperizinan(e.target.value)}
                  placeholder="Bentuklaporan"
                />
              </div>
              </div>
            <div className="field">
              <label className="label">Tanggal Laporan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={tempat}
                  onChange={(e) => setTempat(e.target.value)}
                  placeholder="Tanggal Laporan"
                />
              </div>
              </div>
            <div className="field">
              <label className="label">Perihal Pengajuan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={waktu}
                  onChange={(e) => setWaktu(e.target.value)}
                  placeholder="NIK"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Status Perizinan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={suratperizinanstatus}
                  onChange={(e) => setSuratperizinanStatus(e.target.value)}
                  placeholder="Status"
                />
              </div>
            </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
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

export default FromStatusperizinan;
