"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import MainBlock from "@/components/Blocks/MainBlock";
import dynamic from "next/dynamic";
import LoginPage from "./login/page";
import RestorePage from "./restore/page";
import AuthPageWrapper from "./auth/page";

const authSteps = [
  {
    id: "totp",
    title: "Откройте телефон",
    text: "Введите код из приложения для генерации одноразовых паролей",
  },
  {
    id: "sms",
    title: "Проверьте Telegram",
    text: "Введите код, который был отправлен вам на ваш Telegram аккаунт @AB*****CH",
  },
  {
    id: "email",
    title: "Откройте приложение",
    text: "Отсканируйте QR-код в приложении Aetérna",
  },
  {
    id: "backup",
    title: "Проверьте почту",
    text: "Введите код, который был отправлен вам на почту wi****g@gmail.com",
  },
] as const;

const Block = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  const [authStepIndex, setAuthStepIndex] = useState(0);
  const [step, setStep] = useState<"form" | "code" | "success">("form");

  useEffect(() => setMounted(true), []);

  if (!mounted || !pathname) return null;

  const currentStep = authSteps[authStepIndex];

  switch (pathname) {
    case "/login":
      return <LoginPage />;

    case "/restore":
      return <RestorePage />;

    case "/auth":
      return <AuthPageWrapper />;

    case "/register":
      return <MainBlock></MainBlock>;

    default:
      return null;
  }
};

export default Block;
