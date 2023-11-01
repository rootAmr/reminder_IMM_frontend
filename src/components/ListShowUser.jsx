import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import API_CONFIG from "../config";
const API_URL = API_CONFIG.PORT;

const ListShowUser = () => {
  const [suratIzin, setSuratIzin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    getSuratIzin();
  }, []);

  const getSuratIzin = async () => {
    try {
      const response = await axios.get(`${API_URL}/suratizin_user`);
      const sortedSuratIzin = response.data.sort(
        (a, b) => new Date(b.tanggal_dibuat) - new Date(a.tanggal_dibuat)
      );
      setSuratIzin(sortedSuratIzin);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredSuratIzin = suratIzin.filter((item) =>
    item.name_of_report.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const backgroundStyle = {
    backgroundImage: `url(${require("../Hompegelogin.png")})`, // Ganti dengan path yang benar
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  const elevatedBoxStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "60px"
  };

  const totalPages = Math.ceil(filteredSuratIzin.length / itemsPerPage);

  return (
    <div>
      <div className="exit-button">
  <button className="button is-small is-dark" onClick={"/"}>
    Exit
  </button>
</div>
      <Navbar />
      <section className="hero is-fullheight is-fullwidth" style={backgroundStyle}>
      <div className="bg-container">
        <div className="container">
          <div className="content-container" style= {elevatedBoxStyle}>
            <h1 className="title">Report & Payment Obligation</h1>
            <h2 className="subtitle">List Report & Payment Obligation</h2>
            <input
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input mb-2"
            />
            <div className="table-container">
              <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Institution</th>
                  <th>Name of Report</th>
                  <th>Period</th>
                  <th>PIC</th>
                  <th>Remark</th>
                  <th>Tanggal Dibuat</th>
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
                    <td>{item.institution}</td>
                    <td>{item.name_of_report}</td>
                    <td>{item.period}</td>
                    <td>{item.pic}</td>
                    <td>{item.remark}</td>
                    <td>{formatDate(item.tanggal_dibuat)}</td>
                    <td>{formatDate(item.tanggal_berakhir)}</td>
                    <td>
                      <a href={`${item.url}`} target="_blank" rel="noopener noreferrer">
                        File
                      </a>
                    </td>
                    <td></td>
                    <td>
                      <div className="buttons are-small">
                        <Link
                          to={`/suratizin/${item.uuid}`}
                          className="button is-info is-fullwidth"
                        >
                          Detail
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 columns is-mobile">
              <div className="column is-8">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`button is-small ml-2 ${
                      currentPage === index + 1 ? 'is-primary' : ''
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              {indexOfLastItem < filteredSuratIzin.length && (
                <div className="column is-4">
                  <button onClick={handleNextPage} className="button is-small is-fullwidth">
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default ListShowUser;