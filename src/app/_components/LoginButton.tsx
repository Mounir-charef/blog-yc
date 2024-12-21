"use client";

import { login } from "@/actions/actions";

export default function LoginButton() {
  return <button onClick={() => login()}>Sign in</button>;
}
