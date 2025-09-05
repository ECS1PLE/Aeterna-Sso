"use client";

import Qr from "@/components/Illustrations/QR";
import UIButton from "@/components/UI/Button/Button";
import NumberInput from "@/components/UI/Input/Number";
import CodeStep from "@/components/UI/Time/CodeStep";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface AuthProps {
  stepId: "totp" | "sms" | "email" | "backup";
  onAnotherMethod: () => void;
}

const Auth: React.FC<AuthProps> = ({ stepId, onAnotherMethod }) => {
  const renderFields = () => {
    switch (stepId) {
      case "totp":
        return (
          <>
            <div className="flex justify-between">
              <NumberInput />
            </div>
            <p
              className="font-geologica font-normal text-[12px] leading-[16px] tracking-[-0.0667em] text-neutral-500 cursor-pointer"
              onClick={onAnotherMethod}
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
              className="font-geologica font-normal text-[12px] leading-[16px] tracking-[-0.0667em] text-neutral-500 cursor-pointer"
              onClick={onAnotherMethod}
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
              onClick={onAnotherMethod}
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
            <p
              className="font-geologica font-normal text-[12px] leading-[16px] tracking-[-0.0667em] text-neutral-500 cursor-pointer"
              onClick={onAnotherMethod}
            >
              Другой способ
            </p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-col w-full gap-[4px]">{renderFields()}</div>

      <section className="flex flex-col gap-[12px] w-full mt-4">
        <UIButton color="white" icon={<ArrowRight />}>
          Продолжить
        </UIButton>
        <Link href="/register">
          <UIButton color="transparent">Создать аккаунт</UIButton>
        </Link>
      </section>
    </>
  );
};

export default Auth;
