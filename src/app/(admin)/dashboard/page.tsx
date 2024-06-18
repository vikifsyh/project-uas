import Table from "@/app/components/layouts/DashboardPage/Table";
import Sidebar from "@/app/components/layouts/Navbar/Sidebar";
import { Metadata } from "next";

export default function DashboardPage() {
  const params = { slug: "example-slug" };

  return (
    <div className="flex gap-20 items-center">
      <Sidebar />
      <Table params={params} />
    </div>
  );
}
