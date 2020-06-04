import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";


import Header from "../components/Header";
import MainFeaturedPost from "../components/MainFeaturedPost";
import FeaturedPost from "../components/FeaturedPost";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
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
  { title: "Ciencia", url: "#" },
];

const mainFeaturedPost = {
  title: "Introducción a la linea de comandos",
  description:
    "Aprende a ejecutar los comandos básicos que necesitas para tu vida en la Terminal",
  image: "https://i.picsum.photos/id/272/600/500.jpg",
  imgText: "main image description",
};

const post1 = '# Sample blog post \n' +
'#### April 1, 2020 by [Baruc, Jorge & Denisse]\n' +
'This blog post shows a few different types of content that are supported and styled with\n' +
'Material styles. Basic typography, images, and code are all supported.\n' +
'You can extend these by modifying Markdown.js\n';

const posts = [post1];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "Marzo 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
  ],
};

export default function Blog() {
  const classes = useStyles();
  
  const [featuredPost, setFeaturedPost]= useState([]);
  useEffect(() => {
    console.log(featuredPost);

    const options = {
      method: "GET",
    };

    fetch("http://localhost:8000/entradas/", options)
      .then((response) =>
        response
          .json()
          .then((data) => {
            console.log(data);

            setFeaturedPost(data);
            console.log(FeaturedPost);
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
          <Grid container spacing={4}>
            {featuredPost.map((data) => (
              <FeaturedPost key={data.id} post={data} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
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
