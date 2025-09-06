interface LockCircleProps {
  className?: string;
}

const Mail: React.FC<LockCircleProps> = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8.37024C3 6.71339 4.34315 5.37024 6 5.37024H18C19.6569 5.37024 21 6.71339 21 8.37024V16.3702C21 18.0271 19.6569 19.3702 18 19.3702H6C4.34315 19.3702 3 18.0271 3 16.3702V8.37024Z"
        stroke="#737373"
        stroke-width="2"
      />
      <path
        d="M7 9.37024L12 13.3702L17 9.37024"
        stroke="#737373"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Mail;
