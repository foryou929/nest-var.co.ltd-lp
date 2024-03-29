import clsx from "clsx";

interface Props {
    className?: string;
    children?: React.ReactNode;
    type?: string;
    size?: string;
}

const Button: React.FC<Props> = ({ className, children, type, size }) => {
    return (
        <button className={
            clsx(
                size == "xl" ? "w-[320px] py-[24px]" : size == "xs" ? "w-[160px] py-[12px]" : "w-[240px] py-[16px]",
                type == "primary" ? "bg-primary" : "bg-secondary",
                "text-black rounded-full xl:text-xl font-bold",
                className
            )}>
            {children}
        </button>
    )
}

export default Button;