import clsx from "clsx";
import Link from "next/link";

import Button from "@/app/components/button";
import { inter } from "@/app/constants/font";

interface Props {
    children?: React.ReactNode;
    type?: string;
    title: string;
    frame: string;
    href: string;
    button: string;
}

const CtaItem: React.FC<Props> = ({ children, type, title, frame, href, button }) => {
    return (
        <div className={
            clsx(
                "px-[24px] xl:px-[64px] py-[40px] flex flex-col justify-between",
                type == "primary" ? "bg-gray-900 rounded-t-[16px] xl:rounded-none xl:rounded-l-[16px]" : "bg-gray-800 rounded-b-[16px] xl:rounded-none xl:rounded-r-[16px]"
            )}>
            <div>
                <div className="relative text-right">
                    <p className={
                        clsx(
                            inter.className,
                            type == "primary" ? "text-gray-800" : "text-gray-700",
                            "text-5xl leading-[40px] font-bold",
                        )}>
                        {frame}
                    </p>
                    <h3 className="absolute left-0 top-0 leading-[36px] text-2xl font-bold text-white">{title}</h3>
                </div>
                <p className="mt-[24px] text-white">
                    {children}
                </p>
            </div>
            <div className="mt-[40px]">
                <Link href={href}>
                    <Button type={type}>
                        {button}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default CtaItem;