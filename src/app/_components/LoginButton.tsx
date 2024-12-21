"use client";

import { login } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";

export default function LoginButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="link"
      onClick={() => startTransition(() => login())}
      disabled={isPending}
    >
      Sign in
    </Button>
  );
}
