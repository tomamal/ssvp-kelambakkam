"use client";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { events } from "@/data/events";
import { cn } from "@/lib/utils";
import { format, getDate, isPast } from "date-fns";
import Image from "next/image";

interface Event {
  id: number;
  date: Date;
  image: string;
  title: string;
  description: string;
}

let sortedEvents = events.sort((a, b) => {
  return b.date.getTime() - a.date.getTime(); // descending
});

export default function EventsPage() {
  return (
    <section className="max-w-5xl mx-auto bg-white">
      <div className="relative">
        <Image
          src="/image5.jpg"
          alt="visit to Janakipuram"
          width={1200}
          height={400}
          className="block aspect-10/6 flex-shrink-0 flex-grow-0 object-cover filter brightness-75"
        />
        <div className="absolute top-[50%] left-[30%] translate-x-[-30%] translate-y-[-50%]">
          <div className="flex flex-col gap-2 ">
            <h3 className="text-xl text-white font-normal font-sue_ellen_francisco tracking-wide">
              Our Events...
            </h3>
            <h2 className="text-xl text-wrap sm:text-3xl text-white font-shippori_mincho font-medium tracking-tight leading-none sm:text-nowrap">
              Join Upcoming Events
            </h2>
          </div>
        </div>
      </div>

      <MaxWidthWrapper className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4">
          {sortedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="flex flex-col gap-y-2 relative">
      <Image
        src={event.image}
        alt="event.title"
        width={800}
        height={600}
        style={{ width: "100%", height: "auto" }}
        className="block aspect-video flex-shrink-0 flex-grow-0 object-cover rounded-md"
      />
      <div
        className={cn(
          "absolute top-0 left-0",
          isPast(new Date(event.date)) ? "bg-[#2E4049]" : "bg-destructive"
        )}
      >
        <div className="flex flex-col items-center px-2 py-2">
          <span className="text-xl text-white font-shippori_mincho font-bold tracking-wide leading-3">
            {getDate(new Date(event.date))}
          </span>
          <span className="text-sm text-white font-shippori_mincho">
            {format(new Date(event.date), "MMM")}
          </span>
        </div>
      </div>
      <h3 className="text-sm text-[#2E4049] font-bold font-shippori_mincho leading-tight line-clamp-2">
        {event.title}
      </h3>
      <p className="text-xs text-muted-foreground font-poppins font-medium text">
        {event.description}
      </p>
    </div>
  );
};
