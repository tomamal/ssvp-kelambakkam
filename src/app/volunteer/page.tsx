
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import EnrolForm from "@/forms/enrol-form";
import Image from "next/image";

export default function VolunteerPage() {
  return (
    <section className="max-w-5xl mx-auto bg-white">
      <div className="relative">
        <Image
          src="/joseph-hospice-2.jpg"
          alt="about-us"
          width={1200}
          height={600}
          style={{ width: "100%", height: "auto" }}
          className="block aspect-[10/5] flex-shrink-0 flex-grow-0 object-cover filter-none sm:filter brightness-75"
        />
        <div className="sm:absolute sm:top-[50%] sm:left-[30%] sm:translate-x-[-30%] sm:translate-y-[-50%] ">
          <div className="flex flex-col gap-1 p-4">
            <h2 className="text-xl font-sue_ellen_francisco sm:text-white tracking-wider">
              Need Your Heartful Help...
            </h2>
            <p className="text-3xl sm:text-white font-shippori_mincho font-medium tracking-tight leading-none sm:text-nowrap">
              Become a Volunteer
            </p>
          </div>
        </div>
      </div>
      <MaxWidthWrapper>
        <div className="py-4 sm:py-10 divide-y space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <p className="italic font-medium">
              “Christ has no body now on earth but yours, no hands but yours, no
              feet but yours; Yours are the eyes through which to look out with
              Christ&apos;s compassion to the world; Yours are the feet with
              which he is to go about doing good; Yours are the hands with which
              he is to bless men now.”” — Teresa of Ávila
            </p>
            <Image
              src="/ganesan-ration.jpg"
              alt=""
              width={500}
              height={300}
              style={{ width: "100%", height: "auto" }}
              className="block aspect-[10/5] flex-shrink-0 flex-grow-0 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 pt-8">
            <Image
              src="/sekar-hundial.jpg"
              alt=""
              width={500}
              height={300}
              style={{ width: "100%", height: "auto" }}
              className="block aspect-[10/5] flex-shrink-0 flex-grow-0 object-cover"
            />

            <p className="text-base text-[#2E4049] font-poppins py-4">
              The Mission of the Society of St. Vincent de Paul is “a network of
              friends, inspired by Gospel values, growing in holiness and
              building a more just world through personal relationships with and
              service to people in need.” Volunteerism, therefore, is the heart
              of the Society of St. Vincent de Paul and our work helping
              neighbors in need.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="bg-[#F1EEEC] w-full">
        <MaxWidthWrapper className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-sue_ellen_francisco text-destructive">
                Help the People With Us
              </h3>
              <h2 className="text-2xl text-[2E4049] font-shippori_mincho font-semibold pb-4">
                Need Your Heartful Help
              </h2>
              <p className="text-[#727272] font-poppins text-sm">
                Volunteers are vital to gather resources and for our work to
                feed, clothe, house and heal people in need. Just as important,
                we believe that the experience of volunteering is life-giving
                and life-changing. That&apos;s why we created a wide range of
                volunteer opportunities to fit all ages and all lifestyles. In
                addition, we intentionally foster meaningful service experiences
                that give both volunteers and program guests the joy of
                community and connection.
              </p>
              <p className="text-[#727272] font-poppins text-sm">
                With a wide range of needs across the communities, there are
                many ways to share your time, talent and skills. Explore various
                service opportunities and find the right fit, whether you are
                volunteering alone, with your family or with a group!
              </p>
              <h2 className="text-2xl text-[#2E4049] font-shippori_mincho font-semibold pt-4">
                Experience the joy of service.
              </h2>
            </div>
            <div className="bg-white">
              <div className="p-8 space-y-2">
                <h3 className="text-xl text-[#2E4049] font-shippori_mincho font-semibold">
                  Complete the form
                </h3>
                <p className="text-xs text-destructive font-poppins">
                  Fill the form and become a volunteer
                </p>
                <EnrolForm />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
