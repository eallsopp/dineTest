"use client";
import React, { useState } from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { siteConfig } from "@/config/site";

import layout from "@/components/layouts.module.css";

const Sidebar = ({ name }: { name: React.ReactNode }) => {
  const sublinks = siteConfig.navMenuItems?.find(
    (item) => item.label === name
  )?.sublinks;

  const handleClick = () => {
    console.log("clicked");
  };

  const cleanSublinks = (sublink: string) => {
    return sublink.replace(/-/g, " ");
  };

  const upperCaseLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const caseManageSublink = (sublink: string) => {
    if (sublink.split(" ").length > 1) {
      return sublink
        .split(" ")
        .map((word) => upperCaseLetter(word))
        .join(" ");
    } else {
      return upperCaseLetter(sublink);
    }
  };

  return (
    <div className={layout.sidebar}>
      <Button
        style={{ width: "100%", justifyContent: "start" }}
        onClick={handleClick}
      >
        {name} Options
      </Button>
      {sublinks?.map((sublink) => (
        <Link
          key={`sublink-${sublink}`}
          href={`/admin/${sublink}`}
          style={{ display: "block", margin: "10px 0" }}
        >
          {caseManageSublink(cleanSublinks(sublink))}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
