import { AuthContext } from "@/context/AuthProvider";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const { logOut, isAuth } = useContext(AuthContext);
  console.log(isAuth);

  return (
    <main>
      <div>
        {isAuth && (
          <div>
            <button className="text-black border border-solid border-slate-900 p-2">
              <Link href="/login">
                <p onClick={logOut}>Logout</p>
                {/* Logout */}
              </Link>
            </button>
          </div>
        )}
      </div>
      <br />
      <div>
        <button className="text-black border border-solid border-slate-900 p-2">
          <Link href="/certificate" key="certificate">
            Go To Certificate Valid Page
          </Link>
        </button>
      </div>
    </main>
  );
}
