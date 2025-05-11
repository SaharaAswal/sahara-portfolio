import Image from "next/image";
import React from "react";

export default function webProjectPage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1 className="text-center mb-2 text-lg font-Ovo">
        Financial Analysis Dashboards
      </h1>
      <h2 className="text-center text-5xl font-Ovo">Data · Power BI</h2>
      <div
        style={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}
      >
        <Image
          src="work/data-visual.png"
          alt="data visual screenshot"
          width={400}
          height={350}
        />
      </div>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        During my internship at <span className="font-bold">VertexPlus</span>, a
        subcontractor for <span className="font-bold">Nokia</span>, I developed interactive dashboards for
        financial analysis using <span className="font-bold">Power BI.</span>
        The goal was to transform raw financial data into clear, actionable
        visual reports that could support decision-making at various levels. I
        worked on data modeling, creating KPIs, and designing intuitive visual
        layouts to represent revenue trends, cost breakdowns, and performance
        metrics. This project enhanced my understanding of business intelligence
        tools and real-world financial analysis, while also improving my skills
        in data transformation and storytelling through data visualization.
      </p>
    </main>
  );
}
