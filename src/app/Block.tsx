"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import MainBlock from "@/components/Blocks/MainBlock";
import Restore from "./restore/page";
import Login from "./login/page";
import Auth from "./auth/page";

// 4 шага для /auth
const authSteps = [
  {
    id: "totp",
    title: "Откройте телефон",
    text: "Введите код из приложения для генерации одноразовых паролей",
    component: Auth,
  },
  {
    id: "sms",
    title: "Проверьте Telegram",
    text: "Введите код, который был отправлен вам на ваш Telegram аккаунт @AB*****CH",
    component: Auth,
  },
  {
    id: "email",
    title: "Откройте приложение",
    text: "Отсканируйте QR-код в приложении Aetérna",
    component: Auth,
  },
  {
    id: "backup",
    title: "Проврьте почту",
    text: "Введите код, который был отправлен вам на почту wi****g@gmail.com",
    component: Auth,
  },
] as const;

const Block = () => {
  const pathname = usePathname();
  const [step, setStep] = useState<"form" | "code" | "success">("form");
  const [authStepIndex, setAuthStepIndex] = useState(0);

  const handleNextMethod = () => {
    setAuthStepIndex((prev) => (prev + 1) % authSteps.length);
  };

  switch (pathname) {
    case "/login":
      return (
        <MainBlock
          title="Авторизация"
          text="Для входа в аккаунт Aeterna введите ваши данные"
          className="relative z-1 sm:!w-[409px] w-full gap-[43px]"
          ContainerClass="min-h-screen sm:ml-[248px]"
        >
          <Login />
        </MainBlock>
      );

    case "/restore":
      return (
        <MainBlock
          className="sm:!ml-[248px] mt-auto mb-auto w-[409px] gap-[32px] max-h-[530px]"
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
      const StepComponent = currentStep.component;

      return (
        <MainBlock
          className="ml-[248px] mt-auto mb-auto gap-[43px] w-[409px]"
          ContainerClass="min-h-screen sm:ml-[248px]"
          title={currentStep.title}
          text={currentStep.text}
        >
          <StepComponent
            stepId={currentStep.id}
            onAnotherMethod={handleNextMethod}
          />
        </MainBlock>
      );

    case "/register":
      return <MainBlock></MainBlock>;

    default:
      return null;
  }
};

export default Block;
