import { Slider } from "./_components/slider";
import { OurGoals } from "./_components/our-goals";
import { Causes } from "./_components/causes";
import { WhatWeDo } from "./_components/what-we-do";
import { EnrolAsVolunteer } from "./_components/enroll-as-volunteer";
import { Volunteers } from "./_components/volunteers";
import { Events } from "./_components/events";

export default function HomePage() {
  return (
    <>
      <Slider />
      <OurGoals />
      <Causes />
      <WhatWeDo />
      <EnrolAsVolunteer />
      <Volunteers />
      <Events />
    </>
  );
}
