// components/TaxFilingCards.jsx
import React from 'react';

const Price = () => {
    // Common data for all cards
    const cardData = {
        title: "Individual Tax Filing",
        price: "$145",
        features: [
            "Simple tax filing ",
            "Standard deductions and credits",
            "Federal and state tax filing",
            "Email support for general inquiries",
            "Tax filing review to ensure accuracy"
        ]
    };

    return (
        <div id='price' className="bg-gradient-to-b  from-[#393162] to-[#4A3E88] w-full h-screen pb-3 pt-2 ">

            <div className='h-[13%]'>
                <h1 className='text-center text-white font-semibold text-lg '>Pricing & Plan</h1>
                <h1 className='text-center text-white font-semibold text-2xl py-2'>Service Price</h1>
                <h1 className='text-center text-gray-300 text-sm  pb-4'>Explore Our Flexible and Affordable Pricing Plans, Crafted to Meet the Unique Tax Needs of Individuals and Businesses</h1>
            </div>
            <div className="px-6 mx-auto h-[87%] w-full justify-center   flex gap-6">
                {/* Card 1 */}
                <div className='h-full w-fit flex items-center'>
                    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-end ">
                        <h2 className="text-xl font-bold mb-2">{cardData.title}</h2>
                        <p className="text-xl  text-blue-600 mb-2">{cardData.price}</p>
                        <ul className="space-y-2 mb-2">
                            {cardData.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                                        <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-md hover:from-blue-600 hover:to-blue-800 transition duration-300">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>
                {/* Card 2 */}
                <div className='h-full  flex items-end'>
                    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-end ">
                        <h2 className="text-xl font-bold mb-2">{cardData.title}</h2>
                        <p className="text-xl  text-blue-600 mb-2">{cardData.price}</p>
                        <ul className="space-y-2 mb-4">
                            {cardData.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                                        <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-md hover:from-blue-600 hover:to-blue-800 transition duration-300">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='h-full w-fit flex items-center'>
                    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-end ">
                        <h2 className="text-xl font-bold mb-2">{cardData.title}</h2>
                        <p className="text-xl  text-blue-600 mb-2">{cardData.price}</p>
                        <ul className="space-y-2 mb-2">
                            {cardData.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                                        <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-md hover:from-blue-600 hover:to-blue-800 transition duration-300">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>
                {/* Card 4 */}
                <div className='h-full  flex items-end'>
                    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-end ">
                        <h2 className="text-xl font-bold mb-2">{cardData.title}</h2>
                        <p className="text-xl  text-blue-600 mb-2">{cardData.price}</p>
                        <ul className="space-y-2 mb-4">
                            {cardData.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                                        <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-md hover:from-blue-600 hover:to-blue-800 transition duration-300">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;