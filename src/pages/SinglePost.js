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
import FeaturedPost from "../components/FeaturedPost";
import Main from "../components/Main";
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


//const post1 = '# This is a header\n\nAnd this is a paragraph'
// const featuredPosts = [
//   {
//     title: "Featured post",
//     date: "Nov 12",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: "https://source.unsplash.com/random",
//     imageText: "Image Text",
//   },
//   {
//     title: "Post title",
//     date: "Nov 11",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: "https://source.unsplash.com/random",
//     imageText: "Image Text",
//   },
// ];

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
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
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

    fetch("http://localhost:8000/entradas/1", options)
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
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={data} />
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
