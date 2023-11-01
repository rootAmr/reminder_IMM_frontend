import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Page1 from "./components/Page1";
import Login from "./components/Login";
import Register from "./components/Register";
import Userlist from "./components/Userlist";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import React from "react";

//import Pdf from "./pages/pdf";

import SuratPerizinanListExpaired from "./pages/SuratPerizinanExpaired.jsx";
import ListShowUser from "./components/ListShowUser.jsx"
import Detail from "./pages/Deatail";
import SuratPerizinan from "./pages/SuratPerizinan";
import AddSuratPerizinan from "./pages/AddSuratPerizinan";
import EditSuratPerizinan from "./pages/EditSuratPerizinan";
import StatusperizinanID from "./pages/StatusperizinanID";
import UpdatePerizinanStatus from "./pages/UpdatePerizinanStatus";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Page1/>} />
          <Route path="/Start" element={<ListShowUser/>} />
          <Route path="/Listexpaired" element={<SuratPerizinanListExpaired/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userlist" element={<Userlist />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />

          <Route path="/paymnetobligation" element={<SuratPerizinan />}/>
          <Route path="/paymnetobligation/:id" element={<Detail/>}/>
          <Route path="/paymnetobligation/add" element={<AddSuratPerizinan />} />
          <Route path="/paymnetobligation/edit/:id" element={<EditSuratPerizinan/>} />
          <Route path="/perizinan/editstatus/" element={<UpdatePerizinanStatus/>} />
          <Route path="/suratperizinan/editstatus/:id" element={<StatusperizinanID/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
