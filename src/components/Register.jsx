import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_CONFIG from "../config";
const API_URL = API_CONFIG.PORT;
const Register = () => {
    const [nama, setName] = useState('');
    const [nik, setNik] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [jeniskelamin, setJenisKelamin] = useState('');
    const [nohp, setNohp] = useState('');//
    const [tanggallahir, setTanggallahir] = useState('');//
    const [pekerjaan, setPekerjaan] = useState('');//
    const [alamat, setAlamat] = useState('');//
    const [nokartukeluarga, setNokartukeluarga] = useState('');//
    const [role] = useState('user');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/users`, {
                nama: nama,
                nik: nik,
                password: password,
                jeniskelamin :jeniskelamin,
                confPassword: confPassword,
                nohp: nohp,
                alamat: alamat,
                tanggallahir : tanggallahir,
                pekerjaan: pekerjaan,
                role:role,
                nokartukeluarga : nokartukeluarga
            });
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Register} className="box">
                                <div className='imgHeader'>
                                 </div>
                                <p className="has-text-centered ">{msg}</p>
                                <div className='imgHeader'>
                            <img src="ORTKU.png" alt="logo" srcSet=" "/>
                            </div>
                                <p className="has-text-centered is-size-2">Register</p>
                                <div className="field mt-5">
                                    <label className="label">Nama</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Nama"
                                            value={nama} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">NIK</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="NIK" value={nik} onChange={(e) => setNik(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jenis Kelamin</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Laki-laki / Perempuan" value={jeniskelamin} onChange={(e) => setJenisKelamin(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nomor Hp</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="08**" value={nohp} onChange={(e) => setNohp(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Tanggal Lahir</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="29 Mei 2002" value={tanggallahir} onChange={(e) => setTanggallahir(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Pekerjaan</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="wiraswasta" value={pekerjaan} onChange={(e) => setPekerjaan(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Alamat</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nomor Kartu Keluarga</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="00921" value={nokartukeluarga} onChange={(e) => setNokartukeluarga(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;
