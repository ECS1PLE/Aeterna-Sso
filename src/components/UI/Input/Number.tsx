"use client";

import React, { useEffect, useRef, useState } from "react";

interface OtpInputProps {
  length?: number;
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 6 }) => {
  const [values, setValues] = useState<string[]>(() => Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    setValues((prev) => Array.from({ length }, (_, i) => prev[i] ?? ""));
    inputsRef.current = Array.from(
      { length },
      (_, i) => inputsRef.current[i] ?? null
    );
  }, [length]);

  const handleChange = (index: number, value: string) => {
    const v = value.replace(/\D/g, "").slice(0, 1);
    setValues((prev) => {
      const next = [...prev];
      next[index] = v;
      return next;
    });
    if (v && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);
    if (!pasted) return;
    const next = Array.from({ length }, (_, i) => pasted[i] ?? "");
    setValues(next);
    const nextIndex = Math.min(pasted.length, length - 1);
    inputsRef.current[nextIndex]?.focus();
  };

  return (
    <div className="flex w-full justify-between">
      {values.map((val, i) => (
        <input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={val}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={i === 0 ? handlePaste : undefined}
          placeholder="5"
          className="
            flex items-center justify-center 
            border border-[1px] border-neutral-800 
            text-neutral-500 font-sans text-lg 
            w-[43px] h-[52px] rounded-2xl 
            text-center 
            focus:outline-none focus:ring-0
            transition-opacity duration-300 ease-in-out
          "
        />
      ))}
    </div>
  );
};

export default OtpInput;
