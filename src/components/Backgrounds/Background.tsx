"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BlueSphere from "../Sphere/Blue";
import GreenSphere from "../Sphere/Green";
import LimeSphere from "../Sphere/Lime";

interface SphereWrapperProps {
  children: React.ReactNode;
  className?: string;
  keyProp: string; // уникальный ключ для layout анимации
}

const SphereWrapper = ({
  children,
  className,
  keyProp,
}: SphereWrapperProps) => (
  <motion.div
    layout // <--- вот это позволяет анимировать перемещение
    key={keyProp}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.7, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className={`absolute ${className}`}
  >
    {children}
  </motion.div>
);

const BackgroundPages = () => {
  const pathname = usePathname() ?? "";

  const spheres = {
    login: [
      {
        key: "login-top",
        className: "top-0 -right-[1200px] -translate-x-1/2 w-[2033px]",
        component: <BlueSphere />,
      },
      {
        key: "login-bottom",
        className: "-bottom-[580px] -right-[700px] rotate-180 w-[1433px]",
        component: <BlueSphere />,
      },
    ],
    auth: [
      {
        key: "auth-bottom-right",
        className: "right-0 w-full -bottom-[250px] h-full",
        component: <GreenSphere />,
      },
      {
        key: "auth-top-right",
        className: "-top-[250px] -right-[300px] rotate-180 h-full",
        component: <GreenSphere />,
      },
    ],
    restore: [
      {
        key: "restore-top-left",
        className: "top-0 left-0 rotate-180",
        component: <LimeSphere />,
      },
      {
        key: "restore-bottom-right",
        className: "bottom-0 right-0",
        component: <LimeSphere />,
      },
    ],
  };

  const currentSpheres =
    pathname === "/login"
      ? spheres.login
      : pathname === "/auth"
      ? spheres.auth
      : pathname === "/restore"
      ? spheres.restore
      : [];

  return (
    <div className="absolute inset-0 -z-[1] overflow-hidden">
      {/* SVG фон */}
      <svg
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <g clipPath="url(#clip0_2233_1152)">
          <rect width="1920" height="1080" fill="#0A0A0A" />
          <g style={{ mixBlendMode: "luminosity" }} opacity="0.07">
            <path
              d="M1745.67 964.166L1665.61 745.833L1385.42 527.5V745.833L1745.67 964.166Z"
              fill="white"
            />
            <path
              d="M1309 -193L1527.33 -193L1003.33 1117L785 1117L1309 -193Z"
              fill="white"
            />
            <path
              d="M1221.14 845.393L1385.42 745.833V527.5L1336.42 557.193L1221.14 845.393Z"
              fill="white"
            />
            <path
              d="M1385.42 25.3332L1767.5 1117H1985.83L1527.33 -193L1385.42 25.3332Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2233_1152">
            <rect width="1920" height="1080" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <AnimatePresence mode="wait">
        {currentSpheres.map((s) => (
          <SphereWrapper key={s.key} keyProp={s.key} className={s.className}>
            {s.component}
          </SphereWrapper>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundPages;
