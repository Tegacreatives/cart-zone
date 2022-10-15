import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({title, children }) => {
  return (
    <>
      <Head>
        <title>{title? title + " - Cart Zone": 'Cart Zone'}</title>
        <meta name="description" content="An Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header><NavBar /></header>
        <main className="container m-auto mt-4">{children}</main>
        <footer><Footer /></footer>
      </div>
    </>
  );
};

export default Layout;
