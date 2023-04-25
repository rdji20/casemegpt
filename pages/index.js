import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Case from "@/components/Case";
import Link from "next/link";
import GenCase from "@/components/GenerateCaseBtn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>CasemeGPT</title>
            </Head>
            {/* Header */}
            {/* <Header /> */}
            <header className="flex justify-center">
                {/* <h1 className="p-6 tx-gigantic font-extrabold ">
                    Master your case interview skills using AI
                </h1> */}
            </header>
            {/* <Banner /> */}
            {/** Banner with explanation */}

            <main className="max-w-7xl mx-auto px-8 sm:px-16 my-32">
                <h1 className="p-6 tx-gigantic font-extrabold ">
                    Master your case interview skills using AI
                </h1>
                <div className="flex justify-evenly">
                    <Case />
                    <GenCase />
                </div>
                {/* <section>
                    <p className="text-2xl font-semibold p-10">
                        {" "}
                        Try our firm's AI generated cases:
                    </p>
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl py-3 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                <Link href="/currentCase" className="group">
                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                        <img
                                            src="https://www.mckinsey.com/~/media/Images/Global/SEOImagePlaceholder.ashx"
                                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">
                                        Using pythia prompt engineering
                                    </h3>
                                    <p class="mt-1 text-lg font-medium text-gray-900">
                                        AI generated case
                                    </p>
                                </Link>
                                <a href="#" class="group">
                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                        <img
                                            src="https://www.underconsideration.com/brandnew/archives/boston_consulting_group_logo_monogram.png"
                                            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 class="mt-4 text-sm text-gray-700">
                                        Using pythia prompt engineering
                                    </h3>
                                    <p class="mt-1 text-lg font-medium text-gray-900">
                                        AI generated case
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold p-10">
                        Explore cases
                    </h2>
                </section> */}
            </main>
        </div>
    );
}
