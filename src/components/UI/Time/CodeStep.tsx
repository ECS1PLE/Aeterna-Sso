import { useEffect, useState } from "react";

const CodeStep = () => {
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <p className="font-geologica font-normal text-[12px] leading-[16px] flex items-center tracking-[-0.8px] text-[#404040]">
      Отправить код еще раз {formatTime(timeLeft)}
    </p>
  );
};

export default CodeStep;
