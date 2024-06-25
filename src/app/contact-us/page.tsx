
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ContactUsForm } from "@/forms/contact-us-form";
import Image from "next/image";
import { Mail, MailIcon, Phone } from "lucide-react";

export default function ContactUsPage() {
  return (
    <section className="max-w-5xl mx-auto bg-white">
      <div className="relative">
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
              Contact
            </h2>
            <p className="text-xl sm:text-4xl text-white font-shippori_mincho font-semibold tracking-tight leading-none">
              Get in Touch
            </p>
          </div>
        </div>
      </div>
      <MaxWidthWrapper className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="">
              <h3 className="text-xl font-sue_ellen_francisco text-destructive tracking-wider">
                Contact
              </h3>
              <h2 className="text-2xl text-[#2E4049] font-shippori_mincho font-medium tracking-tight leading-none">
                Get in Touch With Us
              </h2>
              <p className="text-base text-muted-foreground font-shippori_mincho pt-4 ">
                Please fill in and submit the form alongside. Our volunteers
                will contact you.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <span className="bg-primary-foreground p-4">
                  <MailIcon className="text-destructive w-6 h-6 " />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-shippori_mincho font-semibold">
                    Message
                  </span>
                  <span className="text-xs text-muted-foreground">
                    support@ssvdp.com
                  </span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <span className="bg-primary-foreground p-4">
                  <Phone className="text-destructive w-6 h-6" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-shippori_mincho font-semibold">
                    Contact Us
                  </span>
                  <span className="text-xs text-muted-foreground">
                    +91 98432 354386
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ContactUsForm />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
