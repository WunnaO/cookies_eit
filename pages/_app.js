"use client";

import Layout from "@/Layout";
import AuthProvider from "@/context/AuthProvider";
import "@/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("ee_t");
  }

  return (
    <>
      <AuthProvider>
        {router.pathname.includes("login") && !token ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </AuthProvider>
    </>
  );
}
