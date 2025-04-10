'use client';
import { useState } from 'react';

function ContactPage() {
    const [message, setMessage] = useState('');
    const baseWhatsappLink = 'https://wa.me/447385994006?text=';

    // Function to create WhatsApp link with the user's message
    const getWhatsappLink = (userMessage) => {
        const encodedMessage = encodeURIComponent(
            userMessage || 'Hi, I came across your website and would like to connect.'
        );
        return `${baseWhatsappLink}${encodedMessage}`;
    };

    // Handle sending the message
    const handleSendMessage = () => {
        if (message.trim()) {
            window.open(getWhatsappLink(message), '_blank');
        }
    }; // ✅ Semicolon added here to fix the error

    // Handle pressing Enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && message.trim()) {
            handleSendMessage();
        }
    };

    return (
        <div id="contact" className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4 md:p-8">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We're just a message away. Connect with us directly through WhatsApp for immediate assistance.
                </p>
            </div>

            {/* Main Content Area */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Left Side - WhatsApp Chat Preview */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Chat Header */}
                    <div className="bg-green-600 p-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
                            </svg>
                        </div>
                        <div className="text-white">
                            <h3 className="font-semibold">Support Team</h3>
                            <p className="text-xs text-green-100">Online • Available now</p>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-4 bg-gray-50 h-64 overflow-y-auto flex flex-col">
                        <div className="mb-4 max-w-xs">
                            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                                <p className="text-gray-800">Hello! 👋 How can we help you today?</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 ml-1">9:30 AM</p>
                        </div>

                        <div className="mb-4 max-w-xs">
                            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                                <p className="text-gray-800">
                                    Feel free to type your message below and hit send. It will open WhatsApp directly!
                                </p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 ml-1">9:31 AM</p>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-gray-200 bg-white">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message here..."
                                className="flex-1 bg-gray-100 rounded-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-300"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            Your message will open in WhatsApp automatically
                        </p>
                    </div>
                </div>

                {/* Right Side - Info Cards */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.4054 3.5875C18.1607 1.3275 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9875 0.648214 16.0339 1.6875 17.8393L0 24L6.30536 22.3446C8.04107 23.2929 9.99643 23.7857 11.9893 23.7857H11.9946C18.5464 23.7857 24 18.45 24 11.8929C24 8.71607 22.65 5.84732 20.4054 3.5875Z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Connect on WhatsApp</h2>
                            <p className="text-gray-600">
                                Start a conversation with our team for quick responses and personalized assistance
                            </p>
                        </div>
                        <a
                            href={getWhatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.4054 3.5875C18.1607 1.3275 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9875 0.648214 16.0339 1.6875 17.8393L0 24L6.30536 22.3446C8.04107 23.2929 9.99643 23.7857 11.9893 23.7857H11.9946C18.5464 23.7857 24 18.45 24 11.8929C24 8.71607 22.65 5.84732 20.4054 3.5875Z" />
                            </svg>
                            Message Now
                        </a>
                    </div>

                    {/* Business Hours Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Hours</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <div>
                                    <p className="font-medium text-gray-800">Monday - Friday</p>
                                    <p className="text-gray-600">9:00 AM - 6:00 PM (UK Time)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none">
                                    <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div>
                                    <p className="font-medium text-gray-800">Fast Response</p>
                                    <p className="text-gray-600">Typically within 15-30 minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Contact via WhatsApp</h3>
                        <div className="space-y-3">
                            {[
                                "Instant communication with our dedicated support team",
                                "Send images, documents, or voice messages easily",
                                "Keep a record of our conversation for future reference",
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-gray-700">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="max-w-6xl mx-auto text-center mt-12">
                <p className="text-gray-600">We value your inquiries and look forward to assisting you!</p>
            </div>
        </div>
    );
}

export default ContactPage;
