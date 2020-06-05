import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import Header from "../components/Header";
import MainFeaturedPost from "../components/MainFeaturedPost";
import MainPost from "../components/MainPost";
import SidebarPost from "../components/SidebarPost";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: "Tecnología", url: "#" },
  { title: "Diseño", url: "#" },
  { title: "Cultura", url: "#" },
  { title: "Negocios", url: "#" },
  { title: "Ciencia", url: "#" },
];

const mainFeaturedPost = {
  title: "Introducción a la linea de comandos",
  description:
    "Aprende a ejecutar los comandos básicos que necesitas para tu vida en la Terminal",
    image: "https://i.picsum.photos/id/1/800/400.jpg",
    imgText: "main image description",
};

const sidebar = {
  title: "About",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",   
    archives: [
    {title: "Marzo 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function SinglePost() {
  const classes = useStyles();
  
  const [single, setSingle]= useState({});
  useEffect(() => {

    const options = {
      method: "GET",
    };

    fetch("http://localhost:8000/entradas/1/", options)
      .then((response) =>
        response
          .json()
          .then((data) => {
            console.log(data);

            setSingle(data);
            console.log(single);
          })
          .catch((error) => {
            console.log(error);
          })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <MainPost title="From the firehose" posts={single} />
             <SidebarPost
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> 
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
