import React, { useState, useEffect, useRef } from "react";

interface InputProps {
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  label?: string;
  isPassword?: boolean;
  defaultValue?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  icon,
  label,
  isPassword = false,
  defaultValue = "",
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && inputRef.current.value) {
      setValue(inputRef.current.value);
    }
  }, []);

  return (
    <div className="relative w-[321px] h-[52px]">
      <div
        className="relative flex items-center w-full h-full border border-[1px] border-neutral-800 
        rounded-2xl bg-transparent"
      >
        {(icon || label) && (
          <div
            className={`absolute flex items-center gap-[6px] left-[14px] transition-all duration-300 pointer-events-none
            ${
              focused || value
                ? "top-[-10px] scale-90 text-neutral-400"
                : "top-[15px] text-neutral-500"
            }`}
          >
            {icon &&
              React.cloneElement(icon, {
                className:
                  "stroke-current w-[18px] h-[18px] transition-all duration-300",
              })}
            {label && (
              <span className="font-[Geologica] text-sm transition-all duration-300">
                {label}
              </span>
            )}
          </div>
        )}

        <input
          ref={inputRef}
          className="peer w-full h-full pl-[20px] pr-[12px] bg-transparent outline-none 
          text-sm font-normal font-[Geologica] text-neutral-200 autofill:shadow-[inset_0_0_0px_1000px_none]
          autofill:caret-neutral-200 autofill:text-neutral-200"
          type={isPassword ? "password" : "text"}
          defaultValue={defaultValue}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
    </div>
  );
};

export default Input;
