"use client";

import { useRouter }
from "next/navigation";

import { useState }
from "react";

export default function SearchBar() {

  const router =
    useRouter();

  const [query,setQuery] =
    useState("");

  function submit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    router.push(
      `/search?q=${query}`
    );
  }

  return (

    <form
      onSubmit={submit}
    >

      <input

        value={query}

        onChange={(e)=>
          setQuery(
            e.target.value
          )
        }

        placeholder="Search..."

        className="
        border
        px-4
        py-2
        rounded-lg"
      />

    </form>
  );
}
