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
  title: "Blog personal donde daré mi humilde opinión.",
  description:
    "Este es un espacio abierto, pueden comentar y discutir de cualquier cosa.",
  image: "https://i.picsum.photos/id/272/600/500.jpg",
  imgText: "main image description",
};

const post1 = '# Disfruten del contenido \n' +
'#### Junio 5, 2020 by [Baruc, Jorge & Denisse]\n' +
'## This blog post shows a few different types of content that are supported in english and spanish.\n';


const posts = [post1];

const sidebar = {
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
