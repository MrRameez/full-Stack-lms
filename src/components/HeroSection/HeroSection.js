"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="container relative bg-blue-50 py-24 px-8 text-center overflow-hidden">
      {/* Background Image with Subtle Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSkvpoBPaWnrOZCNwxTHsDPmrYiuPBeOiCLA&s")',
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-0"></div>

      <div className="relative max-w-4xl mx-auto z-10 text-white">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Transform Your Career with World-Class Learning
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-base md:text-lg mb-8 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Elevate your skills with curated courses from top experts. Gain
          industry-relevant knowledge and recognized certifications—all in one
          place.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <Button
            variant="solid"
            className={cn(
              "bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium shadow-md transform hover:scale-105 transition"
            )}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            className={cn(
              "border border-white text-black py-3 px-6 rounded-lg font-medium shadow-md hover:bg-white hover:text-blue-600 transform hover:scale-105 transition"
            )}
          >
            View Courses
          </Button>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          <div className="bg-white/10 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
            <p className="text-sm">
              Learn from top instructors with hands-on experience in the
              industry.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Flexible Learning</h3>
            <p className="text-sm">
              Access courses anytime, anywhere, at your own pace.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Career Growth</h3>
            <p className="text-sm">
              Boost your skills and earn certifications to accelerate your
              career.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
