import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

const ProfileDefault = () => {
    return (
        <div className="">
            <Head>
                <title>CasemeGPT</title>
            </Head>
            <header className="flex justify-center h-9">
                <div className="a">
                    <Link href="/">
                        <p className="font-bold pt-5">Go back</p>
                    </Link>
                </div>
            </header>
            <main className="flex justify-center pt-10">
                <p>You are not signed in</p>
            </main>
        </div>
    );
};

export default ProfileDefault;
