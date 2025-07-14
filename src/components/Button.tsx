import type { ReactElement } from "react";

interface ButtonProps{
    variant: "primary" | "secondary";
    size ?: "sm" | "md" | "lg";
    text: string;
    startIcon ?: ReactElement;
    onClick ?: () => void;
}
const variantClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
}

const defaultStyles = "px-2 py-2 rounded-md font-light flex items-center cursor-pointer";
export const Button = ({variant, text,startIcon,onClick}: ButtonProps) => {
    return <button onClick={onClick} className={`${defaultStyles} ${variantClasses[variant]}`}>
     {startIcon && <span className="pr-2">{startIcon}</span>}
     {text}
    </button>
}