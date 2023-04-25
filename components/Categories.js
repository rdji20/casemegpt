import React from "react";
import Image from "next/image";

function Categories() {
    return (
        <div className="p-20">
            <section className="flex">
                <div>
                    <h1>PythiaAI</h1>
                    <p>(Our case software)</p>
                </div>
                <div>
                    {/* 
                    <button>New Product</button>
                    <button>Merger and Acquisitions</button>
                    <button>Competition</button>
                    <button>Should we undertake this initiative?</button>
                    <button>Totally unique</button> */}

                    <div class="bg-white">
                        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 class="sr-only">Products</h2>

                            <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                <a href="#" class="group">
                                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                        <div className="relative h-40">
                                            <Image
                                                src="/../public/random2.webp"
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                    </div>
                                    <h3 class="mt-4 text-sm text-gray-700">
                                        AI generated case
                                    </h3>
                                    <p class="mt-1 text-lg font-medium text-gray-900">
                                        Random
                                    </p>
                                </a>

                                <a href="#" class="group">
                                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                        <div className="relative h-40">
                                            <Image
                                                src="/../public/money-graph.jpg"
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                    </div>
                                    <h3 class="mt-4 text-sm text-gray-700">
                                        AI generated case
                                    </h3>
                                    <p class="mt-1 text-lg font-medium text-gray-900">
                                        Profitability
                                    </p>
                                </a>

                                <a href="#" class="group">
                                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                        <div className="relative h-40">
                                            <Image
                                                src="/../public/growth.jpeg"
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                    </div>
                                    <h3 class="mt-4 text-sm text-gray-700">
                                        AI generated case
                                    </h3>
                                    <p class="mt-1 text-lg font-medium text-gray-900">
                                        Growth
                                    </p>
                                </a>

                                <a href="#" class="group">
                                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                        <div className="relative h-40">
                                            <Image
                                                src="/../public/pricing.png"
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                    </div>
                                    <h3 class="mt-4 text-sm text-gray-700">
                                        AI generated case
                                    </h3>
                                    <p class="mt-1 text-lg font-medium text-gray-900">
                                        Pricing
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative flex my-auto h-16">
                <div className="inline-block h-6">
                    <Image
                        src="/../public/mck_logo.png"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>
    );
}

export default Categories;
