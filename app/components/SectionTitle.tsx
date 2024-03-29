interface SectionTitleProps {
    title: string;
    subtitle?: string;
    description?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, description }) => {
    return (
        <div className="xl:px-[160px]">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-secondary">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-primary font-bold">
                        {subtitle}
                    </p>
                )}
            </div>
            {description && (
                <p className="mt-[40px] text-secondary">
                    {description}
                </p>
            )}
        </div>
    )
}

export default SectionTitle;