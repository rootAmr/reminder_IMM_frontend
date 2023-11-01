import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
//import { IoArrowBackSharp } from "react-icons/io5";
import { useParams, Link} from "react-router-dom";
import backgroundImage from "../Hompegelogin.png";
import API_CONFIG from "../config";
const API_URL = API_CONFIG.PORT;

const FormDetailPerizinan = () => {
  const [suratIzin, setSuratIzin] = useState({});
  const { id } = useParams();

  const getSuratIzin = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/suratizin/${id}`);
      setSuratIzin(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [id]);

  useEffect(() => {
    getSuratIzin();
  }, [id, getSuratIzin]);

  function isDatePast(dateString) {
    const currentDate = new Date();
    const reminderDate = new Date(dateString);
    return reminderDate < currentDate;
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const containerStyle = {
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Adjust the alpha value (0.9 for example)
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  const deleteSuratIzin = async (id) => {
    try {
      await axios.delete(`${API_URL}/suratizin/${id}`);
      window.location.href = "/suratperizinan"; // Update URL after deletion
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  
  return (
    <section className="hero is-fullheight is-fullwidth" style={backgroundStyle}>
    <div style={containerStyle}>
      <div className="title is-4">Report & Payment Obligation</div>
      <div className="subtitle is-5">Detail Report & Payment Obligation</div>
      <form>
        <div className="field">
          <label className="label">Institution</label>
          <div className="control">
            <input className="input" type="text" readOnly value={suratIzin.institution} />
          </div>
        </div>
        <div className="field">
          <label className="label">Periode</label>
          <div className="control">
            <input className="input" type="text" readOnly value={suratIzin.period} />
          </div>
        </div>
        <div className="field">
          <label className="label">Name of Report</label>
          <div className="control">
            <input className="input" type="text" readOnly value={suratIzin.name_of_report} />
          </div>
        </div>
        <div className="field">
          <label className="label">PIC</label>
          <div className="control">
            <input className="input" type="text" readOnly value={suratIzin.pic} />
          </div>
        </div>
        <div className="field">
          <label className="label">Departemen</label>
          <div className="control">
            <input className="input" type="text" readOnly value={suratIzin.departemen} />
          </div>
        </div>
        <div className="field">
          <label className="label">Payment Media</label>
          <div className="control">
            <input className="input" type="text" readOnly value={suratIzin.payment_media} />
          </div>
        </div>
        <div className="field">
          <label className="label">File</label>
          <div className="control">
            <a className="button is-link" href={suratIzin.url} target="_blank" rel="noopener noreferrer">
              View File
            </a>
          </div>
        </div>
        <div className="field">
          <label className="label">Tanggal di buat</label>
          <div className="control">
          <input className="input" type="text" readOnly value={formatDate(suratIzin.tanggal_dibuat)} />
          </div>
        </div>
        <div className="field">
          <label className="label">Tanggal Berakhir</label>
          <div className="control">
            <input className="input" type="text" readOnly value={suratIzin.tanggal_berakhir} />
          </div>
        </div>

        <h2 className="title has-text-centered">Reminder</h2>
        
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" readOnly value={suratIzin.from_email} />
          </div>
        </div>
        <div className="field">
          <label className="label">CC</label>
          <div className="control">
            <input className="input" type="text" readOnly value={suratIzin.cc} />
          </div>
        </div>

{suratIzin.reminder1 || suratIzin.reminder2 || suratIzin.reminder3 || suratIzin.reminder4 || suratIzin.reminder5 || suratIzin.reminder6 || suratIzin.reminder7 || suratIzin.reminder8 || suratIzin.reminder9 || suratIzin.reminder10 || suratIzin.reminde11 || suratIzin.reminder12 ? (
  <table className="table">
  <thead>
    <tr>
      <th>Reminder</th>
      {suratIzin.reminder1 && <th>Reminder1</th>}
      {suratIzin.reminder2 && <th>Reminder2</th>}
      {suratIzin.reminder3 && <th>Reminder3</th>}
      {suratIzin.reminder4 && <th>Reminder4</th>}
      {suratIzin.reminder5 && <th>Reminder5</th>}
      {suratIzin.reminder6 && <th>Reminder6</th>}
      {suratIzin.reminder7 && <th>Reminder7</th>}
      {suratIzin.reminder8 && <th>Reminder8</th>}
      {suratIzin.reminder9 && <th>Reminder9</th>}
      {suratIzin.reminder10 && <th>Reminder10</th>}
      {suratIzin.reminde11 && <th>Reminder11</th>}
      {suratIzin.reminder12 && <th>Reminder12</th>}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tanggal</td>
      {suratIzin.reminder1 && (
        <td style={{ backgroundColor: isDatePast(suratIzin.reminder1) ? 'rgb(147, 245, 130)' : 'white'}}>
          {formatDate(suratIzin.reminder1)}
        </td>
      )}
      {suratIzin.reminder2 && (
        <td style={{ backgroundColor: isDatePast(suratIzin.reminder2) ? 'rgb(147, 245, 130)' : 'white' }}>
          {formatDate(suratIzin.reminder2)}
        </td>
      )}
      {suratIzin.reminder3 && (
        <td style={{ backgroundColor: isDatePast(suratIzin.reminder3) ? 'rgb(147, 245, 130)' : 'white' }}>
          {formatDate(suratIzin.reminder3)}
        </td>
      )}
      {suratIzin.reminder4 && (
        <td style={{ backgroundColor: isDatePast(suratIzin.reminder4) ? 'rgb(147, 245, 130)' : 'white' }}>
          {formatDate(suratIzin.reminder4)}
        </td>
      )}
      {suratIzin.reminder5 && (
        <td style={{ backgroundColor: isDatePast(suratIzin.reminder5) ? 'rgb(147, 245, 130)' : 'white' }}>
          {formatDate(suratIzin.reminder5)}
        </td>
      )}
      {suratIzin.reminder6 && (
        <td style={{ backgroundColor: isDatePast(suratIzin.reminder6) ? 'rgb(147, 245, 130)' : 'white' }}>
          {formatDate(suratIzin.reminder6)}
        </td>
      )}
      {suratIzin.reminder7 && (
        <td style={{ backgroundColor: isDatePast(suratIzin.reminder7) ? 'rgb(147, 245, 130)' : 'white' }}>
          {formatDate(suratIzin.reminder7)}
        </td>
      )}
      {suratIzin.reminder8 && (
        <td style={{ backgroundColor: isDatePast(suratIzin.reminder8) ? 'rgb(147, 245, 130)' : 'white' }}>
          {formatDate(suratIzin.reminder8)}
        </td>
      )}
      {suratIzin.reminder9 && (
        <td style={{ backgroundColor: isDatePast(suratIzin.reminder9) ? 'rgb(147, 245, 130)' : 'white' }}>
          {formatDate(suratIzin.reminder9)}
        </td>
      )}
      {suratIzin.reminder10 && (
        <td style={{ backgroundColor: isDatePast(suratIzin.reminder10) ? 'rgb(147, 245, 130)' : 'white' }}>
          {formatDate(suratIzin.reminder10)}
        </td>
      )}
      {suratIzin.reminde11 && (
        <td style={{ backgroundColor: isDatePast(suratIzin.reminde11) ? 'rgb(147, 245, 130)' : 'white' }}>
          {formatDate(suratIzin.reminde11)}
        </td>
      )}
      {suratIzin.reminder12 && (
        <td style={{ backgroundColor: isDatePast(suratIzin.reminder12) ? 'rgb(147, 245, 130)' : 'white' }}>
          {formatDate(suratIzin.reminder12)}
        </td>
      )}
    </tr>
  </tbody>
</table>
) : null}

<div className="buttons is-flex is-justify-content-space-between mt-3">
    <div className="is-flex">
      <Link
        className="button is-link"
        to={`/paymnetobligation/edit/${suratIzin.uuid}`}
        rel="noopener noreferrer"
      >
        Edit
      </Link>
      <button onClick={() => deleteSuratIzin(id)} className="button is-danger ml-2">
        Delete
      </button>
      </div>
  </div>
      </form>
    </div>
    </section>
  );
};

export default FormDetailPerizinan;
