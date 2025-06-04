import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function mobileAppPage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h2 className="text-center mb-2 text-5xl font-Ovo">
        Data Analytics
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
        I'm currently pursuing a Data Analyst course focused on data analytics using Python. This program is helping me build strong skills in data cleaning, visualization, and statistical analysis. I'm gaining hands-on experience with libraries like Pandas, NumPy, and Matplotlib to draw meaningful insights from real-world datasets.
      </p>
    </main>
  );
}
