"use client";

import { FeedbackItem } from "@/ui/FeedbackItem/FeedbackItem";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { FeedbackWithUrls } from "../../../../../lib/types/home.types";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Observer);
}

interface FeedbacksSectionProps {
  data?: FeedbackWithUrls[];
}

export const FeedbacksSection = ({ data = [] }: FeedbacksSectionProps) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const totalItems = data?.length;

  useGSAP(() => {
    if (totalItems === 0) return;
    gsap.to(containerRef.current, {
      xPercent: -100 * index,
      duration: 0.8,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  }, [index]);

  const next = useCallback(() => {
    if (gsap.isTweening(containerRef.current)) return;

    setIndex((prev) => Math.min(prev + 1, data?.length - 1));
  }, []);

  const prev = useCallback(() => {
    if (gsap.isTweening(containerRef.current)) return;

    setIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useGSAP(() => {
    const obs = Observer.create({
      target: wrapperRef.current,
      type: "wheel,touch,pointer",
      onLeft: () => {
        if (index < data.length - 1 && !gsap.isTweening(containerRef.current)) {
          next();
        }
      },
      onRight: () => {
        if (index > 0 && !gsap.isTweening(containerRef.current)) {
          prev();
        }
      },
      tolerance: 160,
      preventDefault: false,
    });

    return () => obs.kill();
  }, [index, next, prev]);
  return (
    <section
      ref={wrapperRef}
      className="h-full bg-[#ffffff] py-28 px-16 relative "
    >
      <div
        ref={containerRef}
        className="slider-inner"
        style={{ display: "flex" }}
      >
        {data.map((item, i) => (
          <FeedbackItem key={i} data={item} />
        ))}
      </div>
      <div className=" flex justify-between w-[95vw] mt-8 absolute top-[30%] -translate-1/2 left-[50%]">
        <div className="w-12 h-12">
          {index > 0 && (
            <button
              onClick={prev}
              className="px-4 py-2 text-[#242424] cursor-pointer pointer-events-auto"
            >
              <CircleArrowLeft size={36} />
            </button>
          )}
        </div>
        <div className="w-12 h-12">
          {index < data.length - 1 && (
            <button
              onClick={next}
              className="px-4 py-2 text-[#242424] cursor-pointer pointer-events-auto"
            >
              <CircleArrowRight size={36} />
            </button>
          )}
        </div>
      </div>
      <div className="flex w-[60vw] gap-10 my-16 mx-auto max-w-100">
        {data.map((item, i) => (
          <div
            key={i}
            className={`
        w-full h-1 transition-colors duration-300 rounded-2xl
        ${i === index ? "bg-[#D3C3E0]" : "bg-[#E7EBFA]"}
      `}
          />
        ))}
      </div>
    </section>
  );
};
