import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  title: {
    fontFamily: "'Oswald', sans-serif !important",
  },
  date: {
    color: "blue !important",
    textDecoration: "underline",
  },
  paragraphStyle: {
    fontFamily: "'Lexend Tera', sans-serif;",
  },
}));

export default function MainPost(props) {
  const classes = useStyles();

  console.log(props);

  return (
    <Grid item xs={12} md={8}>
      <Grid item xs={6} paddingBot={6}>
        <Typography className={classes.title} component="h2" variant="h5">
          {props.posts.titulo}
        </Typography>
      </Grid>
      <Divider />
      <Grid item xs={6} paddingBot={6} >
        <Typography className={classes.date} variant="subtitle1" color="textSecondary">
          {Date(props.posts.fecha_publ)}
        </Typography>
      </Grid>
      <Typography className={classes.paragraphStyle} variant="subtitle1" paragraph>
        {props.posts.texto_completo}
      </Typography>
    </Grid>
  );
}
MainPost.propTypes = {
  posts: PropTypes.object,
  title: PropTypes.string,
};
