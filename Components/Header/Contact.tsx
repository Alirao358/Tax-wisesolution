'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
    const whatsappLink = 'https://wa.me/447385994006?text=Hi, I came across your website and would like to connect.';

    return (
        <div id='contact' className="min-h-screen bg-white flex flex-col justify-center items-center px-4 py-12">
            <div className="max-w-2xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Let's Talk!</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Whether you have a question, a project idea, or just want to say hello — we're just a message away.
                    Reach out to us directly on WhatsApp!
                </p>

                <Link
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium text-lg py-3 px-6 rounded-full shadow-lg transition-all duration-300"
                >
                    <FaWhatsapp size={24} />
                    Chat on WhatsApp
                </Link>

                <p className="mt-6 text-sm text-gray-500">
                    Available Mon - Fri | 9:00 AM - 6:00 PM (UK Time)
                </p>
            </div>
        </div>
    );
}
