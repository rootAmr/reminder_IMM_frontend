import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import backgroundImage from "../Hompegelogin.png";
import API_CONFIG from "../config";
const API_URL = API_CONFIG.PORT;

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  const [departemenData, setDepartemenData] = useState([]);
  const [userDepartemenData, setUserDepartemenData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    const fetchDepartemenData = async () => {
      try {
        const response = await fetch(`${API_URL}/getdepartemen`, {
          credentials: "include",
        });
        const data = await response.json();

        const formattedData = Object.keys(data.departemenCount).map((departemen) => {
          const sudah = data.urlStatus[departemen]?.sudah || 0;
          const belum = data.urlStatus[departemen]?.belum || 0;

          return {
            departemen: departemen,
            "Belum Mengupload File": belum,
            "Sudah Mengupload File": sudah,
          };
        });
        setDepartemenData(formattedData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDepartemenData();

    // Check if the user is an admin
    setIsAdmin(user && user.role === "admin");
  }, [user]);

  useEffect(() => {
    const fetchUserDepartemenData = async () => {
      if (user && user.departemen) {
        try {
          const response = await fetch(`${API_URL}/users`, {
            credentials: "include",
          });
          const data = await response.json();
          // Filter data based on the user's department
          const userDepartemenDataFiltered = data
            .filter((userData) => userData.departemen === user.departemen)
            .map((userData) => ({
              departemen: userData.departemen,
              "Belum Mengupload File": userData.belumMengupload || 0,
              "Sudah Mengupload File": userData.sudahMengupload || 0,
            }));

          setUserDepartemenData(userDepartemenDataFiltered);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    fetchUserDepartemenData();
  }, [user]);

  const containerStyle = {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    transition: "transform 0.3s, box-shadow 0.3s",
    width: "1350px", // Adjust container width
    height: "790px", // Adjust container height
  };

  const chartMargin = {
    top: 50, // Adjust top margin
    right: 30,
    left: 30,
    bottom: 60,
  };

  return (
    <section className="hero is-fullheight is-fullwidth" style={backgroundStyle}>
      <div style={containerStyle}>
        <h1 className="title">Admin Dashboard</h1>
        <h2 className="subtitle">
          Welcome Back, <strong>{user && user.nama}</strong>
        </h2>
        {isAdmin ? (
          <h1 className="title has-text-centered">
            Report & Payment Obligation by Departemen
          </h1>
        ) : (
          <h1 className="title has-text-centered">
            Your Department's Report & Payment Obligation
          </h1>
        )}
        <div className="card-content">
          {isAdmin ? (
            <BarChart width={1300} height={600} data={departemenData} margin={chartMargin}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="departemen"
                interval={0}
                angle={-45}
                textAnchor="end"
                height={80}
                tick={{ fontSize: 12 }}
              />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="Belum Mengupload File" fill="#f55d74" />
              <Bar dataKey="Sudah Mengupload File" fill="#82ca9d" />
            </BarChart>
          ) : (
            <BarChart width={1300} height={600} data={userDepartemenData} margin={chartMargin}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="departemen"
                interval={0}
                angle={-45}
                textAnchor="end"
                height={80}
                tick={{ fontSize: 12 }}
              />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="Belum Mengupload File" fill="#f55d74" />
              <Bar dataKey="Sudah Mengupload File" fill="#82ca9d" />
            </BarChart>
          )}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
