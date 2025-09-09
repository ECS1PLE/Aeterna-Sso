// login/page.tsx
import MainBlock from "@/components/Blocks/MainBlock";
import Login from "./LoginForm";

export default function LoginPage() {
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
}
