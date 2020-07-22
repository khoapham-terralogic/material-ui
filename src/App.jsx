import React, { useState, useRef } from 'react';
import { Header, Products, MyForm } from './components';
import { makeStyles, Box, Typography } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue'


const useStyles = makeStyles({
  root: {
    background: blue[100]
  },

  imgContainer: {
    overflow: "hidden",
    width: "100%",
    height: "60vh",
    position: "relative",
    cursor: "url(\"https://i.imgur.com/Axd1jYy.png\"), auto",
    "&:hover $img": {
      transform: "scale(1.5)",
    },
  },
  header: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%,-50%)`,
    color: "#fff",
    mixBlendMode: "overlay",
    fontWeight: "700",
    fontSize: "10rem",
    textShadow: "3px 2px 5px #ff0000"
  },
  img: {
    width: "100%",
    transition: "all ease 1.2s"
  }
})


const App = () => {
  const myRef = useRef(null)
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const toggle = () => { setOpen(!open) }

  return (
    <div className={classes.root}>
      <Header onClick={toggle} />
      <Box ref={myRef} className={classes.imgContainer}>
        <Typography style={{ zIndex: "1000" }} variant="h1" className={classes.header}>WIBU WORLD</Typography>
        <img className={classes.img} src="/images/731739.png" alt="Myimage" />
      </Box>
      {/* <MySilder /> */}
      <Products />
      <MyForm />
    </div>
  );
}

export default App;
