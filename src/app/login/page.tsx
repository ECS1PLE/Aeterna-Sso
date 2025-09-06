"use client";

import React, { useRef, useState } from "react";
import UIButton from "@/components/UI/Button/Button";
import Input, { InputHandle } from "@/components/UI/Input/Input";
import { Mail } from "lucide-react";
import { LockIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
          icon={<LockIcon />}
          label="Пароль"
          showError={showErrors}
        />
      </section>

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
        <Link href="/restore">
          <UIButton color="transparent">Забыли пароль?</UIButton>
        </Link>
      </section>
    </>
  );
};

export default Login;
