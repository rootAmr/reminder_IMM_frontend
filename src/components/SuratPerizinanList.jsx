import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoEye, IoTrashOutline, IoBrushSharp } from "react-icons/io5";

import API_CONFIG from "../config";
import backgroundImage from "../Hompegelogin.png";
const API_URL = API_CONFIG.PORT;
const SuratIzinList = () => {
  const [suratIzin, setSuratIzin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartemen, setSelectedDepartemen] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    getSuratIzin();
  }, []);

  const filteredSuratIzin = suratIzin.filter((item) =>
  item.name_of_report.toLowerCase().includes(searchQuery.toLowerCase()) &&
  (selectedDepartemen === "" || item.departemen === selectedDepartemen)
);
  

  const getSuratIzin = async () => {
    try {
      const response = await axios.get(`${API_URL}/suratizin`);
      const sortedSuratIzin = response.data.sort(
        (a, b) => new Date(b.tanggal_dibuat) - new Date(a.tanggal_dibuat)
      );
      setSuratIzin(sortedSuratIzin);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const containerStyle = {
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust the alpha value (0.9 for example)
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;


  const currentItems = filteredSuratIzin.slice(indexOfFirstItem, indexOfLastItem);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getStatus = (url) => {
    return url ? "Sudah Upload File" : "Belum Upload File";
  };


  const deleteSuratIzin = async (uuid) => {
    try {
      await axios.delete(`${API_URL}/suratizin/${uuid}`);
      setSuratIzin(prevSuratIzin => prevSuratIzin.filter(item => item.uuid !== uuid));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const totalPages = Math.ceil(filteredSuratIzin.length / itemsPerPage);

  return (
    <section className="hero is-fullheight is-fullwidth" style={backgroundStyle}>
      <div style={containerStyle}>
    <div>
      <h1 className="title">Report & Payment Obligation</h1>
      <h2 className="subtitle">List Report & Payment Obligation</h2>
      <Link to="/paymnetobligation/add" className="button is-primary mb-2">
        Tambah Report & Payment Obligation
      </Link>
         <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedDepartemen(""); // Reset the selected department
            }}
            className="input mb-2"
          />
          <select
            value={selectedDepartemen}
            onChange={(e) => setSelectedDepartemen(e.target.value)}
            className="input mb-2"
          >
            <option value="">Pilih Departemen</option>
            <option value="ASSET MANAGEMENT">ASSET MANAGEMENT</option>
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
            <div className="mt-3" style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`button is-small ml-2 ${currentPage === index + 1 ? 'is-primary' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        {indexOfLastItem < filteredSuratIzin.length && (
          <button onClick={handleNextPage} className="button is-small">
            Next
          </button>
        )}
      </div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name of Report</th>
            <th>Institution</th>
            <th>Period</th>
            <th>PIC</th>
            <th>Remark</th>
            <th>Departemen</th>
            <th>Tanggal Berakhir</th>
            <th>File</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={item.uuid}>
              <td>{index + 1 + indexOfFirstItem}</td>
              <td>{item.name_of_report}</td>
              <td>{item.institution}</td>
              <td>{item.period}</td>
              <td>{item.pic}</td>
              <td>{item.remark}</td>
              <td>{item.departemen}</td>
              <td>{formatDate(item.tanggal_berakhir)}</td>
              <td>
                  {item.url ? (
                   <a href={item.url} target="_blank" rel="noopener noreferrer">
                      File
                  </a>
                    ) : (
                    ""
                    )}
                   </td>
                   <td style={{ color: getStatus(item.url) === "Sudah Upload File" ? "green" : "red" }}>
        {getStatus(item.url)}
      </td>
      <td style={{ width: "125px" }}>
  <div className="buttons are-small" style={{ display: "flex", flexDirection: "row" }}>
    <Link to={`/paymnetobligation/${item.uuid}`} className="button is-info" style={{ marginRight: "5px" }}>
      <span className="icon">
        <IoEye />
      </span>
    </Link>
    <button onClick={() => deleteSuratIzin(item.uuid)} className="button is-danger" style={{ marginRight: "5px" }}>
      <span className="icon">
        <IoTrashOutline />
      </span>
    </button>
    <Link to={`/paymnetobligation/edit/${item.uuid}`} className="button is-warning">
      <span className="icon">
        <IoBrushSharp />
      </span>
    </Link>
  </div>
</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
    </div>
    </section>
  );
};

export default SuratIzinList;
