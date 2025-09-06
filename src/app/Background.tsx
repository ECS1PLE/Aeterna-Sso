"use client";

import { usePathname } from "next/navigation";
import React from "react";
import BackgroundPages from "@/components/Backgrounds/Background";
import RegistrationBackgound from "@/components/Backgrounds/Registration";

export default function Background() {
  const pathname = usePathname() ?? "";

  switch (pathname) {
    case "/register":
      return <RegistrationBackgound className="absolute -z-[1]" />;

    default:
      return <BackgroundPages />;
  }
}
