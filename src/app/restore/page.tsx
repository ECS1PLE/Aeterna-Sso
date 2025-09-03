"use client";

import { useRef, useState } from "react";
import UIButton from "@/components/UI/Button/Button";
import Input, { InputHandle } from "@/components/UI/Input/Input";
import { ArrowRight, Mail, KeyRound } from "lucide-react";
import Link from "next/link";
import NumberInput from "@/components/UI/Input/Number";
import CodeStep from "@/components/UI/Time/CodeStep";

interface RestoreProps {
  step: "form" | "code" | "success";
  setStep: (s: "form" | "code" | "success") => void;
}

const Restore: React.FC<RestoreProps> = ({ step, setStep }) => {
  const emailRef = useRef<InputHandle>(null);
  const codeRef = useRef<InputHandle>(null);
  const [showErrors, setShowErrors] = useState(false);

  const handleContinue = () => {
    setShowErrors(true);

    if (step === "form") {
      const emailValid = emailRef.current?.validate() ?? false;
      if (emailValid) {
        console.log("Email:", emailRef.current!.getValue());
        setStep("code");
      }
    }

    if (step === "code") {
      const codeValid = codeRef.current?.validate() ?? false;
      if (codeValid) {
        console.log("Code:", codeRef.current!.getValue());
        setStep("success");
      }
    }
  };

  if (step === "success") {
    return (
      <section className="flex flex-col items-center gap-4">
        <p className="text-center text-sm text-gray-600">
          Пароль успешно восстановлен! Теперь вы можете войти в свой аккаунт.
        </p>
        <Link href="/login">
          <UIButton color="white">Перейти к авторизации</UIButton>
        </Link>
      </section>
    );
  }

  return (
    <>
      {step === "form" && (
        <Input ref={emailRef} icon={<Mail />} type="text" label="Почта" />
      )}

      {step === "code" && (
        <div className="w-full flex flex-col gap-[4px]">
          <div className="flex w-full ">
            <NumberInput></NumberInput>
          </div>
          <CodeStep />
        </div>
      )}

      <section className="flex flex-col gap-[12px] w-full mt-4">
        <UIButton color="white" icon={<ArrowRight />} onClick={handleContinue}>
          Продолжить
        </UIButton>
        <Link href="/login">
          <UIButton color="transparent">Назад</UIButton>
        </Link>
      </section>
    </>
  );
};

export default Restore;
