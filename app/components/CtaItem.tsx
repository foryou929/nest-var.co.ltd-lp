import Link from "next/link";

import Button from "./Button";

interface CtaItemProps {
    children?: React.ReactNode;
    type?: string;
    title: string;
    frame: string;
    href: string;
    button: string;
}

const CtaItem: React.FC<CtaItemProps> = ({ children, type, title, frame, href, button }) => {
    return (
        <div className={`px-[24px] xl:px-[64px] py-[40px] flex flex-col justify-between ${type == "primary" ? "bg-gray-900 rounded-t-[16px] xl:rounded-none xl:rounded-l-[16px]" : "bg-gray-800 rounded-b-[16px] xl:rounded-none xl:rounded-r-[16px]"}`}>
            <div>
                <div className="relative text-right">
                    <p className={`text-5xl ${type == "primary" ? "text-gray-800" : "text-gray-700"} font-bold`}>
                        {frame}
                    </p>
                    <h3 className="absolute left-0 top-0 text-2xl font-bold text-white">{title}</h3>
                </div>
                <div className="font-medium text-white mt-[24px]">
                    {children}
                </div>
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