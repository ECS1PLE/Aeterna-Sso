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
          className="relative z-1"
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
