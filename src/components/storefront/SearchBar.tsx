"use client";

import { useState } from "react";

export default function SearchBar() {

  const [query, setQuery] =
    useState("");

  return (

    <input

      value={query}

      onChange={(e) =>
        setQuery(e.target.value)
      }

      placeholder="Search products..."

      className="
      border
      rounded-lg
      px-4
      py-2
      w-full"
    />
  );
}
