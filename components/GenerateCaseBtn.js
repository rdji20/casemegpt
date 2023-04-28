import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

function GenerateCase() {
    const [disabled, setDisabled] = useState(true);
    const buttonClasses = classNames(
        {
            "px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 bg-black text-white":
                !disabled,
        },
        {
            "px-10 py-4 shadow-md rounded-full font-bold my-3 bg-gray-400 text-white":
                disabled,
        }
    );

    function handleClick() {
        setDisabled(true);
        // Perform some action
    }

    return (
        <Link href="/generateCases">
            <button className="px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 bg-black text-white">
                Generate new GAI McKinsey Case
            </button>
        </Link>
    );
}

export default GenerateCase;
