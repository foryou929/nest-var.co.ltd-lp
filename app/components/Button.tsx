interface ButtonComponentProps {
    className?: string;
    children?: React.ReactNode;
    type?: string;
}

const Button: React.FC<ButtonComponentProps> = ({ className, children, type }) => {
    return (
        <button className={`w-[240px] ${type == "primary" ? "bg-primary" : "bg-secondary"} text-black rounded-full py-[16px] xl:text-xl font-bold ${className}`}>
            {children}
        </button>
    )
}

export default Button;