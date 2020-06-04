import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function MainPost(props) {
  const classes = useStyles();
  
  console.log(props);
  
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {props.title}
      </Typography>
      <Divider />
        <Typography component="h2" variant="h5">
          {props.posts.titulo}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {Date(props.posts.fecha_publ)}
        </Typography>
        <Typography variant="subtitle1" paragraph>
          {props.posts.texto_completo}
        </Typography>
    </Grid>
  );
}
MainPost.propTypes = {
  posts: PropTypes.object,
  title: PropTypes.string,
};
