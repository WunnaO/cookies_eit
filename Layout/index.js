"use client";

import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const Layout = ({ children }) => {
  const { isAuth, setIsAuth, getCookie, deleteCookie } =
    useContext(AuthContext);
  const router = useRouter();

  const currentPaths = router.pathname;

  const chkToken = async () => {
    const token = getCookie("ee_t");

    if (token) {
      const res = await fetch(
        "https://api.eitlearningcampus.org/api/v1/auth/check",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        }
      );

      if (!res.ok) {
        deleteCookie("ee_t");
        router.push("/login");
      } else {
        router.push(currentPaths);
        setIsAuth(true);
      }
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    chkToken();
  }, [currentPaths]);

  return <>{isAuth && <main>{children}</main>}</>;
};

export default Layout;
