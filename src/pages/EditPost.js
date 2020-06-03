// React
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Material UI
import {
  Container,
  TextField,
  Button,
  Grid,
  makeStyles,
} from "@material-ui/core";

// Components
import Header from "../components/Header";
import FormEntrada from "../components/FormEntrada";

// Formik
import { Formik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const EditPost = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const [entrada, setEntrada] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/entradas/${id}/`)
      .then((response) => {
        response.json().then((body) => {
          console.log(body);
          setEntrada(body);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (values) => {
    console.log("New Post values", values);
    var formData = new FormData();
    Object.entries(values).map((val) => {
      const key = val[0];
      const value = val[1];
      console.log(key, value);

      formData.append(key, value);
    });
    formData.append("id", id);
    console.log(formData);
    for (let formval of formData.entries()) {
      console.log("formval", formval[0], formval[1]);
    }

    const options = {
      method: "PATCH",
      body: formData,
    };
    console.log(options);

    fetch(`http://localhost:8000/entradas/${id}/`, options)
      .then((response) => {
        response.json().then((body) => {
          console.log("Creado", body);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container>
        <Header title="Nueva Entrada" sections={[]} />
        <FormEntrada handleSubmit={handleSubmit} entrada={entrada} />
      </Container>
    </>
  );
};

export default EditPost;
