import Image from "next/image";
import React from "react";

export default function mobileAppPage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1 className="text-center mb-2 text-lg font-Ovo">Mobile Banking App</h1>
      <h2 className="text-center text-5xl font-Ovo">Frontend · React Native</h2>

      <div
        style={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}
      >
        <Image
          src="work/mobile-banking.png"
          alt="Bob Bank Project Screenshot"
          width={400}
          height={350}
        />
      </div>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        As a frontend developer, I contributed to building a mobile application
        for <span className="font-bold">Bank of Baroda (BoB)</span>, one of
        India’s largest and most trusted public sector banks. Working as part of
        the frontend team, I used{" "}
        <span className="font-bold">React Native</span> to help develop a
        seamless, responsive, and user-friendly experience across Android and
        iOS platforms. My role involved implementing key UI components, ensuring
        performance optimization, and collaborating closely with designers and
        backend teams. Bank of Baroda, known for its wide banking network and
        customer-first approach, required a modern digital solution—which we
        delivered successfully through clean code and thoughtful user interface
        design.
      </p>
    </main>
  );
}
