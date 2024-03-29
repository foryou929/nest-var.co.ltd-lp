import Image from "next/image";
import Link from "next/link";

import Button from "./Button";

import TRANSLATION from "../constants/TRANSLATE";

const Footer = () => {
    return (
        <footer className="px-[16px] md:px-[60px] xl:px-[120px] 2xl:px-[320px] py-[80px] bg-black flex flex-col gap-[8px]">
            <div className="flex flex-col xl:flex-row">
                <div className="xl:w-[425px] flex flex-col gap-[8px]">
                    <Image alt="footer-logo" src="/footer-logo.png" width={64} height={64} />
                    <h4 className="text-xl font-bold text-white">
                        {TRANSLATION.FOOTER.COMPANY_NAME}
                    </h4>
                    <div className="font-medium text-white">
                        <p>{TRANSLATION.FOOTER.COMPANY_NAME}</p>
                        <p>{TRANSLATION.FOOTER.ADDRESS}</p>
                    </div>
                    <div className="flex gap-[8px] font-medium text-gray-800">
                        <Link className="border-b border-b-gray-800" href={"https://twitter.com/RaretechO"}>
                            {TRANSLATION.FOOTER.TWITTER}
                        </Link>
                        <Link className="border-b border-b-gray-800" href={"https://zenn.dev/var"}>
                            {TRANSLATION.FOOTER.ZENN}
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                    <div className="mt-[40px] flex flex-col xl:flex-row gap-[16px] xl:gap-[40px]">
                        <div className="flex flex-col gap-[8px]">
                            <h6 className="font-bold text-white">
                                {TRANSLATION.FOOTER.SERVICE}
                            </h6>
                            <p className="font-medium text-gray-800">
                                {TRANSLATION.FOOTER.SERVICES.IT_SCHOOL_RARETECH}
                            </p>
                            <p className="font-medium text-gray-800">
                                {TRANSLATION.FOOTER.SERVICES.INFRASTRUCTURE_LEARNING_SERVICE_ENVADER}
                            </p>
                            <p className="font-medium text-gray-800">
                                {TRANSLATION.FOOTER.SERVICES.SYSTEM_APPLICATION_DEVELOPMENT}
                            </p>
                            <p className="font-medium text-gray-800">
                                {TRANSLATION.FOOTER.SERVICES.WEB_PRODUCTION}
                            </p>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h6 className="font-bold text-white">
                                {TRANSLATION.FOOTER.CORPORATE_INTELLIGENCE}
                            </h6>
                            <p className="font-medium text-gray-800">
                                {TRANSLATION.FOOTER.CORPORATE_INTELLIGENCES.MISSION}
                            </p>
                            <p className="font-medium text-gray-800">
                                {TRANSLATION.FOOTER.CORPORATE_INTELLIGENCES.VISION}
                            </p>
                            <p className="font-medium text-gray-800">
                                {TRANSLATION.FOOTER.CORPORATE_INTELLIGENCES.VALUE}
                            </p>
                            <p className="font-medium text-gray-800">
                                {TRANSLATION.FOOTER.CORPORATE_INTELLIGENCES.LIST_OF_OFFICERS}
                            </p>
                            <p className="font-medium text-gray-800">
                                {TRANSLATION.FOOTER.CORPORATE_INTELLIGENCES.COMPANY_PROFILE}
                            </p>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h6 className="font-bold text-white">
                                {TRANSLATION.FOOTER.RECRUIT}
                            </h6>
                            <p className="font-medium text-gray-800">
                                {TRANSLATION.FOOTER.RECRUITS.APPLICATION_REQUIREMENTS}
                            </p>
                            <p className="font-medium text-gray-800">
                                {TRANSLATION.FOOTER.RECRUITS.REPRESENTATIVE_MESSAGE}
                            </p>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h6 className="font-bold text-white">
                                {TRANSLATION.FOOTER.NEWS}
                            </h6>
                            <h6 className="font-bold text-white">
                                {TRANSLATION.FOOTER.SUSTAINABILITY}
                            </h6>
                            <h6 className="font-bold text-white">
                                {TRANSLATION.FOOTER.PRIVACY_POLICY}
                            </h6>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-[8px] justify-end">
                        <Button className="w-full xl:w-[240px]" type="primary">
                            {TRANSLATION.FOOTER.CONTACT}
                        </Button>
                        <Button className="w-full xl:w-[240px]" type="secondary">
                            {TRANSLATION.FOOTER.DOCUMENT}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mt-[40px] text-center">
                <span className="text-xs text-bold text-gray-800">
                    {TRANSLATION.FOOTER.COPYRIGHT}
                </span>
            </div>
        </footer>
    )
}

export default Footer;