// Import Library
import React from 'react';
import Head from 'next/head';
// Import component, function, asset
import Header from "src/layouts/header";
import Footer from "src/layouts/footer";

export default function Page({ children, title, isHeader = true, isFooter = true }) {
  // UI
  return (
    <>
      <Head>
        <title>{`${title} | Miki`}</title>
      </Head>
      {isHeader && <Header />}
      {children}
      {isFooter && <Footer />}
    </>
  );
}
