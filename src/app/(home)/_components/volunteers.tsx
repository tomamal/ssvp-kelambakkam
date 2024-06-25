"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { team } from "@/data/team";
import Link from "next/link";
import { TeamCard } from "@/components/team-card";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

export const Volunteers = () => {
  return (
    <MaxWidthWrapper className="bg-[#F1EEEC] py-10">
      <div className="flex flex-col gap-4">
        <div className="text-center">
          <motion.h3
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="text-xl text-[#FF6D6D] font-normal font-sue_ellen_francisco"
          >
            Team
          </motion.h3>
          <motion.h2
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="text-2xl text-[#2E4049] font-semibold font-shippori_mincho capitalize"
          >
            meet our volunteers
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.slice(0, 3).map((volunteer, idx) => (
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              key={idx}
              className=""
            >
              <TeamCard image={volunteer.image} name={volunteer.name} />
            </motion.div>
          ))}
          <div className="bg-[#77D7D3] p-6 rounded w-full">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/icons/volunteer.png"
                alt="volunteer icon"
                width={48}
                height={48}
              />
              <motion.h2
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="text-xl text-[#2E4049] text-center font-semibold font-shippori_mincho"
              >
                Become a Volunteer
              </motion.h2>
              <motion.p
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="text-sm font-normal font-shippori_mincho text-[#2E4049]"
              >
                It takes a society of one million committed people like you to
                serve everyone who needs help.
              </motion.p>
              <Button
                variant={"default"}
                size={"lg"}
                className="capitalise md:uppercase font-shippori_mincho rounded-full"
              >
                <Link href="/volunteer">Join us today</Link>
              </Button>
            </div>
          </div>
        </div>
        <Button
          asChild
          variant={"custom"}
          size="lg"
          className="w-fit rounded-full"
        >
          <Link href="/our-team">More...</Link>
        </Button>
      </div>
    </MaxWidthWrapper>
  );
};
