"use client";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import EnrolForm from "@/forms/enrol-form";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

export const EnrolAsVolunteer = () => {
  return (
    <div className="relative max-w-5xl mx-auto">
      <Image
        src="/image1.jpeg"
        alt="background image"
        width={1500}
        height={800}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          objectFit: "cover",
          zIndex: "-5",
        }}
      />
      <div className="backdrop-blur-xl bg-[#2E4049]/60 ">
        <MaxWidthWrapper className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-6">
            <div className="flex flex-col gap-4">
              <motion.h3
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="text-sm text-white font-sue_ellen_francisco "
              >
                How Can you Help?
              </motion.h3>
              <motion.h2
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="text-white text-xl md:text-2xl font-medium font-shippori_mincho capitalize"
              >
                Join us to renew the world! We&apos;re waiting for you!
              </motion.h2>
              <motion.p
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="text-xs text-white leading-5 tracking-wide"
              >
                Volunteers are an essential part of the SSVP. Through their
                work, commitment and hope, we can undertake many forms of social
                action which benefit millions of people. Each of us has
                something special to contribute. The SSVP has a very broad
                framework of action, in which you are sure to find something to
                suit you, and where your contribution will be valuable. Giving
                your love and time to others will make you happy.
              </motion.p>
              <motion.div
                variants={fadeIn("down", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="space-y-4"
              >
                <Image
                  src="/image5.jpg"
                  alt="Janakipuram church"
                  width={500}
                  height={500}
                />
                <Button asChild variant="custom" className="w-fit">
                  <Link href="/volunteer">Join Us</Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="flex flex-col gap-y-2 border border-white/30 rounded py-4 md:px-8"
            >
              <h2 className="text-white text-xl font-medium font-shippori_mincho">
                Become a volunteer
              </h2>
              <h3 className="text-white/80 text-sm font-medium font-poppins">
                Submit this form to sign up as a new volunteer
              </h3>

              <EnrolForm />
            </motion.div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};
