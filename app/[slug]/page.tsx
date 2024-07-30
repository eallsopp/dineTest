"use client";
import React from "react";
import { useParams } from "next/navigation";
import UserLayout from "./UserLayout";
import NotFound from "../not-found";
import AdminLayout from "./AdminLayout";

//my recipes need to be included in there
const LoggedInPage = () => {
  const { slug } = useParams();

  // this page will have the content for the admin account, menu ingredients etc...
  if (slug === "admin") {
    return (
      <>
        <AdminLayout>
          <h1>{slug}</h1>
        </AdminLayout>
      </>
    );
  } else if (slug === "user") {
    return (
      <>
        <UserLayout>
          <h1>{slug}</h1>
        </UserLayout>
      </>
    );
  } else {
    return <NotFound />;
  }
};

export default LoggedInPage;
