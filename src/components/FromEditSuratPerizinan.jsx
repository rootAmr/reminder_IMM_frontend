import React, { useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import API_CONFIG from "../config";
const API_URL = API_CONFIG.PORT;


const FormEditSuratPerizinan = () => {
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
  const [reminder1,setReminders1] = useState(null);
  const [reminder2, setReminders2] = useState(null);
  const [reminder3, setReminders3] = useState(null);
  const [reminder4, setReminders4] = useState(null);
  const [reminder5, setReminders5] = useState(null);
  const [reminder6, setReminders6] = useState(null);
  const [reminder7, setReminders7] = useState(null);
  const [reminder8, setReminders8] = useState(null);
  const [reminder9, setReminders9] = useState(null);
  const [reminder10, setReminders10] = useState(null);
  const [reminder11, setReminde11] = useState(null);
  const [reminder12, setReminders12] = useState(null);
  const [uploadFile, setUploadFile] = useState(null);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const [reminders, setReminders] = useState([
    reminder1, reminder2, reminder3, reminder4, reminder5, reminder6, reminder7, reminder8, reminder9, reminder10, reminder11, reminder12
  ].filter(reminder => reminder !== null));


 const addReminder = () => {
  const emptyIndex = reminders.findIndex(reminder => reminder === null);
  if (emptyIndex !== -1) {
    const updatedReminders = [...reminders];
    updatedReminders[emptyIndex] = ""; // Fill the empty reminder with an empty value
    setReminders(updatedReminders);
  }
};
  
  const removeReminder = (indexToRemove) => {
    const updatedReminders = reminders.filter((_, index) => index !== indexToRemove);
    setReminders(updatedReminders);
  };

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`${API_URL}/suratizin/${id}`);
        const {
          institution,
          period,
          name_of_report,
          pic,
          departemen,
          cc,
          from_email,
          payment_media,
          remark,
          tanggal_dibuat,
          tanggal_berakhir,
          uploadFile,
          reminder1,
          reminder2,
          reminder3,
          reminder4,
          reminder5,
          reminder6,
          reminder7,
          reminder8,
          reminder9,
          reminder10,
          reminder11,
          reminder12,
        } = response.data;
  
        setInstitution(institution);
        setPeriod(period);
        setName_of_report(name_of_report);
        setPic(pic);
        setDepartemen(departemen);
        setCc(cc);
        setFrom_email(from_email);
        setPayment_media(payment_media);
        setRemark(remark);
        setTanggal_dibuat(tanggal_dibuat);
        setTanggal_berakhir(tanggal_berakhir);
        setUploadFile(uploadFile);
  
        // Update reminders array
        setReminders([
          reminder1,
          reminder2,
          reminder3,
          reminder4,
          reminder5,
          reminder6,
          reminder7,
          reminder8,
          reminder9,
          reminder10,
          reminder11,
          reminder12,
        ]);
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
      // Update the individual reminder states before sending the request
      setReminders1(reminders[0]);
      setReminders2(reminders[1]);
      setReminders3(reminders[2]);
      setReminders4(reminders[3]);
      setReminders5(reminders[4]);
      setReminders6(reminders[5]);
      setReminders7(reminders[6]);
      setReminders8(reminders[7]);
      setReminders9(reminders[8]);
      setReminders10(reminders[9]);
      setReminde11(reminders[10]);
      setReminders12(reminders[11]);
  
      await axios.patch(`${API_URL}/suratizin/${id}`, {
        institution: institution,
        period: period,
        name_of_report: name_of_report,
        pic: pic,
        departemen: departemen,
        cc: cc,
        from_email: from_email,
        payment_media: payment_media,
        remark: remark,
        reminder1: reminders[0],
        reminder2: reminders[1],
        reminder3: reminders[2],
        reminder4: reminders[3],
        reminder5: reminders[4],
        reminder6: reminders[5],
        reminder7: reminders[6],
        reminder8: reminders[7],
        reminder9: reminders[8],
        reminder10: reminders[9],
        reminder11: reminders[10],
        reminder12: reminders[11],
        tanggal_dibuat: tanggal_dibuat,
        tanggal_berakhir: tanggal_berakhir,
        uploadFile: uploadFile,
      });
      navigate("/paymnetobligation");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
    <h1 className="title">Edit Surat Perizinan</h1>
    <h2 className="subtitle">Edit Surat Perizinan</h2>
    <div className="card is-shadowless">
      <div className="card-content">
        <div className="content">
          <form onSubmit={updateProduct}>
            <p className="has-text-centered">{msg}</p>
            <div className="field">
              <label className="label">Institution</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="institution"
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
                  placeholder="Product Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Name of report</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={name_of_report}
                  onChange={(e) => setName_of_report(e.target.value)}
                  placeholder="Name of report"
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
              <div className="select is-fullwidth">
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
              <label className="label">Tanggal Dibuat</label>
              <div className="control">
                <input
                  type="date"
                  className="input"
                  value={tanggal_dibuat}
                  onChange={(e) => setTanggal_dibuat(e.target.value)}
                  placeholder="Tanggal Dibuat"
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
                  placeholder="Tanggal Dibuat"
                />
              </div>
              </div>

              <h2 className="title has-text-centered">Reminder</h2>

            <div className="field">
              <label className="label">Email</label>
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
            {reminders.map((reminder, index) => (
   // Check if reminder is not null
   reminder !== null && (
    <div className="field" key={index}>
      <label className="label">Reminder {index + 1}</label>
      <div className="control">
        <input
          type="date"
          className="input"
          value={reminder || ""}
          onChange={(e) => {
            const updatedReminders = [...reminders];
            updatedReminders[index] = e.target.value;
            setReminders(updatedReminders);
          }}
          placeholder="Reminder"
        />
        <button
          type="button"
          className="button is-small is-danger is-outlined"
          onClick={() => removeReminder(index)}
        >
          Remove
        </button>
      </div>
    </div>
   )
))}
<div className="field">
  <div className="control">
    <button type="button" className="button" onClick={addReminder}>
      Add Reminder
    </button>
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
export default FormEditSuratPerizinan;