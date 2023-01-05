import React, { lazy, Suspense, useState } from "react";
import { Lazy } from "swiper";
import Spinner from "../../Shared/Spinner";
import AboutUs from "./AboutUs";
import FAQ from "./Faq";
import Hero from "./Hero";
// import ThingsYouNeed from "./ThingsYouNeed";
import VacationPlan from "./VacationPlan";
const ThingsYouNeed = lazy(() => import('./ThingsYouNeed'))

const Main = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Hero />
      <ThingsYouNeed />
      <VacationPlan />
      <AboutUs />
      <FAQ />
    </Suspense>
  );
};

export default Main;
