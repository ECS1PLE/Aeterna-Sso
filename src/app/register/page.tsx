"use client";

import MainBlock from "@/components/Blocks/MainBlock";
import UIButton from "@/components/UI/Button/Button";
import Input, { InputHandle } from "@/components/UI/Input/Input";
import { ArrowRight, LockIcon, Mail } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";
import Copiright from "@/components/Copiright/Copiright";

const Registration = () => {
  const emailRef = useRef<InputHandle>(null);
  const passwordRef = useRef<InputHandle>(null);
  const [showErrors, setShowErrors] = useState(false);

  const handleContinue = () => {
    setShowErrors(true);

    const emailValid = emailRef.current?.validate() ?? false;
    const passwordValid = passwordRef.current?.validate() ?? false;

    if (emailValid && passwordValid) {
      const email = emailRef.current!.getValue();
      const password = passwordRef.current!.getValue();
      console.log("Форма валидна:", { email, password });
    }
  };
  return (
    <section className="flex min-h-screen flex-col w-auto sm:!w-[50%]">
      <MainBlock
        className="!border-0 bg-none !mx-auto sm:!w-[480px] !h-full py-[64px] justify-between"
        title="Регистрация"
        text="Заполните небольшую форму для создания аккаунта Aeterna"
      >
        <div className="flex flex-col gap-4 w-full">
          <Input
            ref={emailRef}
            type="email"
            icon={<Mail />}
            label="Почта"
            showError={showErrors}
            className="w-full"
          />
          <Input
            ref={passwordRef}
            isPassword
            icon={<LockIcon />}
            label="Пароль"
            showError={showErrors}
            className="w-full"
          />
          <Input
            ref={passwordRef}
            isPassword
            icon={<LockIcon />}
            label="Пароль еще раз"
            showError={showErrors}
            className="w-full"
          />
        </div>
        <section className="flex flex-col gap-[12px] w-full mt-4">
          <UIButton
            color="white"
            icon={<ArrowRight />}
            onClick={handleContinue}
          >
            Продолжить
          </UIButton>
          <Link href="/login">
            <UIButton color="transparent">У меня уже есть аккаунт</UIButton>
          </Link>
        </section>
        <Copiright />
      </MainBlock>
    </section>
  );
};

export default Registration;
