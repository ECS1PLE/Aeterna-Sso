"use client";

import { useState } from "react";
import MainBlock from "@/components/Blocks/MainBlock";
import AuthPage from "./AuthForm";

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

export default function AuthPageWrapper() {
  const [authStepIndex, setAuthStepIndex] = useState(0);
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
}
