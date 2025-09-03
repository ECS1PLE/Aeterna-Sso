"use client";

import { usePathname } from "next/navigation";
import MainBlock from "@/components/Blocks/MainBlock";
import Auth from "./auth/page";
import Restore from "./restore/page";

const Block = () => {
  const pathname = usePathname();
  switch (pathname) {
    case "/login":
      return (
        <MainBlock
          title="Авторизация"
          text="Для входа в аккаунт Aeterna введите ваши данные"
          className="relative z-1 sm:!w-[409px] w-full  gap-[43px]"
          ContainerClass="min-h-screen sm:ml-[248px]"
        >
          <Auth />
        </MainBlock>
      );
    case "/auth":
      return <MainBlock></MainBlock>;
    case "/restore":
      return (
        <MainBlock
          className="sm:!ml-[248px] mt-auto mb-auto w-[409px] gap-[43px] max-h-[481px]"
          text="Для восстановление пароля введите почту, к которой привязан ваш аккаунт"
          title="Восстановление пароля"
          ContainerClass="h-full"
        >
          <Restore />
        </MainBlock>
      );
    case "/register":
      return <MainBlock></MainBlock>;
    default:
      return null;
  }
};

export default Block;
