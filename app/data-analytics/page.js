import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function mobileAppPage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h2 className="text-center mb-2 text-5xl font-Ovo">
        Data Analytics with Gen AI
      </h2>
      <div
        style={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}
      >
        <Image
          src={assets.in_progress}
          alt="Data Analytics Screenshot"
          width={400}
          height={350}
        />
      </div>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am currently enrolled in a 6-month course in Data Analytics with
        Generative AI offered by Coding Ninjas. This program is helping me build
        a strong foundation in data handling, statistical analysis, data
        visualization, and the practical applications of AI tools like large
        language models. The course emphasizes real-world projects and hands-on
        learning, allowing me to apply theoretical knowledge to solve practical
        problems. Through this program, I aim to strengthen my understanding of
        data-driven decision-making and explore how generative AI can enhance
        business intelligence, automation, and innovation in software solutions.
      </p>
    </main>
  );
}
