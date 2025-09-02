"use client";

import MainBlock from "@/components/Blocks/MainBlock";
import UIButton from "@/components/UI/Button/Button";
import Input, { InputHandle } from "@/components/UI/Input/Input";
import { ArrowRight, LockIcon, Mail } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";
import Copiright from "@/components/Copiright/Copiright";
import Logo from "@/components/Illustrations/Logo";

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
    <section className="flex max-h-screen flex-col w-auto sm:!w-[50%] items-center">
      <div className="flex flex-col sm:!w-[480px] !h-screen py-[64px] justify-between">
        <Logo className="h-[26px]" />
        <MainBlock
          className="!border-0 !m-0 bg-none sm:w-[480px] !p-0 !h-min"
          title="Регистрация"
          text="Заполните небольшую форму для создания аккаунта Aeterna"
          showLogo={false}
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
        </MainBlock>
        <Copiright />
      </div>
    </section>
  );
};

export default Registration;
