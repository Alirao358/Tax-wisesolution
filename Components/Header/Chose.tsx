// components/HeroSection.jsx
import React from 'react';
import Image from 'next/image';
import chose1 from '@/public/gallery/chose-1.png'
import chose2 from '@/public/gallery/chose-2.webp'
import { CiUser } from "react-icons/ci";
import { TbNotes } from "react-icons/tb";
import { TiTick } from "react-icons/ti";



const Chose = () => {
    return (
        <div id='about' className="w-full h-screen bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 h-full  sm:px-6 lg:px-8  ">
                <div className="flex flex-col lg:flex-row h-full items-center  justify-between gap-8">
                    {/* Left side with images */}
                    <div className="relative w-full lg:w-[40%] h-[80%]  border-2 ">
                        <div className="absolute z-10 left-48 top-4 h-3/4 w-3/4 inset-0">
                            <Image
                                src={chose1}
                                alt="Business meeting with diverse professionals"
                                layout="fill"
                                objectFit="cover"
                                className="w-56"
                            />
                        </div>
                        <div className="absolute bottom-24 z-0 -left-1 w-full  h-3/4 translate-y-1/4 -translate-x-4">
                            <Image
                                src={chose2}
                                alt="Two business professionals walking"
                                width={300}
                                height={200}
                                className=" h-full w-3/4 object-cover"
                            />
                        </div>
                    </div>

                    {/* Right side with content */}
                    <div className="w-full relative lg:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl  font-normal font-sans text-gray-900">
                            Why Choose TaxWise Solution?
                        </h1>

                        <p className="text-gray-600 text-xl">
                            TaxWise Solution Provides Expert Tax Services Tailored For
                            Individuals And Businesses, Ensuring Full Compliance,
                            Maximizing Tax Savings, And Offering Seamless Financial
                            Solutions To Simplify Your Tax Matters With Ease And
                            Confidence.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <CiUser className='size-6' />
                                <span className="font-medium">Expert Tax Consultants</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <TbNotes className='size-6' />
                                <span className="font-medium">Comprehensive Tax Solutions</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <TiTick className='size-6' />
                                <span className="font-medium">Reliable & Hassle-Free Service</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <button className="relative px-6 py-3 text-white font-semibold bg-[#393162] rounded-lg overflow-hidden transition-all duration-500 ease-in-out hover:text-white before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-gradient-to-r before:from-indigo-500 before:to-purple-500 before:transition-all before:duration-500 hover:before:w-full">
                                <span className="relative z-10">Get Started Now</span>
                            </button>



                            <div className="bg-[#393162] text-white px-6 py-14 absolute right-12 bottom-1  rounded flex flex-col items-center justify-center">
                                <span
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-wider block"
                                    style={{
                                        WebkitTextStroke: "1px white",
                                        color: "transparent",
                                    }}
                                >
                                    10
                                </span>
                                <span className="text-md font-sans">Years Of Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chose;