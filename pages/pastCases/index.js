import Head from "next/head";
import Link from "next/link";
import Axios from "axios";

const CurrentCase = ({ caseData }) => {
    const content = caseData;
    return (
        <div className="">
            <Head>
                <title>CasemeGPT</title>
            </Head>
            {/* Header */}
            <header className="flex justify-center h-9">
                <div className="a">
                    <Link href="/">
                        <p className="pt-5 font-bold">Go back</p>
                    </Link>
                </div>
            </header>
            <main className="pt-10 flex justify-center">
                <p className="container p-10">
                    {" "}
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </p>
            </main>
        </div>
    );
};

export const getStaticProps = async () => {
    const data = await Axios.get("http://192.168.1.147:4000/");
    return {
        props: {
            caseData: data.data,
        },
    };
};

export default CurrentCase;
