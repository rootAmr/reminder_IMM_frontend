import React, { useEffect } from "react";
import Layout from "./Layout";
import SuratPerizinanList from "../components/SuratPerizinanList";//
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const SuratPerizinan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <SuratPerizinanList/>
    </Layout>
  );
};

export default SuratPerizinan;
