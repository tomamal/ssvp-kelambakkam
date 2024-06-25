import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Check } from "lucide-react";
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

export default function AboutUsPage() {
  return (
    <section className="max-w-5xl h-full mx-auto flex flex-col items-center">
      <div className="relative w-full h-full">
        <Image
          src="/joseph-hospice.jpg"
          alt="about-us"
          width={1200}
          height={600}
          style={{ width: "100%", height: "auto" }}
          className="block aspect-[10/5] flex-shrink-0 flex-grow-0 object-cover filter brightness-75"
        />
        <div className="absolute top-[50%] left-[30%] translate-x-[-30%] translate-y-[-50%] ">
          <div className="flex flex-col gap-1 p-4">
            <h2 className="text-xl font-sue_ellen_francisco text-white tracking-wider">
              What We Do...
            </h2>
            <p className="text-4xl text-white font-shippori_mincho font-medium tracking-tight leading-none">
              About SSVP
            </p>
          </div>
        </div>
      </div>
      <MaxWidthWrapper className="bg-white py-15">
        <div className="flex flex-col gap-4 ">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-sue_ellen_francisco text-red-500 tracking-wide font-medium">
                About us
              </h3>
              <h2 className="text-2xl text-[#2E4049] font-semibold font-shippori_mincho leading-7 capitalize ">
                Assisting the most vulnerable in our community.
              </h2>
            </div>

            <p className="text-sm text-muted-foreground">
              The SSVP is an international Christian voluntary organisation
              dedicated to tackling poverty and disadvantage by providing direct
              practical assistance to those in need– irrespective of ideology,
              faith, ethnicity, age or gender. The vision of SSVP is to be a
              global catholic charity organization providing aid, development
              and hope to the poor and the marginalized. Today about 8,00,000
              active members and 1.5 million volunteers spread over 150
              countries preserve the spirit of St. Vincent de Paul and the
              charity work of Frederic Ozanam and his friends, in continuing to
              provide aid to those most in need whilst maintaining alive the
              message of Christ.
            </p>
          </div>

          <div className="space-y-20 divide-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <Image
                  src="/joseph-hospice-2.jpg"
                  alt="charity"
                  width={1600}
                  height={742}
                  className=" object-cover aspect-video "
                />

                <div className="absolute -bottom-12 -left-5 w-[200px] bg-[#2e4049] py-6 px-2 hidden md:block z-10">
                  <div className="flex gap-2">
                    <ImQuotesLeft
                      fill="white"
                      className="self-start w-8 h-8 -my-4"
                    />
                    <span className="text-sm text-white font-normal">
                      He is truly great, who hath a great charity
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-y-2">
                <p className="text-sm text-muted-foreground">
                  We focus on alleviating the impacts of poverty on individuals
                  and families by engaging in direct, person-to-person
                  assistance. volunteers across the country who give their time,
                  care and compassion to assist the most vulnerable in our
                  community. We are inspired by Christ&apos;s message to love
                  our neighbour as ourselves. We serve individuals and families
                  who are in any form of need to have hope, together with a
                  sense of dignity, worth, well-being and peace of mind. Our
                  volunteers give their time, care and compassion to assist the
                  most vulnerable in our community.
                </p>

                <p className="bg-[#DEF1F0] text-xs text-[#2E4049] p-4 w-fit rounded-md">
                  Save the Children <br />
                  We believe every child deserves a future
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6">
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-shippori_mincho font-semibold">
                  Our Goal
                </h2>
                <div className="space-y-4">
                  <p className="text-[#727272] text-sm">
                    We aspire to be recognised as a caring Catholic charity
                    offering a helping hand to people in need. We do this by
                    respecting every person&apos;s human dignity, sharing our
                    hope, and encouraging them to take control of their own
                    destiny. To this end, our activities include:
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-6">
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
                    </div>

                    <div className="flex gap-6">
                      <span className="flex gap-1 items-center ">
                        <Check
                          size={18}
                          stroke="#2E4049"
                          className="p-1 rounded-full bg-[#77D7D3]"
                        />
                        Medicines
                      </span>

                      <span className="flex gap-1 items-center">
                        <Check
                          size={18}
                          stroke="#2E4049"
                          className="p-1 rounded-full bg-[#77D7D3]"
                        />
                        Education
                      </span>
                    </div>
                    <div className="flex gap-6">
                      <span className="flex gap-1 items-center ">
                        <Check
                          size={18}
                          stroke="#2E4049"
                          className="p-1 rounded-full bg-[#77D7D3]"
                        />
                        Clothing
                      </span>

                      <span className="flex gap-1 items-center">
                        <Check
                          size={18}
                          stroke="#2E4049"
                          className="p-1 rounded-full bg-[#77D7D3]"
                        />
                        Encourage to join us volunteers
                      </span>
                    </div>
                  </div>
                  <p className="text-[#727272] text-sm">
                    We are presently operating with a team of volunteers who are
                    dedicated to tackling poverty and disadvantage by providing
                    direct practical assistance to anyone in need.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-shippori_mincho font-semibold">
                  Our Mission
                </h2>
                <p className="text-[#727272] text-sm">
                  Our mission is to serve Christ in the poor with love, respect,
                  justice, hope and joy, and to help shape a more just and
                  compassionate society.
                </p>
                <Image
                  src="/adopted-family-ration.jpg"
                  alt="First sunday collection image"
                  width={1599}
                  height={899}
                  style={{ width: "100%", height: "auto" }}
                  className="block aspect-video flex-shrink-0 flex-grow-0 object-cover pt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
