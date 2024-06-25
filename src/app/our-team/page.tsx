import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { TeamCard } from "@/components/team-card";
import { Button } from "@/components/ui/button";
import { team } from "@/data/team";
import Image from "next/image";
import Link from "next/link";

export default function OurTeamPage() {
  return (
    <section className="max-w-5xl mx-auto bg-white">
      <div className="relative">
        <Image
          src="/eye-camp-1.jpg"
          alt="eye camp voluntters"
          width={1200}
          height={600}
          style={{ width: "100%", height: "auto" }}
          className="block aspect-[10/5] flex-shrink-0 flex-grow-0 object-cover filter-none sm:filter brightness-[90%]"
        />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <div className="flex flex-col gap-1 p-4">
            <h2 className="text-xl font-sue_ellen_francisco text-white tracking-wider">
              Vincentian...
            </h2>
            <p className="text-3xl text-white font-shippori_mincho font-medium tracking-tight leading-none sm:text-nowrap">
              Our Current Team
            </p>
          </div>
        </div>
      </div>
      <MaxWidthWrapper className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {
            (Array.from({ length: 3 }),
            team.map((volunteer, idx) => (
              <TeamCard
                key={idx}
                image={volunteer.image}
                name={volunteer.name}
              />
            )))
          }
        </div>
      </MaxWidthWrapper>
      <div className="relative w-5xl mx-auto">
        <Image
          src="/eye-camp-1.jpg"
          alt="background image"
          width={1500}
          height={800}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <div className="absolute backdrop-blur-xl bg-[#FF6D6D]/60 top-0 left-0 w-full h-full">
          <MaxWidthWrapper className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 md:gap-6 text-center">
              <h3 className="text-3xl text-white font-shippori_mincho font-bold">
                Become a Volunteer
              </h3>
              <p className="hidden sm:block text-sm text-white w-[40vw]">
                Donate your time by volunteering. Anyone from any background is
                welcome to volunteer. You will be serving the local community,
                helping those in need.
              </p>
              <Button asChild className="w-fit">
                <Link
                  href="/volunteer"
                  className="text-sm font-shippori_mincho uppercase"
                >
                  join us now
                </Link>
              </Button>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </section>
  );
}
