import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_CONFIG from "../config";
const API_URL = API_CONFIG.PORT;

const FormSuratPerizinan = () => {
  const [institution, setInstitution] = useState("");
  const [period, setPeriod] = useState("");
  const [name_of_report, setName_of_report] = useState("");
  const [pic, setPic] = useState("");
  const [departemen, setDepartemen] = useState("");
  const [cc, setCc] = useState("");
  const [from_email, setFrom_email] = useState("");
  const [payment_media, setPayment_media] = useState("");
  const [remark, setRemark] = useState("");
  const [tanggal_dibuat, setTanggal_dibuat] = useState("");
  const [tanggal_berakhir, setTanggal_berakhir] = useState("");
  const [reminders, setReminders] = useState([
    { id: 1, value: "" }, // Initial reminder field
  ]);
  const [uploadFile, setUploadFile] = useState(null);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const addReminder = () => {
    if (reminders.length < 12) {
      const newReminderId = reminders.length + 1;
      setReminders([...reminders, { id: newReminderId, value: "" }]);
    }
  };

  const removeReminder = (id) => {
    if (id !== 1) {
      const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
      setReminders(updatedReminders);
    }
  };

  const savePerizinan = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("institution", institution);
      formData.append("period", period);
      formData.append("name_of_report", name_of_report);
      formData.append("pic", pic);
      formData.append("departemen", departemen);
      formData.append("cc", cc);
      formData.append("from_email", from_email);
      formData.append("payment_media", payment_media);
      formData.append("remark", remark);
      formData.append("tanggal_dibuat", tanggal_dibuat);
      formData.append("tanggal_berakhir", tanggal_berakhir);
      formData.append("file", uploadFile);
      reminders.forEach((reminder) => {
        formData.append(`reminder${reminder.id}`, reminder.value);
      });

      const response = await axios.post(
        `${API_URL}/suratizin`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.msg === "Surat Izin Created Successfully") {
        navigate("/paymnetobligation");
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg || "An error occurred.");
      } else {
        setMsg("An error occurred.");
      }
    }
  };
  return (
    <div>
      <h1 className="title">Report & Payment Obligation</h1>
      <h2 className="subtitle">Tambah Report & Payment Obligation</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={savePerizinan}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                  <h2 className="title has-text-centered">Formulir Report & Payment Obligation</h2>
                    </div>
              <div className="field">
                <label className="label">Institution</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="Institution"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Periode</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    placeholder="Periode"
                  />
                </div>
              </div>
              
              <div className="field">
                <label className="label">Name of Report</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name_of_report}
                    onChange={(e) => setName_of_report(e.target.value)}
                    placeholder="Name of Report"
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
                    <div className="select is-fullwidth"> {/* Tambahkan kelas 'is-fullwidth' */}
                      <select value={departemen} onChange={(e) => setDepartemen(e.target.value)}>
                        <option value="">Pilih Departemen</option>
                        <option value="ASSET MANAGEMENT">ASSET MANAGEMENT</option>
                        <option value="COAL HANDLING & PROCESSING">COAL HANDLING & PROCESSING</option>
                        <option value="COMMUNITY DEVELOPMENT">COMMUNITY DEVELOPMENT</option>
                        <option value="ENVIRONMENT">ENVIRONMENT</option>
                        <option value="EXTERNAL AFFAIRS">EXTERNAL AFFAIRS</option>
                        <option value="EXTERNAL AFFAIRS">FINANCE & ACCOUNT</option>
                        <option value="GENERAL AFFAIR">GENERAL AFFAIR</option>
                        <option value="GENERAL SERVICES">GENERAL SERVICES</option>
                        <option value="HUMAN RESOURCES">HUMAN RESOURCES</option>
                        <option value="IMM MANAGEMENT SITE">IMM MANAGEMENT SITE</option>
                        <option value="INFORMATION TECHNOLOGY">INFORMATION TECHNOLOGY</option>
                        <option value="IPCC OPERATION">IPCC OPERATION</option>
                        <option value="LABORATORY">LABORATORY</option>
                        <option value="HSEC">HSEC</option>
                        <option value="MAINTENANCE ENGINEERING">MAINTENANCE ENGINEERING</option>
                        <option value="MEDICAL SERVICES">MEDICAL SERVICES</option>
                        <option value="MINE GEOLOGY">MINE GEOLOGY</option>
                        <option value="MINE OPERATION">MINE OPERATION</option>
                        <option value="MINE MAINTENANCE">MINE MAINTENANCE</option>
                        <option value="MINE PLANNING">MINE PLANNING</option>
                        <option value="MINE SURVEY">MINE SURVEY</option>
                        <option value="PORT">PORT</option>
                        <option value="PORT MAINTENANCE">PORT MAINTENANCE</option>
                        <option value="PORT, UTILITIES & MAINTENANCE">PORT, UTILITIES & MAINTENANCE</option>
                        <option value="PROCUREMENT">PROCUREMENT</option>
                        <option value="PROJECT & CONSTRUCTION">PROJECT & CONSTRUCTION</option>
                        <option value="SAFETY">SAFETY</option>
                        <option value="SECURITY">SECURITY</option>
                        <option value="SYSTEM & PERFORMANCE MANAGEMENT">SYSTEM & PERFORMANCE MANAGEMENT</option>
                        <option value="UTILITIES OPERATION">UTILITIES OPERATION</option>
                      </select>
                    </div>
                  </div>
                </div>

              <div className="field">
                <label className="label">Payment Media</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={payment_media}
                    onChange={(e) => setPayment_media(e.target.value)}
                    placeholder="Payment Media"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Remark</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    placeholder="Remark"
                  />
                </div>
              </div>
 
              <div className="field">
                  <h2 className="title has-text-centered">Reminder</h2>
                    </div>
              <div className="field">
                <label className="label">Tujuan Reminder Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={from_email}
                    onChange={(e) => setFrom_email(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">CC</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={cc}
                    onChange={(e) => setCc(e.target.value)}
                    placeholder="CC"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal Dibuat</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={tanggal_dibuat}
                    onChange={(e) => setTanggal_dibuat(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal Berakhir</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={tanggal_berakhir}
                    onChange={(e) => setTanggal_berakhir(e.target.value)}
                  />
                </div>
              </div>

              {/* Render reminder fields */}
              {reminders.map((reminder) => (
        <div className="field" key={reminder.id}>
          <label className="label">Reminder {reminder.id}</label>
          <div className="control">
            <input
              type="date"
              className="input"
              value={reminder.value}
              onChange={(e) => {
                const updatedReminders = reminders.map((rem) =>
                  rem.id === reminder.id ? { ...rem, value: e.target.value } : rem
                );
                setReminders(updatedReminders);
              }}
            />
          </div>
          {reminder.id !== 1 && (
            <div className="control">
              <button
                type="button"
                className="button is-danger is-small"
                onClick={() => removeReminder(reminder.id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      ))}
      {reminders.length < 12 && (
        <div className="field is-grouped is-grouped-right">
          <button type="button" className="button is-info" onClick={addReminder}>
            Add Reminder
          </button>
        </div>
      )}
              <div className="field">
                <label className="label">File</label>
                <div className="file is-info has-name">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      onChange={(e) => setUploadFile(e.target.files[0])}
                    />
                    <span className="file-cta">
                      <span>
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">Choose a file…</span>
                    </span>
                    {uploadFile && (
                      <span className="file-name">{uploadFile.name}</span>
                    )}
                  </label>
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
