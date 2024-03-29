import clsx from 'clsx';
import Link from 'next/link'

import Button from "@/app/components/button"
import TRANSLATION from '@/app/constants/translates';

interface MenuComponentProps {
    className?: string;
    isToggleMenu?: boolean;
}

const Menu: React.FC<MenuComponentProps> = ({ className, isToggleMenu }) => {
    return (
        <div className={clsx(
            isToggleMenu ? "block px-[16px] xl:px-[40px]" : "hidden",
            "mt-[40px] xl:mt-0 xl:flex gap-[40px] flex-col xl:flex-row",
            className
        )}>
            <ul className="flex flex-col xl:flex-row gap-[24px] xl:items-center">
                <li className="font-bold">
                    <Link href={"/service"}>
                        {TRANSLATION.MENU.SERVICE}
                    </Link>
                </li>
                <li className="font-bold">
                    <Link href={"/company"}>
                        {TRANSLATION.MENU.CORPORATE_INTELLIGENCE}
                    </Link>
                </li>
                <li className="font-bold">
                    <Link href={"/recruit"}>
                        {TRANSLATION.MENU.RECRUIT}
                    </Link>
                </li>
                <li className="font-bold">
                    <Link href={"/news"}>
                        {TRANSLATION.MENU.NEWS}
                    </Link>
                </li>
            </ul>
            <div className="mt-[40px] xl:mt-0 flex flex-col xl:flex-row gap-[8px]">
                <Link href={"/contact"}>
                    <Button className="w-full xl:w-[184px]" type="primary" size="xs">
                        {TRANSLATION.MENU.CONTACT}
                    </Button>
                </Link>
                <Link href={"/document"}>
                    <Button className="w-full xl:w-[184px] border border-black" type="secondary" size="xs">
                        {TRANSLATION.MENU.DOCUMENT}
                    </Button>
                </Link>
            </div>
        </div >
    )
}

export default Menu;