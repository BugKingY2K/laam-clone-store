import Link from "next/link";

import SearchBar from "./SearchBar";

export default function Header() {

  return (

    <header
      className="
      border-b"
    >

      <div
        className="
        container-custom
        h-20
        flex
        items-center
        justify-between"
      >

        <Link
          href="/"
          className="
          text-3xl
          font-bold"
        >

          LAAM

        </Link>

        <SearchBar />

        <nav
          className="
          flex
          gap-6"
        >

          <Link href="/products">

            Products

          </Link>

          <Link href="/categories">

            Categories

          </Link>

          <Link href="/cart">

            Cart

          </Link>

          <Link href="/account">

            Account

          </Link>

        </nav>

      </div>

    </header>
  );
}
