"use client";

import { useRef, useState } from "react";
import UIButton from "@/components/UI/Button/Button";
import Input, { InputHandle } from "@/components/UI/Input/Input";
import { ArrowRight } from "lucide-react";
import Mail from "@/components/UI/Icons/Mail";
import Link from "next/link";
import NumberInput from "@/components/UI/Input/Number";
import CodeStep from "@/components/UI/Time/CodeStep";
import LockCircle from "@/components/UI/Icons/LockCircle";

const Restore: React.FC = () => {
  const [step, setStep] = useState<"form" | "code" | "success">("form");
  const emailRef = useRef<InputHandle>(null);
  const codeRef = useRef<InputHandle>(null);
  const [showErrors, setShowErrors] = useState(false);

  const handleContinue = () => {
    setShowErrors(true);

    if (step === "form") {
      const emailValid = emailRef.current?.validate() ?? false;
      const email = emailRef.current?.getValue() ?? "";
      const emailHasAt = email.includes("@");

      if (emailValid && emailHasAt) {
        console.log("Форма валидна, Email:", email);
        setStep("code");
      } else {
        console.log("Email должен содержать символ '@'");
      }
    }

    if (step === "code") {
      const codeValid = codeRef.current?.validate() ?? false;
      if (codeValid) {
        const code = codeRef.current!.getValue();
        console.log("Код введён:", code);
        setStep("success");
      }
    }

    if (step === "success") {
      console.log("Пароль успешно изменён!");
    }
  };

  switch (step) {
    case "form":
      return (
        <>
          <Input ref={emailRef} icon={<Mail />} type="text" label="Почта" />

          <section className="flex flex-col gap-[12px] w-full">
            <UIButton
              color="white"
              icon={<ArrowRight />}
              onClick={handleContinue}
            >
              Продолжить
            </UIButton>
            <Link href="/login">
              <UIButton color="transparent">Назад</UIButton>
            </Link>
          </section>
        </>
      );

    case "code":
      return (
        <>
          <div className="w-full flex flex-col gap-[4px]">
            <div className="flex w-full">
              <NumberInput ref={codeRef} length={6} />
            </div>
            <CodeStep />
          </div>

          <section className="flex flex-col gap-[12px] w-full">
            <UIButton
              color="white"
              icon={<ArrowRight />}
              onClick={handleContinue}
            >
              Продолжить
            </UIButton>
            <Link href="/login">
              <UIButton color="transparent">Назад</UIButton>
            </Link>
          </section>
        </>
      );

    case "success":
      return (
        <>
          <section className="flex flex-col gap-[12px]">
            <Input
              ref={emailRef}
              type="email"
              icon={<LockCircle className="!w-[24px]" />}
              label="Пароль"
              showError={showErrors}
            />
            <Input
              isPassword
              icon={<LockCircle className="!w-[24px]" />}
              label="Пароль еще раз"
              showError={showErrors}
            />
          </section>

          <section className="flex flex-col gap-[12px] w-full">
            <Link href="/">
              <UIButton
                color="white"
                icon={<ArrowRight />}
                onClick={handleContinue}
              >
                Продолжить
              </UIButton>
            </Link>
            <Link href="/restore">
              <UIButton color="transparent">Отмена</UIButton>
            </Link>
          </section>
        </>
      );

    default:
      return null;
  }
};

export default Restore;
