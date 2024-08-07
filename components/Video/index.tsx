"use client"; // Ensures the component is client-side

import React from "react";

const Video = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto max-w-4xl px-5 md:px-8 2xl:px-0 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Get to Know Bangladesh Finance Limited
        </h2>
        <div className="mt-8 flex justify-center">
        <iframe
        className="w-[1080px] h-[450px] md:h-[450px] lg:h-[450px]" 
        src="https://www.youtube.com/embed/O6OAPCN6RJU?si=U8PP5Lqx33fKGQ9A" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;