"use client";

import { usePathname } from "next/navigation";
import React from "react";
import BlueBackground from "@/components/Backgrounds/Blue";
import LimeBackground from "@/components/Backgrounds/Lime";
import GreenBackground from "@/components/Backgrounds/Green";
import RegistrationBackgound from "@/components/Backgrounds/Registration";

export default function Background() {
  const pathname = usePathname() ?? "";

  switch (pathname) {
    case "/login":
      return <BlueBackground className="absolute -z-[1]" />;

    case "/auth":
      return <GreenBackground className="absolute -z-[1]" />;

    case "/restore":
      return <LimeBackground className="absolute -z-[1]" />;

    case "/register":
      return <RegistrationBackgound className="absolute -z-[1]" />;

    default:
      return null;
  }
}
