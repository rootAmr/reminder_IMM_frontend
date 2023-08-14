import React, { useEffect } from "react";
import Layout from "./Layout";
import FromEditSuratPerizinan from "../components/FromEditSuratPerizinan";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const EditSuratPerizinan  = () => {
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
      <FromEditSuratPerizinan />
    </Layout>
  );
};

export default EditSuratPerizinan;
