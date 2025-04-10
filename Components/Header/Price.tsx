import React from 'react';

const Price = () => {
    // Card data with country information
    const cardData = [
        {
            title: "Individual Tax Filing",
            price: "$145",
            country: "United Kingdom",
            flagCode: "GB",
            features: [
                "Simple tax filing (e.g., W-2, 1099 forms)",
                "Standard deductions and credits",
                "Federal and state tax filing",
                "Email support for general inquiries",
                "Tax filing review to ensure accuracy"
            ]
        },
        {
            title: "Individual Tax Filing",
            price: "$145",
            country: "Pakistan",
            flagCode: "PK",
            features: [
                "Simple tax filing (e.g., W-2, 1099 forms)",
                "Standard deductions and credits",
                "Federal and state tax filing",
                "Email support for general inquiries",
                "Tax filing review to ensure accuracy"
            ]
        },
        {
            title: "Individual Tax Filing",
            price: "$145",
            country: "Qatar",
            flagCode: "QA",
            features: [
                "Simple tax filing (e.g., W-2, 1099 forms)",
                "Standard deductions and credits",
                "Federal and state tax filing",
                "Email support for general inquiries",
                "Tax filing review to ensure accuracy"
            ]
        },
        {
            title: "Individual Tax Filing",
            price: "$145",
            country: "United States",
            flagCode: "US",
            features: [
                "Simple tax filing (e.g., W-2, 1099 forms)",
                "Standard deductions and credits",
                "Federal and state tax filing",
                "Email support for general inquiries",
                "Tax filing review to ensure accuracy"
            ]
        }
    ];

    return (
        <div id='price' className="bg-gradient-to-b from-[#393162] to-[#4A3E88] w-full min-h-screen py-16 px-4">
            {/* Header Section */}
            <div className='max-w-4xl mx-auto mb-16 text-center'>
                <h2 className='text-white font-semibold text-lg'>Pricing & Plans</h2>
                <h1 className='text-white font-bold text-3xl my-3'>Service Pricing</h1>
                <p className='text-gray-200 text-sm max-w-2xl mx-auto'>
                    Explore our flexible and affordable pricing plans, crafted to meet the unique tax needs of individuals and businesses.
                </p>
            </div>
            
            {/* Staggered cards layout with external flags */}
            <div className="max-w-6xl mx-auto relative px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* First Card - Top position */}
                    <div className="relative">
                        {/* External Flag */}
                        <div className="absolute -top-8 left-4 h-10 flex items-center z-10">
                            <img 
                                src={`https://flagcdn.com/w40/${cardData[0].flagCode.toLowerCase()}.png`} 
                                alt={`${cardData[0].country} flag`}
                                className="h-6 mr-2"
                            />
                            <span className="text-xs text-white font-medium">{cardData[0].country}</span>
                        </div>
                        
                        {/* Card Content */}
                        <div className="bg-white rounded-lg shadow-lg p-5 mt-4">
                            <h2 className="text-xl font-bold mb-2">{cardData[0].title}</h2>
                            <p className="text-3xl font-bold text-blue-600 mb-4">{cardData[0].price}</p>
                            
                            <ul className="space-y-2 mb-6">
                                {cardData[0].features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                        <div className="flex-shrink-0 w-5 h-5 mt-1">
                                            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="ml-2 text-xs text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-md">
                                GET IN TOUCH
                            </button>
                        </div>
                    </div>
                    
                    {/* Second Card - Bottom position */}
                    <div className="relative md:mt-16">
                        {/* External Flag */}
                        <div className="absolute -top-8 left-4 h-10 flex items-center z-10">
                            <img 
                                src={`https://flagcdn.com/w40/${cardData[1].flagCode.toLowerCase()}.png`} 
                                alt={`${cardData[1].country} flag`}
                                className="h-6 mr-2"
                            />
                            <span className="text-xs text-white font-medium">{cardData[1].country}</span>
                        </div>
                        
                        {/* Card Content */}
                        <div className="bg-white rounded-lg shadow-lg p-5 mt-4">
                            <h2 className="text-xl font-bold mb-2">{cardData[1].title}</h2>
                            <p className="text-3xl font-bold text-blue-600 mb-4">{cardData[1].price}</p>
                            
                            <ul className="space-y-2 mb-6">
                                {cardData[1].features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                        <div className="flex-shrink-0 w-5 h-5 mt-1">
                                            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="ml-2 text-xs text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-md">
                                GET IN TOUCH
                            </button>
                        </div>
                    </div>
                    
                    {/* Third Card - Top position */}
                    <div className="relative">
                        {/* External Flag */}
                        <div className="absolute -top-8 left-4 h-10 flex items-center z-10">
                            <img 
                                src={`https://flagcdn.com/w40/${cardData[2].flagCode.toLowerCase()}.png`} 
                                alt={`${cardData[2].country} flag`}
                                className="h-6 mr-2"
                            />
                            <span className="text-xs text-white font-medium">{cardData[2].country}</span>
                        </div>
                        
                        {/* Card Content */}
                        <div className="bg-white rounded-lg shadow-lg p-5 mt-4">
                            <h2 className="text-xl font-bold mb-2">{cardData[2].title}</h2>
                            <p className="text-3xl font-bold text-blue-600 mb-4">{cardData[2].price}</p>
                            
                            <ul className="space-y-2 mb-6">
                                {cardData[2].features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                        <div className="flex-shrink-0 w-5 h-5 mt-1">
                                            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="ml-2 text-xs text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-md">
                                GET IN TOUCH
                            </button>
                        </div>
                    </div>
                    
                    {/* Fourth Card - Bottom position */}
                    <div className="relative md:mt-16">
                        {/* External Flag */}
                        <div className="absolute -top-8 left-4 h-10 flex items-center z-10">
                            <img 
                                src={`https://flagcdn.com/w40/${cardData[3].flagCode.toLowerCase()}.png`} 
                                alt={`${cardData[3].country} flag`}
                                className="h-6 mr-2"
                            />
                            <span className="text-xs text-white font-medium">{cardData[3].country}</span>
                        </div>
                        
                        {/* Card Content */}
                        <div className="bg-white rounded-lg shadow-lg p-5 mt-4">
                            <h2 className="text-xl font-bold mb-2">{cardData[3].title}</h2>
                            <p className="text-3xl font-bold text-blue-600 mb-4">{cardData[3].price}</p>
                            
                            <ul className="space-y-2 mb-6">
                                {cardData[3].features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                        <div className="flex-shrink-0 w-5 h-5 mt-1">
                                            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="ml-2 text-xs text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-md">
                                GET IN TOUCH
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;