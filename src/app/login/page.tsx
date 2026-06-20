"use client";

import { signIn } from "next-auth/react";

import { useState } from "react";

export default function LoginPage() {

  const [email,setEmail] =
    useState("");

  const [password,setPassword] =
    useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault();

    await signIn(
      "credentials",
      {
        email,
        password,
        callbackUrl: "/account"
      }
    );
  }

  return (

    <div className="max-w-md mx-auto py-20">

      <h1 className="text-3xl font-bold">

        Login

      </h1>

      <form
        onSubmit={handleLogin}
        className="space-y-4 mt-6"
      >

        <input

          placeholder="Email"

          className="border p-3 w-full"

          value={email}

          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <input

          type="password"

          placeholder="Password"

          className="border p-3 w-full"

          value={password}

          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          className="
          bg-black
          text-white
          px-5
          py-3
          rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
}
