interface ServiceItemProps {
    children?: React.ReactNode;
    title?: string;
    subtitle?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ children, title, subtitle }) => {
    return (
        <div className="mt-[80px]">
            <div className="flex">
                <div className="flex-none w-[8px] h-[69px] bg-primary" />
                <div className="ml-[16px]">
                    <h2 className="text-4xl font-bold text-white">{title}</h2>
                    <h3 className="text-sm font-bold text-white">{subtitle}</h3>
                </div>
            </div>
            {children}
        </div>
    )
}

export default ServiceItem;