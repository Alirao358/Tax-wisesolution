import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
const Hero = () => {
    const whatsappLink = 'https://wa.me/447385994006?text=Hi, I came across your website and would like to connect.';
    return (
        <div className='h-full'>
            <main className="flex-grow font-sans h-full">
                {/* Hero Section */}
                <section className="relative h-full text-white">
                    <div className="relative h-full   container mx-auto px-4">
                        <div className="max-w-2xl h-full pt-20 flex flex-col  ml-8 md:ml-16">
                            <div className="border-l-4 border-white pl-6">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    Secure Your Financial Future with <span className="text-[#28468B]">TaxWise Solution</span>.
                                </h1>
                                <p className="text-lg mb-6">
                                    At  <span className="font-bold bg-black px-1 rounded-sm py-1 text-xl"> TaxWise Solution </span> , we simplify tax filing, compliance, and financial planning, ensuring you stay compliant while maximizing savings with expert guidance.
                                </p>
                                <p className="text-lg mb-8">
                                    Get started today and let TaxWise Solution take the stress out of your taxes!
                                </p>
                            </div>
                            <div className="flex flex-col pt-8 sm:flex-row gap-4">
                                <Link href="#contact" className="relative overflow-hidden bg-indigo-700 text-white px-8 py-3 rounded-md transition duration-300 font-medium
                                    hover:bg-indigo-600 hover:scale-105 hover:shadow-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20 before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-full">
                                    <span className="relative z-10">Get Started</span>
                                </Link>


                                <Link href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer" className="relative overflow-hidden bg-transparent border-2 border-white text-white px-8 py-3 rounded-md transition duration-300 font-medium
                                    hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-lg
                                        before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:before:absolute">
                                    <span className="relative z-10">Schedule a Consultation</span>
                                </Link>


                            </div>
                        </div>
                    </div>
                </section>




            </main>


        </div>
    )
}

export default Hero
