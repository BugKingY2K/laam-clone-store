"use client";

import Link from "next/link";

export default function Header() {

  return (

    <header className="border-b">

      <div className="container-custom">

        <div className="flex items-center justify-between h-20">

          <Link
            href="/"
            className="text-3xl font-bold"
          >
            PoPStore
          </Link>

          <nav className="hidden md:flex gap-8">

            <Link href="/">
              Home
            </Link>

            <Link href="/products">
              Products
            </Link>

            <Link href="/categories">
              Categories
            </Link>

            <Link href="/account">
              Account
            </Link>
            
            <Link href="/login">
             Login
            </Link>

            <Link href="/register">
             Register
            </Link>

          </nav>

        </div>

      </div>

    </header>
  );
}
