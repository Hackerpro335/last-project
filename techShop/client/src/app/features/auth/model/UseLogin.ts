import { useState } from "react";
import { LoginFormValues } from "../model/types";

export function useLogin() {
  const [loading, setLoading] = useState(false);

  const login = async ({ username, password }: LoginFormValues) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Logged in:", { username, password });
    setLoading(false);
  };

  return { login, loading };
}