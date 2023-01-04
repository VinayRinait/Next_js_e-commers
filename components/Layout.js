import Head from "next/head";
import React from "react";
import Link from "next/link";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import useStyles from "../utils/style";

const Layout = ({ title, children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Shopholic</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Link href={"/"}>
            <Typography className={classes.brand}>Shopholic</Typography>
          </Link>
          <div className={classes.grow}></div>
          <Link href={"/cart"}>Cart</Link>
          <Link href={"/login"}>Login</Link>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All right Reserved By Shopholic</Typography>
      </footer>
    </div>
  );
};

export default Layout;
