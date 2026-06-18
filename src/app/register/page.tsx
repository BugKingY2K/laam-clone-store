"use client";

import { useState }
from "react";

export default function RegisterPage() {

  const [form,setForm] =
    useState({

      firstName:"",

      lastName:"",

      email:"",

      password:""
    });

  async function submit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    await fetch(
      "/api/register",
      {
        method:"POST",

        headers:{
          "Content-Type":
          "application/json"
        },

        body:
          JSON.stringify(form)
      }
    );
  }

  return (

    <div className="max-w-md mx-auto py-20">

      <h1 className="text-3xl font-bold">

        Create Account

      </h1>

      <form
        onSubmit={submit}
        className="space-y-4 mt-6"
      >

        <input
          placeholder="First Name"
          className="border p-3 w-full"
        />

        <input
          placeholder="Last Name"
          className="border p-3 w-full"
        />

        <input
          placeholder="Email"
          className="border p-3 w-full"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full"
        />

        <button
          className="
          bg-black
          text-white
          px-5
          py-3
          rounded"
        >
          Register
        </button>

      </form>

    </div>
  );
}
