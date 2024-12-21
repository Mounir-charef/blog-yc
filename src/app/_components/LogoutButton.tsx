"use client";

import { logout } from "@/actions/actions";

export default function LogoutButton() {
  return <button onClick={() => logout()}>Sign out</button>;
}
