"use client";

import { usePathname } from "next/navigation";
import MainBlock from "@/components/Blocks/MainBlock";

const Block = () => {
    const pathname = usePathname()
    switch(pathname){
        case '/login':
            return <MainBlock className="relative z-1"></MainBlock>
        case '/auth':
            return <MainBlock></MainBlock>
        case '/restore':
            return <MainBlock></MainBlock>
        case '/register':
            return <MainBlock></MainBlock>
        default:
            return null;
    }
}

export default Block;