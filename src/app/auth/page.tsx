"use client";

import Qr from "@/components/Illustrations/QR";
import UIButton from "@/components/UI/Button/Button";
import NumberInput from "@/components/UI/Input/Number";
import CodeStep from "@/components/UI/Time/CodeStep";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AuthPage() {
  const steps: Array<"totp" | "sms" | "email" | "backup"> = [
    "totp",
    "sms",
    "email",
    "backup",
  ];
  const [stepId, setStepId] = useState<"totp" | "sms" | "email" | "backup">(
    "totp"
  );

  const handleAnotherMethod = () => {
    const index = steps.indexOf(stepId);
    if (index < steps.length - 1) setStepId(steps[index + 1]);
  };

  const renderFields = () => {
    switch (stepId) {
      case "totp":
        return (
          <>
            <NumberInput />
            <p
              className="font-geologica font-normal text-[12px] leading-[16px] tracking-[-0.0667em] text-neutral-500 cursor-pointer"
              onClick={handleAnotherMethod}
            >
              Другой способ
            </p>
          </>
        );
      case "sms":
        return (
          <>
            <NumberInput />
            <CodeStep />
            <p
              className="font-geologica font-normal text-[12px] leading-[16px] tracking-[-0.0667em] cursor-pointer text-neutral-500 "
              onClick={handleAnotherMethod}
            >
              Другой способ
            </p>
          </>
        );
      case "email":
        return (
          <>
            <Qr />
            <CodeStep />
            <p
              className="font-geologica font-normal text-[12px] leading-[16px] tracking-[-0.0667em] text-neutral-500 cursor-pointer"
              onClick={handleAnotherMethod}
            >
              Другой способ
            </p>
          </>
        );
      case "backup":
        return (
          <>
            <NumberInput />
            <CodeStep />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full">{renderFields()}</div>

      <section className="flex flex-col gap-[12px] w-full mt-[43px]">
        <UIButton color="white" icon={<ArrowRight />}>
          Продолжить
        </UIButton>
        <Link href="/register">
          <UIButton color="transparent">
            {stepId === "totp" ? "Создать аккаунт" : "Создать новый аккаунт"}
          </UIButton>
        </Link>
      </section>
    </div>
  );
}
