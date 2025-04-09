"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import background from '@/public/gallery/testimonial.png'
import "swiper/css";
import testimonail1 from "@/public/gallery/image1.jpg";
export default function TestimonialSection() {
    const testimonials = [
        {
            id: 1,
            name: "Liam",
            role: "Marketing",
            text: "Best party planners ever! They brought our vision to life and made it even better than we imagined. Our guests were impressed and had a wonderful time.",
            rating: 4.9,
            avatar: testimonail1,
        },
        {
            id: 2,
            name: "David",
            role: "Designer",
            text: "I couldn't have asked for a better birthday party for my daughter. The decorations, games, and entertainment were fantastic. Made it a day to remember!",
            rating: 4.2,
            avatar: testimonail1,
        },
        {
            id: 3,
            name: "Jessica",
            role: "Designer",
            text: "From start to finish, the team was amazing. They took care of everything and made sure our event was flawless. Highly recommend their services!",
            rating: 3.8,
            avatar: testimonail1,
        },
        {
            id: 4,
            name: "Liam",
            role: "Marketing",
            text: "Best party planners ever! They brought our vision to life and made it even better than we imagined. Our guests were impressed and had a wonderful time.",
            rating: 4.9,
            avatar: testimonail1,
        },
        {
            id: 5,
            name: "David",
            role: "Designer",
            text: "I couldn't have asked for a better birthday party for my daughter. The decorations, games, and entertainment were fantastic. Made it a day to remember!",
            rating: 4.2,
            avatar: testimonail1,
        },
        {
            id: 6,
            name: "Jessica",
            role: "Designer",
            text: "From start to finish, the team was amazing. They took care of everything and made sure our event was flawless. Highly recommend their services!",
            rating: 3.8,
            avatar: testimonail1,
        },
    ];

    return (
        <div className="w-full min-h-screen  bg-gray-100 py-12">
            <div className="absolute inset-0 w-full h-screen">
                <Image src={background} className="w-full h-full z-0" alt="fd" />
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className=" text-gray-800 font-sans px-8 mb-8 relative ">
                <h1 className="text-xl text-white font-semibold">Testimonials</h1>
                <h1 className="text-3xl font-bold text-white py-2">What Our Clients Say</h1>
                <p className="w-1/2  text-gray-200">
                    Nothing makes us prouder than the satisfaction and joy of our clients. Here are some of the wonderful things they have to say about their experiences with us.
                </p>
            </div>


            <div className="relative w-full px-6">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true, el: ".custom-pagination" }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className=""
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="flex w-full   justify-center ">
                            <div className="bg-white  cursor-pointer rounded-lg p-6 shadow-md max-w-sm flex flex-col">
                                <div className="flex  items-center mb-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={`${testimonial.name}'s avatar`}
                                            width={48}
                                            height={48}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg">{testimonial.name}</h3>
                                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                                <div className="flex">
                                    <div className="flex items-center">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => {
                                                const filled = i < Math.floor(testimonial.rating);
                                                const halfFilled = i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0;
                                                return (
                                                    <svg
                                                        key={i}
                                                        className={`w-5 h-5 ${filled ? "text-yellow-400" : halfFilled ? "text-yellow-400 opacity-50" : "text-gray-300"}`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <span className="ml-2 flex justify-center text-gray-700 font-medium">{testimonial.rating.toFixed(1)}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


            <div className="custom-pagination flex justify-center mt-4 space-x-2">

            </div>

        </div>
    );
}
