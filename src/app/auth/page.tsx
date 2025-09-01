import UIButton from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";
import { Mail } from "lucide-react";
import { LockIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

const auth = () => {
  return (
    <>
      <section className="flex flex-col gap-[12px]">
        <Input icon={<Mail />} label="E-Mail"></Input>
        <Input icon={<LockIcon />} label="Пароль" isPassword={true}></Input>
      </section>
      <section className="flex flex-col gap-[12px] w-full">
        <UIButton color="white" icon={<ArrowRight />}>
          Продолжить
        </UIButton>
        <UIButton color="transparent">Создать аккаунт</UIButton>
      </section>
    </>
  );
};

export default auth;
