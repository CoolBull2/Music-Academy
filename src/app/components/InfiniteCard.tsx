"use clien";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function InfiniteCard() {
  return (
    <div className="h-[40rem] w-full flex flex-col dark:bg-black dark:bg-grid-white/[0.2] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony : Voices of success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default InfiniteCard;

const testimonials = [
  {
    quote:
      "Learning piano at this school has been a game-changer. The instructors are so knowledgeable and patient, and I love the interactive lessons. I’ve improved more in six months here than I did in years of self-study.",
    name: "Emily Johnson",
    title: "Piano Student",
  },
  {
    quote:
      "As a guitar teacher, I’ve never seen students progress so quickly. The real-time feedback and collaboration tools make it easy to keep students on track, and the sense of community is really motivating.",
    name: "David Smith",
    title: "Guitar Instructor",
  },
  {
    quote:
      "I was nervous about learning the violin as an adult, but the supportive environment and customized lesson plans have made it a joy. I can see my improvement with every session!",
    name: "Sarah Lee",
    title: "Violin Student",
  },
  {
    quote:
      "The progress tracking feature is fantastic. It’s motivating to see how far I’ve come and set new goals with my saxophone practice. The school really cares about each student's success.",
    name: "Michael Brown",
    title: "Saxophone Student",
  },
  {
    quote:
      "I’ve been teaching here for five years, and the focus on student growth and community is unparalleled. The platform makes teaching both fun and effective, and I love seeing my students reach their potential.",
    name: "Jessica Williams",
    title: "Voice Instructor",
  },
];
