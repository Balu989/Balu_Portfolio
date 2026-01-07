import { lazy, Suspense } from "react";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";

const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const Projects = lazy(() => import("./sections/Projects"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Skills = lazy(() => import("./sections/Skills"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const LoadingFallback = () => <div style={{ height: "100vh" }} />;

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Suspense fallback={<LoadingFallback />}>
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <Projects />
      <TechStack />
      <Skills />
      <Contact />
      <Footer />
    </Suspense>
  </>
);

export default App;
