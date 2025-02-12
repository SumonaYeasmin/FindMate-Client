import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <div className="my-16 container mx-auto px-2">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                className="rounded-lg overflow-hidden shadow-lg"
            >
                {/* https://i.ibb.co.com/Nt9QthK/stock-photo-inspiration-showing-sign-lost-found-business-overview-things-left-may-1.jpg */}
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative h-[300px] md:h-[450px] xl:h-[550px] flex items-center justify-center ">
                        <img
                            src="https://i.ibb.co.com/1TrYQTm/stock-photo-hand-writing-sign-lost-found-business-approach-things-left-may.jpg"
                            className="w-full h-full object-cover brightness-50"
                        />
                        <div className="absolute px-10 md:px-28 flex flex-col justify-center items-center h-full w-full">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text text-white drop-shadow-lg text-center">
                                Reconnect with Your Lost Belongings
                            </h2>
                            <p className="text-xl font-semibold md:text-xl text-white mt-2 drop-shadow-lg text-center">
                                Join our community to find and return lost items easily and securely.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative h-[300px] md:h-[450px] xl:h-[550px] flex items-center justify-center ">
                        <img
                            src="https://i.ibb.co.com/Wng4fhk/360-F-129739783-COm-Us-Upok-VIc-IAw-Lq4a-Ut-Vl-C5-Gf573-J9.jpg"
                            className="w-full h-full object-cover brightness-50"
                        />
                        <div className="absolute px-10 md:px-28 flex flex-col justify-center items-center w-full h-full">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-transparent text-white bg-clip-text drop-shadow-lg text-center">
                                Report Items You Found
                            </h2>
                            <p className="text-xl font-semibold md:text-xl mt-2 drop-shadow-lg text-white text-center">
                                Help others recover their lost possessions by reporting what you’ve found.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* https://i.ibb.co.com/qsJJ3s9/360-F-278411757-vm-A15-VKz-UMNSt9-KTQqha-Yh-MJHAit-Wrr-H.jpg */}

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative h-[300px] md:h-[450px] xl:h-[550px] flex items-center justify-center ">
                        <img
                            src="https://i.ibb.co.com/ZmBQfVg/photo-1626010448982-0fec79ed1979.jpg"
                            className="w-full h-full object-cover brightness-50"
                        />
                        <div className="absolute px-10 md:px-28 flex flex-col justify-center items-center w-full h-full">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text text-white drop-shadow-lg text-center">
                                Find What Matters Most
                            </h2>
                            <p className="text-xl font-bold md:text-xl mt-2 drop-shadow-lg text-white text-center">
                                Whether it’s a lost pet, a precious item, or a document—find it here!
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* https://i.ibb.co.com/NpCCrw6/istockphoto-173017288-612x612.jpg */}

                {/* Slide 4 */}
                <SwiperSlide>
                    <div className="relative h-[300px] md:h-[450px] xl:h-[550px] flex items-center justify-center ">
                        <img
                            src="https://i.ibb.co.com/dg1HZ5d/istockphoto-501689763-612x612.jpg"
                            className="w-full h-full object-cover brightness-50"
                        />
                        <div className="absolute px-10 md:px-28 flex flex-col justify-center items-center w-full h-full">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text text-white drop-shadow-lg text-center">
                                Together, We Can Make a Difference
                            </h2>
                            <p className="text-xl font-semibold md:text-xl  mt-2 drop-shadow-lg text-center text-white">
                                Be a part of our mission to connect people with their lost and found treasures.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
