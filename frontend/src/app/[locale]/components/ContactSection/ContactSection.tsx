"use client";

import useParallax from "@/hooks/useParallax";
import { useRef } from "react";

export const ContactSection = () => {
  const imgRef = useRef<HTMLDivElement>(null);

  useParallax(imgRef, 15, "30%");
  return (
    <section className="h-full bg-[#E7EBFA] w-screen p-16 text-[#242424]">
      <div className="flex justify-between">
        <div className="flex flex-col items-left gap-2 w-1/2">
          <p className="font-body  max-w-200">Contact</p>

          <h2 className="tracking-tight text-[54px] font-header font-bold  leading-[110%]">
            Get In Touch
          </h2>
          <p className="font-body  max-w-200">
            Ready to start your journey? Reach out and let's talk.
          </p>
        </div>
        <div className="w-1/2">
          <div></div>
        </div>
      </div>
      <div className="w-full block mt-16">
        <div className="overflow-hidden w-full flex items-top rounded-xl h-150">
          <div ref={imgRef}>
            <img
              src="/photo/03.JPG"
              alt=""
              className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
