import React from "react";
import FAQ from "../components/FAQ";

export default function About({data}) {
    return (
        <>
                <div className="py-12 bg-gray-100">
                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:7/12 lg:w-6/12">
                                <h1 className="text-2xl text-gray-900 font-bold md:text-4xl">Om oss</h1>
                                <p className="mt-6 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scram
</p>
                                <p className="mt-4 text-gray-600">bled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            </div>
                            <div className="md:5/12 lg:w-5/12">
                            <img src={"/static/dog.svg"} layout='fill'/>

                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-white ">
                    <div className="container e px-5 mx-auto">
                        <section className="text-gray-700">
                            <div className="container px-5 py-16 mx-auto">
                                <div className="text-center mb-20">
                                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                                        Vanliga frågor
                                    </h1>
                                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                        Nedan listar vi några av de vanligaste frågorna som vi brukar få.
                                    </p>
                                </div>
                                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                                    <div className="w-full lg:w-1/2 px-4 py-1">
                                        <FAQ question={"Vad kan ni bidra med?"} content={"detta är ett svar"} />
                                        <FAQ question={"Vad kan ni bidra med?"} content={"detta är ett svar"} />
                                        <FAQ question={"Vad kan ni bidra med?"} content={"detta är ett svar"} />

                                    </div>
                                    <div className="w-full lg:w-1/2 px-4 py-1">
                                    <FAQ question={"Vad kan ni bidra med?"} content={"detta är ett svar"} />
                                    <FAQ question={"Vad kan ni bidra med?"} content={"detta är ett svar"} />
                                    <FAQ question={"Vad kan ni bidra med?"} content={"detta är ett svar"} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
        </>
    );
}