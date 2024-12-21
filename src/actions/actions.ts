"use server";

import { signIn, signOut } from "@/auth";

async function login() {
  await signIn("github");
}

async function logout() {
  await signOut();
}

export { login, logout };
