"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import MainBlock from "@/components/Blocks/MainBlock";
import Restore from "./restore/page";
import Login from "./login/page";

const Block = () => {
  const pathname = usePathname();
  const [step, setStep] = useState<"form" | "code" | "success">("form");

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
      return <MainBlock></MainBlock>;

    case "/register":
      return <MainBlock></MainBlock>;

    default:
      return null;
  }
};

export default Block;
