import { Logo } from "../icons/logo";
import { TwitterIcon } from "../icons/Twitter";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItem } from "./SidebarItem";

export function SideBar() {
    return (
        <div className="h-screen bg-white w-72 fixed left-0 top-0 pl-6 cursor-pointer">
            <div className="flex text-2xl pt-8 items-center">
                <div className="pr-2 text-purple-600">
                    <Logo />
                </div>
                Brainly
            </div>
            <div className="pt-8 pl-4">
                <SideBarItem text="Youtube" icon={<YoutubeIcon />} />
                <SideBarItem text="Twitter" icon={<TwitterIcon />} />
            </div>
        </div>
    );
}
