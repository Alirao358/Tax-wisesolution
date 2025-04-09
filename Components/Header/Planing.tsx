import React from 'react'
import { FaCalculator } from "react-icons/fa6";
import { TbChartCandle } from "react-icons/tb";
import { IoEarthOutline } from "react-icons/io5";
export default function Planning() {
    return (
        <div className="bg-gradient-to-r from-[#393162]  to-[#034E8A] py-10 text-white ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
                {/* Feature 1 */}
                <div className="flex items-center gap-3">
                    <span className="text-2xl"><FaCalculator className='h-14' /></span>
                    <p className="text-center md:text-left">
                        <span className="font-semibold">Business Planning,</span>
                        <br />
                        Strategy & Execution
                    </p>
                </div>

                {/* Divider */}
                <div className="hidden md:block h-14 w-px bg-white"></div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3">
                    <span className="text-2xl"><TbChartCandle className='h-14' />
                    </span>
                    <p className="text-center md:text-left">
                        <span className="font-semibold">Financial Projections</span>
                        <br />
                        And Analysis
                    </p>
                </div>

                {/* Divider */}
                <div className="hidden md:block h-14 w-px bg-white"></div>

                {/* Feature 3 */}
                <div className="flex items-center gap-3">
                    <span className="text-2xl"><IoEarthOutline className='h-14' /></span>
                    <p className="text-center md:text-left">
                        <span className="font-semibold">International Business</span>
                        <br />
                        Opportunities
                    </p>
                </div>
            </div>
        </div>
    );
}
