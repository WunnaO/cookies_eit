import AuthProvider from "@/context/AuthProvider";
import "@/globals.css";
import { useRouter } from "next/router";
import Layout from "./layout";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("Token");
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
