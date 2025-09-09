"use client";

import { useState } from "react";
import MainBlock from "@/components/Blocks/MainBlock";
import Restore from "./RestoreForm";

export default function RestorePage() {
  const [step, setStep] = useState<"form" | "code" | "success">("form");

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
}
