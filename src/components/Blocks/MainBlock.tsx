import Logo from "../Illustrations/Logo";

interface MainBlockProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  text?: string;
}

const MainBlock: React.FC<MainBlockProps> = ({
  children,
  className,
  title,
  text,
}) => {
  return (
    <div className="flex min-h-screen">
      <div
        className={`flex h-auto sm:w-[409px] flex-col items-start p-11 gap-[43px] 
                bg-gradient-to-b from-[#1F1F1F] to-[#0A0A0A] border-[0.5px] border-neutral-600 
                rounded-3xl ml-[248px] mt-auto mb-auto ${className}`}
      >
        <Logo />
        <div className="flex flex-col gap-[4px]">
          <h2 className="text-white text-3xl leading-[40px] tracking-[-1.8px] font-normal font-geologica">
            {title}
          </h2>
          <p className="text-[#626262] text-[16px] leading-[16px] tracking-[-0.8px] font-normal font-geologica">
            {text}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MainBlock;
