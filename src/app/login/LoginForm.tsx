"use client";

import React, { useRef, useState } from "react";
import UIButton from "@/components/UI/Button/Button";
import Input, { InputHandle } from "@/components/UI/Input/Input";
import Mail from "@/components/UI/Icons/Mail";
import { LockIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import LockCircle from "@/components/UI/Icons/LockCircle";

const Login = () => {
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
    <>
      <div className="flex flex-col gap-[4px]">
        <section className="flex flex-col gap-[12px]">
          <Input
            ref={emailRef}
            type="email"
            icon={<Mail />}
            label="E-Mail"
            showError={showErrors}
          />
          <Input
            ref={passwordRef}
            isPassword
            icon={<LockCircle className="!w-[24px]" />}
            label="Пароль"
            showError={showErrors}
          />
        </section>
        <Link href="/restore">
          <p className="font-geologica font-normal text-[12px] leading-[16px] flex items-center tracking-[-0.8px] text-[#404040]">
            Забыли пароль?
          </p>
        </Link>
      </div>
      <section className="flex flex-col gap-[12px] w-full">
        <Link href="/auth">
          <UIButton
            color="white"
            icon={<ArrowRight />}
            onClick={handleContinue}
          >
            Продолжить
          </UIButton>
        </Link>
        <Link href="/register">
          <UIButton color="transparent">Создать аккаунт</UIButton>
        </Link>
      </section>
    </>
  );
};

export default Login;
