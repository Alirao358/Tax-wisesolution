import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="bg-gray-900 text-white py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">TaxWise Solution</h3>
                            <p className="text-gray-400">Your trusted partner in financial planning and tax optimization since 2010.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/" className="hover:text-indigo-400">Home</Link></li>
                                <li><Link href="/services" className="hover:text-indigo-400">Services</Link></li>
                                <li><Link href="/about" className="hover:text-indigo-400">About Us</Link></li>
                                <li><Link href="/contact" className="hover:text-indigo-400">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/services/tax-planning" className="hover:text-indigo-400">Tax Planning</Link></li>
                                <li><Link href="/services/financial-analysis" className="hover:text-indigo-400">Financial Analysis</Link></li>
                                <li><Link href="/services/business-strategy" className="hover:text-indigo-400">Business Strategy</Link></li>
                                <li><Link href="/services/international" className="hover:text-indigo-400">International Tax</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Contact Us</h4>
                            <address className="text-gray-400 not-italic">
                                <p>123 Financial District</p>
                                <p>New York, NY 10001</p>
                                <p className="mt-2">Email: info@taxwisesolution.com</p>
                                <p>Phone: (123) 456-7890</p>
                            </address>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                        <p>&copy; {new Date().getFullYear()} TaxWise Solution. All rights reserved.</p>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer
