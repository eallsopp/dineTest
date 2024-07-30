import React from "react";
import Sidebar from "@/components/sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar name={"Admin"} />
        <section className="flex-1 gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            {children}
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminLayout;
