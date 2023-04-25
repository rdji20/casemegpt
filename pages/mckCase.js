import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import Banner from "@/components/Case";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function CurrentCase() {
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
                    Client goal: Our client is EcoWear, a leading eco-friendly
                    clothing brand in the United States that has approached
                    McKinsey for help designing its market expansion strategy.{" "}
                    <br></br>
                    <br></br>Situation description: As an eco-conscious clothing
                    brand, EcoWear is committed to sustainable practices in
                    manufacturing, marketing, and distribution. The company uses
                    environmentally friendly materials, invests in renewable
                    energy, and uses biodegradable packaging. EcoWear currently
                    offers a wide range of products, including apparel,
                    footwear, and accessories, and has a strong online presence
                    along with a few flagship stores across the country. The
                    company is evaluating the expansion into a new product
                    category, "EcoTech"; a line of eco-friendly tech accessories
                    such as sustainable phone cases and solar-powered chargers.
                    They believe this new offering is in line with their brand
                    mission and will help them capitalize on the growing demand
                    for environmentally responsible tech products. <br></br>
                    <br></br>McKinsey study: EcoWear\'s vice president of
                    marketing has asked McKinsey to help analyze key factors
                    surrounding the introduction of EcoTech and its internal
                    capabilities to support the expansion effort.<br></br>
                    <br></br>Question 1: What key factors should EcoWear
                    consider when deciding whether or not to expand into EcoTech
                    product line?<br></br>
                    <br></br>Question 2: After reviewing the key factors that
                    EcoWear should consider when deciding whether to introduce
                    EcoTech, your team wants to understand the eco-friendly tech
                    accessory market and consumer preferences to gauge the
                    potential success of EcoTech. Your team has gathered the
                    following information about the US eco-friendly tech
                    accessory market: the current market size, growth rate, and
                    the estimated market share of top competitors. Based on the
                    target price and upfront fixed costs, what share of the
                    eco-friendly tech accessory market would EcoTech need to
                    capture to break even? Here is some additional information
                    for you to consider as you form your response:<br></br>
                    <br></br>EcoTech products would be priced at a premium to
                    reflect their eco-friendly nature. For example, an
                    eco-friendly phone case would be priced at \'Dollars\'35.
                    The company needs to bear \'Dollars\'25 million in total
                    fixed costs, including marketing expenses and increased
                    costs across its production and distribution network. The
                    vice president of operations estimates that each EcoTech
                    product would cost \'Dollars\'27 to produce and deliver
                    through sustainable means.<br></br>
                    <br></br>Question 3: EcoWear executives believe that the
                    company\'s position as a leading eco-friendly clothing brand
                    gives it strategic leverage toward achieving the desired
                    market share. However, they ask the team to outline what
                    would be needed to achieve the target share of the
                    eco-friendly tech accessory market. What would EcoWear need
                    to do to gain the required market share for EcoTech
                    following its introduction?<br></br>
                    <br></br>Note: Feel free to adjust any assumptions, change
                    the numbers, or customize to the specific needs of your
                    roleplay or mock interview.
                </p>
            </main>
        </div>
    );
}
