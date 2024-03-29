import Image from 'next/image';
import Button from './Button';
import TRANSLATION from '../constants/TRANSLATE';

interface ButtonComponentProps {
    type?: string;
    title?: any;
    image: string;
    description?: string;
}

const ServiceSubItem: React.FC<ButtonComponentProps> = ({ type, title, image, description }) => {
    return (
        <div className="mt-[40px] xl:flex xl:gap-[64px]">
            <div className={`flex-none xl:w-[400px] flex flex-col gap-[8px] ${type == "secondary" && "xl:order-2"}`}>
                <h3 className="xl:hidden text-2xl font-bold text-white">{title}</h3>
                <Image className="w-full rounded-[16px]" alt="service_image" src={image} width={480} height={270} />
            </div>
            <div className={`mt-[8px] xl:mt-0 gap-[24px] ${type == "secondary" && "xl:order-1"}`}>
                <h3 className="hidden xl:block text-2xl font-bold text-white">{title}</h3>
                <p className="mt-[8px] xl:mt-[24px] text-white font-medium">{description}</p>
                <Button className="mt-[24px] xl:mt-[40px]" type="primary">
                    {TRANSLATION.SERVICES.SEE_DETAILS}
                </Button>
            </div>
        </div>
    )
}

export default ServiceSubItem;