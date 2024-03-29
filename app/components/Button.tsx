interface ButtonComponentProps {
    className?: string;
    children?: React.ReactNode;
    type?: string;
    size?: string;
}

const Button: React.FC<ButtonComponentProps> = ({ className, children, type, size }) => {
    return (
        <button className={`${size == "xl" ? "w-[320px]" : size == "xs" ? "w-[160px]" : "w-[240px]"} ${type == "primary" ? "bg - primary" : "bg - secondary"} text-black rounded-full ${size == "xl" ? "py - [24px]" : size == "xs" ? "py - [12px]" : "py - [16px]"} xl:text-xl font-bold ${className}`}>
            {children}
        </button >
    )
}

export default Button;