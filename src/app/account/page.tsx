import { auth }
from "@/auth";

export default async function
AccountPage() {

  const session =
    await auth();

  return (

    <div className="container-custom py-10">

      <h1 className="text-4xl font-bold">

        My Account

      </h1>

      <p className="mt-4">

        Welcome

        {" "}

        {session?.user?.email}

      </p>

    </div>
  );
}
