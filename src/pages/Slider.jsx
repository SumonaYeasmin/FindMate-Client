

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <div className="my-16">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                className="rounded-lg overflow-hidden shadow-lg"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative h-[300px] md:h-[450px] xl:h-[550px] flex items-center justify-center brightness-75">
                        <img
                            src="https://i.ibb.co/WWxzxk0/crowdfunding-isometric-concept-with-money-donation-fundraising-symbols-vector-illustration-1284-7831.jpg"
                            className="w-full h-full"
                        />
                        <div className="absolute px-10 md:px-28 flex flex-col justify-center items-center h-full w-full">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-700 drop-shadow-lg text-center">
                                Reconnect with Your Lost Belongings
                            </h2>
                            <p className="text-xl font-semibold md:text-xl text-black mt-2 drop-shadow-lg text-center">
                                Join our community to find and return lost items easily and securely.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative h-[300px] md:h-[450px] xl:h-[550px] flex items-center justify-center brightness-75">
                        <img
                            src="https://i.ibb.co/31FsCRX/istockphoto-1219719980-612x612.jpg"
                            className="w-full h-full"
                        />
                        <div className="absolute px-10 md:px-28 flex flex-col justify-center items-center w-full h-full">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-green-400 to-blue-600 drop-shadow-lg text-center">
                                Report Items You Found
                            </h2>
                            <p className="text-xl font-semibold md:text-xl text-green-600 mt-2 drop-shadow-lg text-center">
                                Help others recover their lost possessions by reporting what you’ve found.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative h-[300px] md:h-[450px] xl:h-[550px] flex items-center justify-center brightness-75">
                        <img
                            src="https://i.ibb.co/3FQQqwR/book-close-up-coffee-contemporary.jpg"
                            className="w-full h-full"
                        />
                        <div className="absolute px-10 md:px-28 flex flex-col justify-center items-center w-full h-full">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-purple-600 to-blue-700 drop-shadow-lg text-center">
                                Find What Matters Most
                            </h2>
                            <p className="text-xl font-bold md:text-xl text-black mt-2 drop-shadow-lg text-center">
                                Whether it’s a lost pet, a precious item, or a document—find it here!
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
