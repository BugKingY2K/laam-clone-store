import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

const session =
  await auth();

if (!session) {

  redirect("/login");
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div className="min-h-screen flex">

      <AdminSidebar />

      <div className="flex-1">

        <AdminHeader />

        <div className="p-6">

          {children}

        </div>

      </div>

    </div>
  );
}
