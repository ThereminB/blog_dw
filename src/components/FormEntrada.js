// React
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Material UI
import {
  Container,
  TextField,
  Button,
  Grid,
  makeStyles,
} from "@material-ui/core";

// Formik
import { Formik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function onKeyDown(keyEvent) {
  if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
    keyEvent.preventDefault();
  }
}

export default function FormEntrada(props) {
  // State hooks
  const [imagen, setImagen] = useState(null);

  const classes = useStyles();

  console.log(props.entrada);

  const handleImagen = (event) => {
    console.log(event.target.files[0]);

    setImagen(event.target.files[0]);
  };

  const handleSubmit = (values, actions) => {
    // console.log("values", values);
    // console.log("actions", actions);
    const vals = imagen ? { ...values, imagen: imagen } : values;

    props.handleSubmit(vals);
  };

  const entradaSchema = Yup.object().shape({
    titulo: Yup.string()
      .min(2, "El título es demasiado corto :(")
      .max(150, "El título es muy largo :(, máximo 150 caracteres")
      .required("No puedes poner una entrada sin título :("),
    texto_intro: Yup.string()
      .min(10, "Cuentanos más de que trata la entrada, mínimo 10 carácteres.")
      .max(
        250,
        "Ups! Muy largo, dame un resumen de la entrada, máximo 250 carácteres"
      )
      .required(),
    texto_completo: Yup.string()
      .min(20, "Esto no es una entrada es un twweet, cuentame más")
      .required(),
  });

  return (
    <>
      <Grid container spacing={3}>
        {props.entrada ? (
          <Grid item xs={12}>
            <img src={props.entrada.imagen} width="50%" />
          </Grid>
        ) : null}
        <Grid item xs={12} spacing={3}>
          <Formik
            initialValues={{
              titulo: props.entrada ? props.entrada.titulo : "",
              texto_intro: props.entrada ? props.entrada.texto_intro : "",
              texto_completo: props.entrada ? props.entrada.texto_completo : "",
            }}
            validationSchema={entradaSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {(formikprops) => {
              // console.log(formikprops);

              return (
                <form onSubmit={formikprops.handleSubmit}>
                  <Grid item container xs={12} direction="row">
                    <Grid item xs={6}>
                      <TextField
                        value={formikprops.values.titulo}
                        onChange={formikprops.handleChange}
                        onBlur={formikprops.onBlur}
                        id="titulo"
                        label="Titulo"
                        name="titulo"
                        error={formikprops.errors.titulo}
                        helperText={
                          formikprops.errors.titulo
                            ? formikprops.errors.titulo
                            : null
                        }
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}>
                      <Button type="submit" color="primary" variant="outlined">
                        Crear Entrada
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      value={formikprops.values.texto_intro}
                      onChange={formikprops.handleChange}
                      onBlur={formikprops.onBlur}
                      id="texto_intro"
                      label="Introducción"
                      name="texto_intro"
                      error={formikprops.errors.texto_intro}
                      helperText={
                        formikprops.errors.texto_intro
                          ? formikprops.errors.texto_intro
                          : null
                      }
                      multiline
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={formikprops.values.texto_completo}
                      onChange={formikprops.handleChange}
                      onBlur={formikprops.onBlur}
                      id="texto_completo"
                      label="Entrada"
                      name="texto_completo"
                      error={formikprops.errors.texto_completo}
                      helperText={
                        formikprops.errors.texto_completo
                          ? formikprops.errors.texto_completo
                          : null
                      }
                      multiline
                      fullWidth
                    />
                  </Grid>
                </form>
              );
            }}
          </Formik>
        </Grid>

        <input type="file" onChange={handleImagen}></input>
      </Grid>
    </>
  );
}

FormEntrada.propTypes = {
  entrada: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
};
