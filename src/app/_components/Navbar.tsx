import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="bg-white px-5 py-3 shadow-sm">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>

        <ul className="flex items-center space-x-5 text-sm text-black">
          {session && session.user ? (
            <>
              <li>
                <Link href="/startup/create">create</Link>
              </li>
              <li>
                <LogoutButton />
              </li>
              <li>
                <Link href={`/user/${session.user.id}`}>
                  <span className="font-bold">{session.user.name}</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <LoginButton />
              </li>
              <li>
                <Link href="/signup">Sign up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
