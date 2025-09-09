"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BlueSphere from "../Sphere/Blue";
import GreenSphere from "../Sphere/Green";
import LimeSphere from "../Sphere/Lime";

interface SphereData {
  key: string;
  component: React.ReactNode;
  style: React.CSSProperties;
  origin: string;
  rotate?: number;
  from?: { x?: number; y?: number };
}

const SphereWrapper = ({ sphere }: { sphere: SphereData }) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        ...sphere.style,
        transformOrigin: sphere.origin,
      }}
      initial={{
        opacity: 0,
        scale: 0,
        x: sphere.from?.x ?? 0,
        y: sphere.from?.y ?? 0,
        rotate: sphere.rotate ?? 0,
      }}
      animate={{
        opacity: 0.7,
        scale: 1,
        x: 0,
        y: 0,
        rotate: sphere.rotate ?? 0,
      }}
      exit={{
        opacity: 0,
        scale: 0,
        x: sphere.from?.x ?? 0,
        y: sphere.from?.y ?? 0,
        rotate: sphere.rotate ?? 0,
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {sphere.component}
    </motion.div>
  );
};

const BackgroundPages = () => {
  const pathname = usePathname() ?? "";

  const spheres: Record<string, SphereData[]> = {
    login: [
      {
        key: "login-top",
        component: <BlueSphere />,
        style: { top: 0, right: -200, width: 2033, height: 2033 },
        origin: "top right",
        from: { x: -200, y: -200 },
      },
      {
        key: "login-bottom",
        component: <BlueSphere />,
        style: { bottom: 1000, right: 700, width: 1433, height: 1433 },
        origin: "bottom right",
        from: { x: -950, y: 1200 },
        rotate: 180,
      },
    ],
    auth: [
      {
        key: "auth-bottom-right",
        component: <GreenSphere />,
        style: { bottom: -346, right: 0, width: 1920, height: 1080 },
        origin: "bottom right",
        from: { x: -1200, y: 650 },
      },
      {
        key: "auth-top-right",
        component: <GreenSphere />,
        style: { top: 720, right: 1600, width: 1920, height: 1080 },
        origin: "top right",
        from: { x: 800, y: -1000 },
        rotate: 180,
      },
    ],
    restore: [
      {
        key: "restore-right",
        component: <LimeSphere className="w-auto h-full" />,
        style: { top: "0%", right: 0, transform: "translateY(-50%)" },
        origin: "center right",
        from: { x: 800, y: 0 },
      },
      {
        key: "restore-left",
        component: <LimeSphere className="w-auto h-full rotate-180" />,
        style: {
          top: "0%",
          left: 0,
          transform: "translateY(-50%)",
        },
        origin: "center left",
        from: { x: -800, y: -300 },
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

      <AnimatePresence>
        {currentSpheres.map((s) => (
          <SphereWrapper key={s.key} sphere={s} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundPages;
