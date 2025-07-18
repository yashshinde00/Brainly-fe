import type { ReactElement } from "react";

export function SideBarItem({
    text,
    icon,
    onClick
}: {
    text: string;
    icon: ReactElement;
    onClick?: () => void;
}) {
    return (
        <div
            className="flex text-gray-700 cursor-pointer py-2 hover:bg-gray-200 items-center rounded max-w-48 pl-4 transition-all duration-150"
            onClick={onClick}
        >
            <div className="p-2">
                {icon}
            </div>
            <div>
                {text}
            </div>
        </div>
    );
}
