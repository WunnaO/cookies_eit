"use client";

import Layout from "@/Layout";
import AuthProvider from "@/context/AuthProvider";
import "@/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  let token;

  if (typeof window !== "undefined") {
    const getCookie = (name) => {
      const DecodedCookie = decodeURIComponent(document.cookie);
      const CookieArray = DecodedCookie.split(";");
      let result;

      CookieArray.map((data) => {
        if (data.indexOf(name) === 0) {
          result = data.substring(name.length + 1);
        }
      });
      return result;
    };

    token = getCookie("ee_t");
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
