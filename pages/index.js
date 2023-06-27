import { AuthContext } from "@/context/AuthProvider";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const { logOut, token } = useContext(AuthContext);

  return (
    <main>
      <div>
        {token && (
          <div>
            <button className="text-black border border-solid border-slate-900 p-2">
              <Link href="/login">
                <p onClick={logOut}>Logout</p>
              </Link>
            </button>
          </div>
        )}
      </div>
      <br />

      <div>
        <button className="text-black border border-solid border-slate-900 p-2">
          <Link href="/section" key="section">
            Click To Section Page
          </Link>
        </button>
      </div>
      <br />
      <div>
        <button className="text-black border border-solid border-slate-900 p-2">
          <Link href="/course" key="course">
            Click To Course Page
          </Link>
        </button>
      </div>
    </main>
  );
}
