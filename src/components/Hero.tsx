"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scope = sectionRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        overwrite: "auto",
      });

      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
        overwrite: "auto",
      });

      gsap.from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.6,
        overwrite: "auto",
      });

      gsap.from(".hero-image", {
        opacity: 0,
        x: 40,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
        overwrite: "auto",
      });

      gsap.to(".hero-image", {
        y: -30,
        scrollTrigger: {
          trigger: scope,
          scrub: true,
        },
      });
    }, scope);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[90vh] sm:min-h-screen flex items-center relative overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20"
      style={{
        background: `
          linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 15%),
          radial-gradient(ellipse 80% 50% at 20% 40%, rgba(229, 57, 53, 0.12) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 85% 85%, rgba(30, 70, 120, 0.35) 0%, transparent 50%),
          linear-gradient(165deg, #080c1a 0%, #0a0f2c 25%, #0D1B3D 50%, #152a4a 80%, #1a3a5c 100%)
        `,
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(229,57,53,0.08)_0%,transparent_40%)] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-accent/15 blur-[120px] rounded-full -top-16 -right-16 sm:-top-20 sm:-right-20"
        aria-hidden
      />
      <div
        className="absolute w-48 h-48 bg-primary/30 blur-[100px] rounded-full bottom-0 left-1/4 opacity-60"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 px-4 sm:px-6 lg:px-8 z-10 text-white">
        {/* Content column */}
        <div className="hero-text flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.2] sm:leading-tight">
            Leading Manufacturers Of{" "}
            <span className="text-accent">Material Handling</span> & Assembly
            Solutions
          </h1>

          <p className="hero-subtitle mt-4 sm:mt-6 text-base sm:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Precision-engineered solutions for industrial automation, material
            handling systems, and assembly line excellence.
          </p>

          <div className="hero-cta mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/contact">
              <motion.span
                className="inline-block bg-accent hover:bg-accent/90 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-glow font-semibold text-primary transition-colors w-full sm:w-auto text-center touch-manipulation"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Quote
              </motion.span>
            </Link>
            <Link href="/#products">
              <motion.span
                className="inline-block border-2 border-white/30 hover:border-white/50 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-white/90 hover:text-white transition-all w-full sm:w-auto text-center touch-manipulation"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View Products
              </motion.span>
            </Link>
          </div>
        </div>

        {/* Image column */}
        <div className="hero-image-wrapper order-1 lg:order-2 flex items-center justify-center lg:justify-end">
          <motion.div
            className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img
              src="https://onepullwire.com/wp-content/uploads/2020/10/try-again-1-3.png"
              alt="Industrial material handling and assembly solutions"
              className="hero-image w-full h-auto rounded-2xl sm:rounded-3xl shadow-premium object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}