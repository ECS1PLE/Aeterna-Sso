interface LockCircleProps {
  className?: string;
}

export default function LockCircle({ className = "" }: LockCircleProps) {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={`stroke-current h-[25px] ${className}`}
    >
      <path
        d="M6 15.3702C6 12.0565 8.68629 9.37024 12 9.37024C15.3137 9.37024 18 12.0565 18 15.3702C18 18.6839 15.3137 21.3702 12 21.3702C8.68629 21.3702 6 18.6839 6 15.3702Z"
        strokeWidth="2"
      />
      <path
        d="M15 10.3702V6.37024C15 4.71339 13.6569 3.37024 12 3.37024C10.3431 3.37024 9 4.71338 9 6.37024V10.3702"
        strokeWidth="2"
      />
      <path d="M12 14.3702V16.3702" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
