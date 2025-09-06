"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import BackgroundPages from "@/components/Backgrounds/Background";
import RegistrationBackgound from "@/components/Backgrounds/Registration";

export default function Background() {
  const pathname = usePathname() ?? "";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflowX = "auto";
    };
  }, []);

  if (pathname === "/register") {
    return isMobile ? (
      <div className="w-full bg-black"></div>
    ) : (
      <RegistrationBackgound className="absolute -z-[1]" />
    );
  }

  return <BackgroundPages />;
}
