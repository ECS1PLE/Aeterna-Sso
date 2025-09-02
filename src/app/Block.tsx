"use client";

import { usePathname } from "next/navigation";
import MainBlock from "@/components/Blocks/MainBlock";
import Auth from "./auth/page";

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
      return <MainBlock></MainBlock>;
    case "/register":
      return <MainBlock></MainBlock>;
    default:
      return null;
  }
};

export default Block;
