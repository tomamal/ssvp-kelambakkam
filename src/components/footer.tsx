import Link from "next/link";
import Image from "next/image";
import { MaxWidthWrapper } from "./max-width-wrapper";

export const Footer = () => {
  return (
    <footer className="relative bg-[#2E4049] py-4">
      <MaxWidthWrapper className="container py-10">
        <div className="grid  grid-cols-1 sm:grid-cols-[1fr_,2fr] gap-8 ">
          <div className="flex flex-col gap-4 ">
            <span className=" relative flex items-center gap-1">
              <Image
                src="/SSVP-logo.png"
                alt="SSVP logo"
                width={30}
                height={30}
                style={{ width: "24px", height: "24px", objectFit: "cover" }}
              />
              <h1 className="text-sm text-white font-medium font-shippori_mincho">
                SSVP Kelambakkam
              </h1>
            </span>
            <p className="text-sm text-white/80 leading-relaxed font-shippori_mincho">
              Working in solidarity with those experiencing poverty and
              disadvantage, we advocate for and implement the necessary changes
              to build a more just and caring society. We focus on alleviating
              the impacts of poverty on individuals and families by engaging in
              direct, person-to-person assistance.
            </p>
          </div>
          <div className="flex justify-around bg-[#384C56] py-6 ">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm text-white font-medium font-shippori_mincho">
                Get Involved
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/about-us"
                  className="text-xs font-light text-white/80 hover:text-white/70 hover:underline"
                >
                  About us
                </Link>
                <Link
                  href="/volunteer"
                  className="text-xs font-light text-white/80 hover:text-white/70 hover:underline"
                >
                  Volunteer
                </Link>
                <Link
                  href="/events"
                  className="text-xs font-light text-white/80 hover:text-white/70 hover:underline"
                >
                  Events
                </Link>
                <Link
                  href="/our-team"
                  className="text-xs font-light text-white/80 hover:text-white/70 hover:underline"
                >
                  Team
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Link href="/contact-us">
                <h3 className="text-white text-sm font-medium font-shippori_mincho">
                  Contact
                </h3>
              </Link>
              <div className="flex flex-col gap-1 text-xs text-white/80">
                <p>Divine Mercy Church</p>
                <p>Kelambakkam</p>
                <p>Chennai</p>
                <p>Phone:</p>
                <p>Email:</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center ">
        <span className="bg-[#384C56] h-[2px] w-full" />
        <div className="flex flex-col sm:flex-row gap-1 text-xs font-medium font-shippori_mincho text-white/70 py-4">
          <span>&copy; 2024</span>
          <span className="bg-[#384C56] w-[2px] h-full"></span>
          <span className="text-wrap">
            Designed & developed by Thomas Amalraj K
          </span>
        </div>
      </div>
    </footer>
  );
};
