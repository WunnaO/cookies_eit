"use client";

import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const Layout = ({ children }) => {
  const { isAuth, setIsAuth, setToken, token } = useContext(AuthContext);
  const router = useRouter();

  const currentPaths = router.pathname;

  if (typeof window !== "undefined") {
    setToken(localStorage.getItem("ee_t"));
  }

  useEffect(async () => {
    const token = localStorage.getItem("ee_t");
    const Auth_token = {
      token,
    };

    if (token) {
      const res = await fetch(
        "https://api.eitlearningcampus.org/api/v1/auth/check",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Auth_token),
        }
      );

      if (!res.ok) {
        localStorage.removeItem("ee_t");
        router.push("/login");
      } else {
        router.push(currentPaths);
        setIsAuth(true);
      }
    } else {
      router.push("/login");
    }
  }, [currentPaths]);

  return <>{isAuth && <main>{children}</main>}</>;
};

export default Layout;
