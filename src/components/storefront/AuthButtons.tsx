"use client";

import { signOut } from "next-auth/react";

export default function
AuthButtons() {

  return (

    <button

      onClick={()=>
        signOut()
      }

      className="
      border
      px-4
      py-2
      rounded"
    >

      Logout

    </button>
  );
}
