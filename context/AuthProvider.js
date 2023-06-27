import { useRouter } from "next/router";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [invalidData, setInvalidData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const router = useRouter();

  /// COOKIES /********************************* *///
  const setCookie = (name, value, exDays) => {
    const date = new Date();
    date.setTime(date.getTime() + exDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  const deleteCookie = (name) => {
    setCookie(name, null, null);
  };

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
  /// COOKIES /********************************* *///

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setUserName("");
    setPassword("");

    if (userName && password) {
      setLoading(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      };
      const response = await fetch(
        "https://api.eitlearningcampus.org/api/v1/auth/login",
        requestOptions
      );

      console.log(" Login api ", response);
      if (response) {
        setLoading(false);
      }

      if (response.status === 200) {
        setIsAuth(true);
        const data = await response.json();
        console.log(data);
        setCookie("ee_t", data.token, 365);
        if (data) {
          router.push("/");
        } else {
          setInvalidData(true);
        }
      } else {
        setError(false);
        setInvalidData(true);
      }
    } else {
      setError(true);
      setInvalidData(false);
    }

    setToken(getCookie("ee_t"));
  };

  const logOut = () => {
    deleteCookie("ee_t");
    setIsAuth(false);
    setLoading(false);
    setError(false);
    setInvalidData(false);
  };

  return (
    <AuthContext.Provider
      value={{
        setPassword,
        setUserName,
        userName,
        password,
        onSubmitHandler,
        logOut,
        error,
        invalidData,
        loading,
        isAuth,
        setIsAuth,
        setToken,
        token,
        setCookie,
        getCookie,
        deleteCookie,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
