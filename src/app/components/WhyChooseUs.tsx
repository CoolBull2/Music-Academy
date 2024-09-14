"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const content = [
  {
    title: "Interactive Music Lessons",
    description:
      "Learn music with our interactive, real-time lessons. Collaborate with instructors and other students to enhance your skills, share ideas, and master your instrument with ease. Our platform streamlines your learning process for a more engaging experience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Interactive Music Lessons
      </div>
    ),
  },
  {
    title: "Real-Time Feedback",
    description:
      "Get immediate feedback as you play. Our platform enables instructors to provide real-time suggestions and corrections to help you improve quickly. No more waiting for the next class – get feedback instantly and progress faster.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Real-Time Feedback
      </div>
    ),
  },
  {
    title: "Track Your Progress",
    description:
      "Monitor your musical journey with ease. Our platform keeps track of your performances and lessons, helping you review your progress and stay on top of your goals. Stay motivated as you watch your skills grow over time.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Track Your Progress
      </div>
    ),
  },
  {
    title: "Join Our Music Community",
    description:
      "Connect with fellow musicians and instructors. Share your experiences, collaborate on projects, and participate in group lessons. Join a thriving community that helps you grow as a musician.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Join Our Music Community
      </div>
    ),
  },
];

function WhyChooseUs() {
  return <StickyScroll content={content} />;
}

export default WhyChooseUs;
