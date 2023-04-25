import React from "react";
import Image from "next/image";
import Link from "next/link";

function Case() {
    return (
        <Link href="/pastCases">
            <button className="px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 bg-black text-white">
                Try McKinsey Case
            </button>
        </Link>
    );
}

export default Case;
