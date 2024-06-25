"use client";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

export const Events = () => {
  return (
    <MaxWidthWrapper className="bg-white py-10">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="flex flex-col sm:flex-row justify-between items-center"
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-xl text-[#FF6D6D] font-normal font-sue_ellen_francisco">
            Our Events
          </h3>
          <h2 className="text-2xl font-semibold font-shippori_mincho text-whte">
            Join Upcoming Events &<br /> Share your thoughts
          </h2>
        </div>
        <div>
          <Button variant="custom" size={"lg"} className="rounded-full">
            <Link href="/events">More Events</Link>
          </Button>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-8 gap-6">
        <div className="flex flex-col gap-2 relative">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <Image
              src="/ssvd-adopted-family1.jpg"
              alt="Event image"
              width={800}
              height={500}
              style={{ width: "100%", height: "auto" }}
              className="block aspect-[10/5] flex-shrink-0 flex-grow-0 object-cover "
            />
            <span className="absolute top-0 left-0 bg-destructive flex flex-col gap-0 px-2.5 py-0.5 ">
              <span className="text-lg text-white font-bold">18</span>
              <span className="text-xs text-white -translate-y-2">July</span>
            </span>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <h3 className=" text-muted-foreground text-xs font-medium  font-shippori_mincho">
              Distribution of monthly ration among the adopted families
            </h3>
          </motion.div>
        </div>

        <div className="flex flex-col gap-y-2 divide-y">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex gap-x-2 items-start"
          >
            <span className="bg-primary flex flex-col gap-0 px-2.5 py-0.5">
              <span className="text-lg text-white font-bold">07</span>
              <span className="text-xs text-white -translate-y-2">July</span>
            </span>
            <div className="flex flex-col justify-start gap-2">
              <h3 className="text-[#2E4049] text-base font-semibold font-shippori_mincho">
                Hundial Collection after Mass
              </h3>
              <p className=" text-[#2E4049] text-xs font-shippori_mincho">
                As part of the first sunday collections, volunteers stand
                outside the Divine Mercy church, with dumb boxes requesting
                contributions from the mass participants.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex gap-x-2 items-start py-2"
          >
            <span className="bg-primary flex flex-col gap-0 px-2.5 py-0.5 ">
              <span className="text-lg text-white font-bold">14</span>
              <span className="text-xs text-white -translate-y-2">July</span>
            </span>
            <div className="flex flex-col justify-start gap-2">
              <h3 className="text-[#2E4049] text-base font-semibold font-shippori_mincho">
                Meeting of Volunteers
              </h3>
              <p className=" text-[#2E4049] text-xs font-shippori_mincho">
                The volunteers of the Kelambakkam conference meet in the
                evening. Meeting opens with prayer and a passage from the Bible
                is read. After deliberating on the scripture passage, a
                discussion follows, where members evaluate the past performance
                and suggest action for the ensuing month. Meeting concludes with
                prayer.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex gap-x-2 items-start pt-2"
          >
            <span className="bg-primary flex flex-col gap-0 px-2.5 py-0.5">
              <span className="text-lg text-white font-bold">24</span>
              <span className="text-xs text-white -translate-y-2">July</span>
            </span>
            <div className="flex flex-col justify-start gap-2">
              <h3 className="text-[#2E4049] text-base font-semibold font-shippori_mincho">
                Lunch for orphaned children
              </h3>
              <p className=" text-[#2E4049] text-xs font-shippori_mincho">
                Visting the Shalom Children&apos;s home. Society of Vincent de
                Paul, Kelambakkam conference is sponsoring a meal for the
                children left orphaned and housed in the Shalom Children&apos;s
                home.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
