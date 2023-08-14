import React, { useEffect } from "react";
import Layout from "./Layout";
import FormSuratPerizinan from "../components/FromSuratPerizinan";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddSuratPerizinan = () => {
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
      <FormSuratPerizinan />
    </Layout>
  );
};

export default AddSuratPerizinan;
