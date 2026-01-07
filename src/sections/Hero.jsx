import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants";
import AnimatedHeroBackground from "../components/AnimatedHeroBackground";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power2.out" }
    );

    gsap.fromTo(
      ".hero-profile-image",
      { x: 100, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );
  });

  const handleWorkClick = () => {
    const workSection = document.querySelector("#work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <AnimatedHeroBackground />
      
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" loading="lazy" />
      </div>

      <div className="hero-layout flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center w-full lg:w-1/2 md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          loading="lazy"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Balasubramanyam, a developer with a strong passion for building modern, scalable applications.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              onClick={handleWorkClick}
            />
          </div>
        </header>

        {/* RIGHT: Profile Photo */}
        <figure className="flex lg:w-1/2 items-center justify-center px-5 md:px-0 lg:pr-10">
          <div className="hero-profile-image relative z-10 gpu-accelerate">
            <img
              src="/images/profile_pic.jpeg"
              alt="balu Profile"
              className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
