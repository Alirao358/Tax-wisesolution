import Image from 'next/image';
import React from 'react';
import image1 from '@/public/gallery/image1.jpg';
import Link from 'next/link';

const Services = () => {
    const serviceItems = [
        {
            id: 1,
            image: image1,
            title: 'Tax Planning',
            description: 'Plan your taxes, file returns, and prepare for tax season'
        },
        {
            id: 2,
            image: image1,
            title: 'Tax Savings',
            description: 'Analyze your tax savings, and find out how to save money on your taxes'
        },
        {
            id: 3,
            image: image1,
            title: 'Tax Consultation',
            description: 'Schedule a consultation with a tax professional to discuss your tax needs and preferences'
        },
        {
            id: 4,
            image: image1,
            title: 'Tax Compliance',
            description: 'Ensure your tax filings are in compliance with the latest regulations'
        },
        {
            id: 5,
            image: image1,
            title: 'Business Taxation',
            description: 'Specialized tax solutions for businesses and entrepreneurs'
        },
        {
            id: 6,
            image: image1,
            title: 'Investment Taxation',
            description: 'Understand how to minimize taxes on your investments'
        },
    ];

    return (
        <main id='services'>
            <div className="bg-[#F7F5FF] w-full pt-32 pb-12 flex flex-col justify-center">
                <div className="flex justify-center">
                    <div className="py-6 w-1/2 flex flex-col">
                        <h1 className="text-center text-black font-normal text-2xl">Our Services</h1>
                        <h1 className="text-black text-2xl font-bold text-center pt-3">
                            Expert Tax Solutions for Individuals & Businesses
                        </h1>
                        <p className="text-center text-md font-light text-gray-500">
                            We provide reliable tax and financial services to keep you compliant, maximize savings, and help your business grow.
                        </p>
                    </div>
                </div>

                {/* Services List */}
                <div className="max-w-7xl mx-auto pt-12 w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 w-full gap-y-40 grid-rows-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                        {serviceItems.map((service) => (
                            <div
                                key={service.id}
                                className="relative bg-white rounded-lg shadow-lg"
                            >
                                <div className="h-60 relative">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute h-full inset-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                                    <div className='relative z-20 h-full w-full flex justify-center -bottom-32'>
                                        <div className="p-6 bg-white shadow-2xl backdrop-blur-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl h-full w-3/4 rounded-sm">
                                            <p className="text-xl text-center font-bold">
                                                {service.title}
                                            </p>
                                            <div className="mt-4 text-gray-500 text-center">
                                                {service.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Centered button - fixed positioning */}
                    <div className="flex justify-center mt-40">
                        <Link href='#contact' className="relative overflow-hidden bg-indigo-700 text-white px-8 py-3 rounded-md transition duration-300 font-medium
                        hover:bg-indigo-600 hover:scale-105 hover:shadow-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20 before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-full">
                            <span className="relative z-10">Get Started</span>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Services;
