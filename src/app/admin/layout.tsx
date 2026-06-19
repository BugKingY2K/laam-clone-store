import { requireAdmin }
from "@/lib/auth";

import AdminSidebar
from "@/components/admin/AdminSidebar";

export default async function AdminLayout({

  children

}:{
  children: React.ReactNode
}) {

  await requireAdmin();

  return (

    <div className="flex min-h-screen">

      <AdminSidebar />

      <main
        className="
        flex-1
        p-8
        bg-gray-50"
      >
        {children}
      </main>

    </div>
  );
}
