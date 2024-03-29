"use client";
import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link'

import Menu from '@/app/components/menu';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed left-0 top-0 z-40 w-full">
            <div className="px-[16px] md:px-[60px] xl:px-[120px] 2xl:px-[320px] py-[16px]">
                <div className="w-full h-[64px] xl:h-[80px] bg-white text-black rounded-[16px] px-[16px] xl:px-[40px] py-[16px] flex justify-between items-center">
                    <Link href='/'>
                        <Image alt="logo" src="/logo.png" width={48} height={48} />
                    </Link>
                    <div className="xl:hidden" onClick={toggleMenu}>
                        <Image alt="menu" src="/bars-3-bottom-right.png" width={48} height={48} />
                    </div>
                    <Menu />
                </div>
            </div>
            <div className={
                clsx(
                    isOpen ? "right-0" : "-right-[400px]",
                    "fixed top-0 w-full max-w-[400px] h-full bg-black text-white px-[16px] md:px-[60px] py-[16px] transition-all duration-500"
                )}>
                <div className="w-full h-[64px] xl:h-[80px] rounded-[16px] px-[16px] xl:px-[40px] py-[16px] flex justify-between items-center">
                    <Link href='/'>
                        <Image alt="logo" src="/logo.png" width={48} height={48} />
                    </Link>
                    <div className="xl:hidden" onClick={toggleMenu}>
                        <Image alt="menu" src="/x-mark.png" width={48} height={48} />
                    </div>
                </div>
                <Menu isToggleMenu />
            </div>
        </header >
    )
}

export default Header;