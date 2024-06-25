"use client";
import { motion } from "framer-motion";
import { whatWeDos } from "@/data/what-we-dos";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";
import { fadeIn } from "@/lib/variants";

export type WhatWeDoType = (typeof whatWeDos)[0];

export const WhatWeDo = () => {
  return (
    <MaxWidthWrapper className="bg-white py-10">
      <div className="flex flex-col gap-4">
        <div className="text-center">
          <motion.h3
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="text-sm font-sue_ellen_francisco text-[#FF6D6D] font-medium"
          >
            What we do
          </motion.h3>
          <motion.h2
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="text-xl md:text-2xl text-[#2E4049] font-shippori_mincho capitalize font-semibold"
          >
            We do it for People in need
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDos.map((item: WhatWeDoType) => (
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              key={item.id}
              className=""
            >
              <WhatWeDoCard
                image={item.image}
                title={item.title}
                content={item.content}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

const WhatWeDoCard = ({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <span>
        <Image src={image} alt="medicine icon" width={34} height={34} />
      </span>
      <h3 className="text-[#2E4049] text-sm font-semibold font-shippori_mincho capitalize">
        {title}
      </h3>
      <p className="text-center text-xs font-shippori_mincho font-medium">
        {content}
      </p>
    </div>
  );
};
