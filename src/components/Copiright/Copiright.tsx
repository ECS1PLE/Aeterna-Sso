interface Copiright {
  className?: string;
}

const Copiright: React.FC<Copiright> = ({ className }) => {
  return (
    <div className="w-full flex justify-center">
      <p
        className={`font-geologica font-normal text-base leading-6 tracking-[-0.4px] text-neutral-500 ${className}`}
      >
        Copyright© Aeterna 2025. All rights reserved
      </p>
    </div>
  );
};

export default Copiright;
