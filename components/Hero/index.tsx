"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    "/images/hero/hero-image-1.jpg",
    "/images/hero/hero-image-2.jpg",
    "/images/hero/hero-image-3.jpg",
    "/images/hero/hero-image-4.jpg",
    // "/images/hero/hero-image-5.jpg",
    // "/images/hero/hero-image-6.jpg",
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-10 md:pt-40 xl:pb-15 xl:pt-20">
        <div className="w-full">
          <div
            className="relative w-full h-[200px] md:h-[400px] lg:h-[400px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Swiper Carousel */}
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation
              loop={true}
              className="h-full w-full"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={src}
                      alt={`Hero Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 mt-10">
            {/* Content below the carousel */}
            <div className="text-center">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Inception of
              </h4>
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Bangladesh Finance Islamic
              </h1>
              <p className="text-base text-gray-700 dark:text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
                debitis consectetur nemo consequatur laboriosam porro
                repellendus enim laborum vvolaptibuss laudantium impedit unde
                non, repellat aliquid perspiciatis qui nobis. Eum, fugiat.
              </p>
              <div className="mt-5">
                <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600">
                  Learn More
                </button>
              </div>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap justify-center gap-5">
                    {/* Add your email input field here if needed */}
                    {/* <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button> */}
                  </div>
                </form>
                {/* <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
