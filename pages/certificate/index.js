import FramerModal from "@/components/CTFCValid/FramerModal";
import HomePage from "@/components/CTFCValid/HomePage";
import CertificateProvider from "@/context/CertificateProvider";
import ModalProvider from "@/context/ModalProvider";
import Head from "next/head";
import React from "react";

const Certificate = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Check Validation code-EIT Learning Campus"
        />
        <title>Check Certificate-EIT Learning Campus</title>
      </Head>
      <CertificateProvider>
        <ModalProvider>
          <HomePage />
          <FramerModal />
        </ModalProvider>
      </CertificateProvider>
    </>
  );
};

export default Certificate;
