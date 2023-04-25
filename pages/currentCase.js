import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function CurrentCase() {
    return (
        <div className="">
            <Head>
                <title>Caseprac.AI</title>
            </Head>
            {/* Header */}
            <header className="flex justify-center h-9">
                <div className="a">
                    <Link href="/">
                        <p className="pl-10 pt-5">Go back</p>
                    </Link>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-8 sm:px-16 my-32">
                <p>
                    Client goal: Our client is AirlineX, a low-cost airline that
                    has approached McKinsey for help in designing a new pricing
                    strategy that would increase revenue and customer
                    satisfaction.\nSituation description: AirlineX operates
                    flights to popular domestic and international destinations.
                    The airline offers a basic economy fare, which includes the
                    seat, but additional services such as meals, seat selection,
                    and baggage incur extra fees. AirlineX\u2019s management
                    team has identified that their current pricing strategy has
                    not been effective in increasing revenue or customer
                    satisfaction, and they are considering implementing a new
                    pricing model. <br></br>
                    McKinsey study: <br></br>Question 1: What key factors should
                    AirlineX consider when deciding on a new pricing strategy?{" "}
                    <br></br>Question 2: After reviewing the key factors that
                    AirlineX should consider when deciding on a new pricing
                    strategy, your team wants to understand the airline industry
                    and consumer preferences to gauge the potential success of
                    the new pricing strategy. Your team has gathered the
                    following information about AirlineX\u2019s competitors and
                    consumer preferences for additional services:\n- Competitor
                    A offers a similar pricing strategy, except they charge a
                    higher fee for seat selection compared to AirlineX\n-
                    Competitor B offers a single price for the flight, but
                    includes all additional services in the fare <br></br>-
                    Consumer surveys suggest that customers prefer to pay a
                    higher upfront price for the flight if all additional
                    services are included.\nTo implement the new pricing
                    strategy, AirlineX would need to hire additional staff,
                    increase training, develop new technology, and market the
                    new pricing model. What price points and additional services
                    should AirlineX offer and how should they communicate this
                    to customers to increase revenue and customer
                    satisfaction?\nQuestion 3: AirlineX executives are concerned
                    about the potential risks associated with implementing a new
                    pricing strategy, such as losing customers to competitors or
                    confusing customers with the new pricing structure. What
                    strategies can AirlineX implement to minimize these risks
                    and maximize the success of the new pricing strategy?
                </p>
            </main>
        </div>
    );
}
