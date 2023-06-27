import Loading from "@/components/Loading";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";

const Login = () => {
  const [chkToken, setChkToken] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();
  const {
    onSubmitHandler,
    setUserName,
    setPassword,
    error,
    invalidData,
    loading,
  } = useContext(AuthContext);

  let token;
  useEffect(() => {
    if (typeof window !== "undefined") {
      token = localStorage.getItem("ee_t");
    }

    if (token) {
      setChkToken(true);
      router.push("/");
    } else {
      router.push("/login");
    }
  }, [token]);

  useEffect(() => {
    if (!loading) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [inputRef, loading, error]);

  return (
    !chkToken && (
      <div className="container mx-auto">
        <form className="w-2/4 mx-auto" onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="mb-2 block text-gray-700 text-sm font-medium"
            >
              UserName
            </label>
            <input
              type="text"
              name="username"
              id="username"
              readOnly={loading}
              ref={inputRef}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full pl-7 pr-12 py-2 border outline-none border-gray-300  rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-gray-700 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              readOnly={loading}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-7 pr-12 py-2 border outline-none border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            {error && (
              <div className="mb-4 text-red-600 text-[16px] font-[500] text-center mt-3">
                **Please Type Your Username and Password**
              </div>
            )}

            {invalidData && (
              <div className="mb-4 text-red-600 text-[16px] font-[500] text-center mt-3">
                Your userName and password is invalid. Please check your
                userName and password.
              </div>
            )}
          </div>
          {loading ? (
            <Loading />
          ) : (
            <div>
              <button
                type="submit"
                className="py-2 px-5 text-gray-200 block mx-auto bg-indigo-800 rounded-md"
              >
                Log In
              </button>
            </div>
          )}
        </form>
      </div>
    )
  );
};

export default Login;
