import Head from "next/head";
import Link from "next/link";
import Axios from "axios";
import TextInput from "@/components/TextInput";

const CurrentCase = ({ caseData }) => {
    const content = caseData;
    return (
        <>
            <div className="">
                <Head>
                    <title>CasemeGPT</title>
                </Head>
                {/* Header */}
                <header className=" fixed flex justify-center h-9 w-full bg-white h-12 align-middle">
                    <div className="">
                        <Link href="/">
                            <div className="a pt-5 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={3}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                </svg>

                                <p>back</p>
                            </div>
                        </Link>
                    </div>
                </header>
                <main className="pt-10 flex justify-center">
                    <p className="container p-10 pb-36">
                        {" "}
                        <div
                            dangerouslySetInnerHTML={{ __html: content }}
                        ></div>
                    </p>
                    <div className=""></div>
                </main>
            </div>
            <TextInput />
        </>
    );
};

export const getStaticProps = async () => {
    const data = await Axios.get("http://192.168.1.221:4000/");
    return {
        props: {
            caseData: data.data,
        },
    };
};

export default CurrentCase;
