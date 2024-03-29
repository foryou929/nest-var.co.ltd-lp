import Image from 'next/image';

interface NewsComponentProps {
    badge: string;
    image: string;
    date: string;
    title: string;
    badgeClass: string;
}

const NewsItem: React.FC<NewsComponentProps> = ({ badge, image, date, title, badgeClass }) => {
    return (
        <div className="relative flex-grow mt-[40px] flex flex-col gap-[8px]">
            <div className={`absolute z-10 right-[16px] top-[16px] px-[9px] py-[4px] rounded-full text-sm text-white ${badgeClass}`}>
                {badge}
            </div>
            <Image className="w-full rounded-[16px]" alt="service_image" src={image} width={480} height={270}/>
            <div className="flex flex-col gap-[4px]">
                <p className="text-bold text-white">{date}</p>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
        </div>
    )
}

export default NewsItem;