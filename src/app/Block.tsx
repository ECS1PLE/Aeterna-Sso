"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import MainBlock from "@/components/Blocks/MainBlock";
import Restore from "./restore/page";
import Login from "./login/page";
import AuthPage from "./auth/page";

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
  const [authStepIndex, setAuthStepIndex] = useState(0);
  const [step, setStep] = useState<"form" | "code" | "success">("form");

  const handleNextMethod = () => {
    if (authStepIndex < authSteps.length - 1) {
      setAuthStepIndex(authStepIndex + 1);
    }
  };

  switch (pathname) {
    case "/login":
      return (
        <MainBlock
          title="Авторизация"
          text="Для входа в аккаунт Aeterna введите ваши данные"
          className="relative z-1 w-screen sm:!w-[409px] w-full gap-[43px]"
          ContainerClass="min-h-screen sm:ml-[248px]"
        >
          <Login />
        </MainBlock>
      );

    case "/restore":
      return (
        <MainBlock
          className="sm:!ml-[248px] mt-auto mb-auto w-screen sm:w-[409px] gap-[43px] max-h-[530px]"
          title={
            step === "form"
              ? "Восстановление пароля"
              : step === "code"
              ? "Проверьте почту"
              : "Новый пароль"
          }
          text={
            step === "form"
              ? "Для восстановления пароля введите почту, к которой привязан ваш аккаунт"
              : step === "code"
              ? "Введите код, который был отправлен вам на почту wi****g@gmail.com"
              : "Введите новый пароль от учетной записи. Он будет использоваться для входа"
          }
          ContainerClass="h-full"
        >
          <Restore />
        </MainBlock>
      );

    case "/auth":
      const currentStep = authSteps[authStepIndex];

      return (
        <MainBlock
          className="mt-auto mb-auto gap-[43px] w-screen sm:w-[409px]"
          ContainerClass="min-h-screen sm:ml-[248px]"
          title={currentStep.title}
          text={currentStep.text}
        >
          <AuthPage />
        </MainBlock>
      );

    case "/register":
      return <MainBlock></MainBlock>;

    default:
      return null;
  }
};

export default Block;
