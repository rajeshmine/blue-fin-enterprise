"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { HERO } from "@/lib/content";

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

      {/* Professional illustration-style elements */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      <div className="absolute top-[20%] right-[12%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border border-white/15 rounded-lg rotate-6 pointer-events-none" aria-hidden />
      <div className="absolute top-[45%] right-[6%] w-10 h-10 sm:w-12 sm:h-12 border border-accent/25 rounded-full pointer-events-none" aria-hidden />
      <div className="absolute bottom-[30%] right-[20%] w-12 h-12 sm:w-14 sm:h-14 bg-white/[0.03] rounded-md -rotate-12 pointer-events-none" aria-hidden />
      <div className="absolute top-[35%] left-[4%] w-6 h-6 sm:w-8 sm:h-8 border border-white/12 rounded-full pointer-events-none" aria-hidden />
      <div className="absolute bottom-[25%] left-[10%] w-20 h-px sm:w-28 bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none" aria-hidden />
      <div className="absolute top-[55%] left-[6%] w-px h-12 sm:h-16 bg-gradient-to-b from-transparent via-white/15 to-transparent pointer-events-none" aria-hidden />
      <svg className="absolute bottom-[15%] right-[8%] w-24 h-24 sm:w-32 sm:h-32 text-white/[0.03] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 px-4 sm:px-6 lg:px-8 z-10 text-white">
        {/* Content column */}
        <div className="hero-text flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.2] sm:leading-tight">
            {HERO.headline}{" "}
            <span className="text-accent">{HERO.headlineAccent}</span> {HERO.headlineSuffix}
          </h1>

          <p className="hero-subtitle mt-4 sm:mt-6 text-base sm:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {HERO.subheadline}
          </p>

          <div className="hero-cta mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href={HERO.ctaPrimaryHref}>
              <motion.span
                className="inline-block bg-accent hover:bg-accent/90 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-glow font-semibold text-primary transition-colors w-full sm:w-auto text-center touch-manipulation"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {HERO.ctaPrimary}
              </motion.span>
            </Link>
            <Link href={HERO.ctaSecondaryHref}>
              <motion.span
                className="inline-block border-2 border-white/30 hover:border-white/50 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-white/90 hover:text-white transition-all w-full sm:w-auto text-center touch-manipulation"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {HERO.ctaSecondary}
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
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-premium ring-1 ring-white/10">
              <img
                src={HERO.image.src}
                alt={HERO.image.alt}
                className="hero-image w-full h-auto object-contain"
              />
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/10 pointer-events-none" aria-hidden />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}