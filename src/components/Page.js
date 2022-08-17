import React from 'react';
import Head from 'next/head';
export default function Page({ children, title }) {
  return (
    <>
      <Head>
        <title>{`${title} | Miki`}</title>
      </Head>
      {children}
    </>
  );
}
