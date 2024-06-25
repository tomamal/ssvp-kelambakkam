"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Video } from "@/components/video";
import Link from "next/link";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "@/lib/variants";

export const OurGoals = () => {
  return (
    <div className=" w-full h-full">
      <MaxWidthWrapper className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 mt-4 md:-mt-10">
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-col justify-between gap-4 bg-[#77D7D3] p-4 z-10"
          >
            <h3 className="text-xl font-bold text-[#2e4049]">Education</h3>
            <p className="text-xs text-black">
              Focused on removing educational barriers and bolstering academic
              support for students from low-income and disadvantaged families.
              Help first-generation college students to break the cycle of
              poverty.
            </p>
            <Button variant={"secondary"} className=" uppercase rounded-full">
              <Link href="/about-us">Discover</Link>
            </Button>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-col justify-between gap-4 bg-[#2E4049] p-4 z-10"
          >
            <h3 className="text-xl font-bold text-white">Become a volunteer</h3>
            <p className="text-xs text-white/70">
              Joining the Society of Saint Vincent de Paul means you long to
              change the world and improve your own life and that of others in
              the light of the Gospel.
            </p>
            <Button
              asChild
              variant={"secondary"}
              className="rounded-full uppercase"
            >
              <Link href="/volunteer">Join us</Link>
            </Button>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="bg-[#FF6D6D] z-10"
          >
            <Video />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white py-10">
          <div className="flex flex-col gap-4 pr-12">
            <motion.h3
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="text-sm font-sue_ellen_francisco font-medium text-[#FF6D6D] capitalize"
            >
              About Us
            </motion.h3>
            <motion.h2
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="text-xl md:text-2xl text-[#2E4049] font-bold font-shippori_mincho"
            >
              Our Main Goals
            </motion.h2>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="text-xs text-muted-foreground"
            >
              As an organ of SSVP, an international Christian voluntary
              organisation, we are dedicated to tackling poverty and
              disadvantage by providing direct practical assistance to those in
              need. Voluntary members visit the lonely, the sick, and the
              marginalised. Our goal is to bring God&apos;s love to those in
              need through the healing ministry of Jesus.
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="text-xs text-muted-foreground"
            >
              We focus on alleviating the impacts of poverty on individuals and
              families by engaging in direct, person-to-person assistance.
              Volunteers give their time, care and compassion to assist the most
              vulnerable in our community.
            </motion.p>
            <Button
              asChild
              variant="custom"
              className="rounded-full w-fit  uppercase"
            >
              <Link href="/about-us">More about</Link>
            </Button>
          </div>
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="bg-[#ECF1F0] rounded p-4"
          >
            <div className="h-full py-10">
              <div className="h-full flex flex-col gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col gap-2 text-xs">
                    <span className="flex gap-1 items-center ">
                      <Check
                        size={18}
                        stroke="#2E4049"
                        className="p-1 rounded-full bg-[#77D7D3]"
                      />
                      Food Donation
                    </span>
                    <span className="flex gap-1 items-center">
                      <Check
                        size={18}
                        stroke="#2E4049"
                        className="p-1 rounded-full bg-[#77D7D3]"
                      />
                      Emergency cash
                    </span>
                    <span className="flex gap-1 items-center">
                      <Check
                        size={18}
                        stroke="#2E4049"
                        className="p-1 rounded-full bg-[#77D7D3]"
                      />
                      Medicines
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    <span className="flex gap-1 items-center">
                      <Check
                        size={18}
                        stroke="#2E4049"
                        className="p-1 rounded-full bg-[#77D7D3]"
                      />
                      Intercessionary prayers
                    </span>
                    <span className="flex gap-1 items-center">
                      <Check
                        size={18}
                        stroke="#2E4049"
                        className="p-1 rounded-full bg-[#77D7D3]"
                      />
                      Education
                    </span>
                    <span className="flex gap-1 items-center">
                      <Check
                        size={18}
                        stroke="#2E4049"
                        className="p-1 rounded-full bg-[#77D7D3]"
                      />
                      Clothing
                    </span>
                  </div>
                </div>
                <div className="">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full w-fit uppercase text-[#2E4049] "
                  >
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
