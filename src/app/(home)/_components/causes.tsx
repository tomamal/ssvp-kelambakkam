"use client";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const causesCards = [
  {
    id: 1,
    img: "/image5.jpg",
    title: "Big Charity: Distributing clothes on festive occasions",
  },
  {
    id: 2,
    img: "/image4.jpg",
    title: "Big Charity: Adopting families in dire need",
  },
  {
    id: 3,
    img: "/image3.jpg",
    title:
      "Big Charity: Monetary help to the downtrodden to meet their daily living expenses",
  },
  {
    id: 4,
    img: "/image2.jpeg",
    title: "Big Charity: Helping parents meet Children's education",
  },
];

type CauseType = (typeof causesCards)[0];

export const Causes = () => {
  return (
    <MaxWidthWrapper className="bg-[#F1EEEC] py-10">
      <div className="flex flex-col gap-4">
        <motion.h3
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className=" font-sue_ellen_francisco text-xl text-[#FF6D6D]"
        >
          Our Causes
        </motion.h3>
        <motion.h2
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="text-[#2E4049] text-2xl font-shippori_mincho font-semibold"
        >
          You can help lots of people by
          <br /> donating little
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {causesCards.map((cause: CauseType) => (
            <CausesCard key={cause.id} image={cause.img} title={cause.title} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

const CausesCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="flex flex-1 flex-col gap-4 bg-white">
      <Image
        className="object-cover w-full h-auto"
        src={image}
        alt="Beneficiary Pic"
        width={250}
        height={250}
      />
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="flex flex-col gap-4 p-4 min-h-[180px] "
      >
        <p className="text-sm font-shippori_mincho font-extrabold flex-1">
          {title}
        </p>
        <span className="bg-[#FF6D6D] h-[2px] w-[70%]" />
        <Button
          asChild
          variant={"default"}
          className="uppercase w-fit font-shippori_mincho rounded-full"
        >
          <Link href="/donate">Donate</Link>
        </Button>
      </motion.div>
    </div>
  );
};
