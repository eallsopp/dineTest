"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { title } from "@/components/primitives";

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/dashboard");
    } else {
      // errors
    }
  }

  return (
    <>
      <div>
        <h1 className={title()}>Login</h1>
      </div>
      <br />
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <form onSubmit={handleSubmit}>
          <input required name="email" placeholder="email" type="email" />
          <input
            required
            name="password"
            placeholder="password"
            type="password"
          />
          <Button type="submit" className="primary">
            Login
          </Button>
        </form>{" "}
      </div>
    </>
  );
}
