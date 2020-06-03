// React
import React, { useState, useEffect } from "react";

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

export default function NewPost() {
  const classes = useStyles();

  const handleSubmit = (values) => {
    console.log("New Post values", values);
    var formData = new FormData();
    Object.entries(values).map((val) => {
      const key = val[0];
      const value = val[1];
      console.log(key, value);

      formData.append(key, value);
    });
    console.log(formData);
    for (let formval of formData.entries()) {
      console.log("formval", formval[0], formval[1]);
    }

    const options = {
      method: "POST",
      body: formData,
    };
    console.log(options);

    fetch("http://localhost:8000/entradas/", options)
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
        <FormEntrada handleSubmit={handleSubmit} />
      </Container>
    </>
  );
}
