import Logo from "../Illustrations/Logo";

interface MainBlockProps {
    children?: React.ReactNode;
    className?: string;
}

const MainBlock: React.FC<MainBlockProps> = ({ children, className }) => {
    return (
        <div className="flex min-h-screen">
            <div
                className={`flex h-auto max-w-[409px] flex-col items-start p-11 gap-[43px] 
                bg-gradient-to-b from-[#1F1F1F] to-[#0A0A0A] border-[0.5px] border-neutral-600 
                rounded-3xl ml-[248px] mt-auto mb-auto ${className}`}
            >   
                <Logo />
                {children}
            </div>
        </div>
    );
};

export default MainBlock;
