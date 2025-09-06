import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the brainy Explorer"
          topic="Neural Network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Country the number Wizard"
          topic="Derivative & Integrals"
          subject="science"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Verba the vocabulary Builder"
          topic="Language"
          subject="English"
          duration={30}
          color="#BDE7FF"
        />
      </section>

      <section className="home-section">
        <CompanionList
        classNames= "w-2/3 max-lg:w-full" title="Recently completed sessions"
        companions={recentSessions}
        />
        <CTA />
      </section>
    </main>
  );
};

export default page;
