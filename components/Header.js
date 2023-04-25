import React from "react";
import Image from "next/image";
import { UserCircleIcon, QueueListIcon } from "@heroicons/react/24/solid";

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10 bg-white">
            {/**left section */}
            <div className="relative flex items-center my-auto h-10">
                <Image
                    src="/../public/Image.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/**middle section search bar */}
            <div className="flex items-center justify-center"></div>

            {/**right section */}
            <div className="flex justify-end">
                {/* <div className="flex justify-end cursor-pointer items-center space-x-1 border-2 p-2 rounded-full border-stone-900">
                    <QueueListIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div> */}
            </div>
        </header>
    );
}

export default Header;
