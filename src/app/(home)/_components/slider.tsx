"use client";
import { Button } from "@/components/ui/button";
import { slides } from "@/data/slides";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
export const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const clickNext = () => {
    activeImage === slides.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(slides.length - 1)
      : setActiveImage(activeImage - 1);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     clickNext();
  //   }, 5000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [activeImage]);

  return (
    <div className="relative ">
      <div className="flex h-full w-full overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`${
              activeImage === idx
                ? "block w-full h-full object-cover transition-all duration-1000 ease-in-out"
                : "hidden"
            }`}
          >
            <Image
              src={slide.img}
              alt="slide"
              // sizes="100vw"
              width={1200}
              height={400}
              style={{ width: "100%", height: "auto" }}
              className="block aspect-[10/5] flex-shrink-0 flex-grow-0 object-cover"
            />
          </div>
        ))}
      </div>
      <button
        aria-label="click icon"
        className="absolute bottom-0 left-0 top-0 block cursor-pointer p-1 transition-colors duration-300 hover:bg-black/40"
        onClick={clickPrev}
      >
        <ChevronLeft stroke="white" size={40} />
      </button>
      <button
        aria-label="click icon"
        className="absolute bottom-0 right-0 top-0 block cursor-pointer p-1 transition-colors duration-300 hover:bg-black/40"
        onClick={clickNext}
      >
        <ChevronRight stroke="white" size={40} />
      </button>

      {/* overlay text */}
      <div className="hidden md:block absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] space-y-2 md:space-y-4">
        <div className="flex flex-col gap-4 bg-black/20">
          <motion.h3
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="text-white text-xl font-sue_ellen_francisco"
          >
            Need Help...
          </motion.h3>
          <motion.h2
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="text-4xl font-bold text-white  font-shippori_mincho tracking-wide capitalize"
          >
            Be a Life saver <br /> for someone
          </motion.h2>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex items-center"
          >
            <div className="bg-white h-3 w-3 rounded-full" />
            <span className="bg-white w-40 h-[1px] " />
            <span className="text-white text-xs tracking-wide uppercase border border-white rounded-full px-2 py-0">
              below povertyline
            </span>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex gap-2"
          >
            <Button
              asChild
              variant="custom"
              className="uppercase text-xs rounded-full"
            >
              <Link href="/donate">Donate</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full uppercase"
            >
              <Link href="/about-us">Discover</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
