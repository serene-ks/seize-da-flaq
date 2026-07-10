import { Suspense, lazy } from "react";
import { useLenis } from "@hooks/useLenis";

import Navbar from "@layout/Navbar";
import Hero from "@sections/Hero/Hero";
import MainCTF from "@sections/MainCTF";
import CTFCategories from "@sections/CTFCategories";
import Timeline from "@sections/Timeline";
import Sponsors from "@sections/Sponsors";
import FAQ from "@sections/FAQ";
import Footer from "@sections/Footer";
// Lazy loaded sections
const MissionBriefing = lazy(() => import("@sections/MissionBriefing"));
const CompetitionOverview = lazy(() => import("@sections/CompetitionOverview"));
const RegistrationDetails = lazy(() => import("@sections/RegistrationDetails"));
const CompetitionStructure = lazy(() => import("@sections/CompetitionStructure"));

function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <main id="main-content">
        <Hero />

        <Suspense
          fallback={
            <div className="py-32 text-center text-white/40">
              Loading...
            </div>
          }
        >
          <MissionBriefing />
          <MainCTF />
          <CTFCategories />
          <CompetitionOverview />
          <Timeline />
          <Sponsors />
          <RegistrationDetails />
          <CompetitionStructure />
          <FAQ />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;