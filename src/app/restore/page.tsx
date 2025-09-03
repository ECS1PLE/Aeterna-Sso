"use client";

import MainBlock from "@/components/Blocks/MainBlock";
import UIButton from "@/components/UI/Button/Button";
import Input, { InputHandle } from "@/components/UI/Input/Input";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const Restore = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const emailRef = useRef<InputHandle>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const passwordRef = useRef<InputHandle>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      <Input icon={<Mail />} type="text" label="Почта" />
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
