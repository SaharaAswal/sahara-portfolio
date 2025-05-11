import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function mobileAppPage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h2 className="text-center mb-2 text-5xl font-Ovo">Scholarship</h2>
      <div
        style={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}
      >
        <Image
          src={assets.scholar}
          alt="Scholar Screenshot"
          width={400}
          height={350}
        />
      </div>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I graduated with a B.Tech in Electronics Instrumentation and Control
        from Thapar Institute of Engineering and Technology, Patiala, Punjab,
        India. I was honored with a prestigious scholarship for securing a place
        in the <span className="font-bold">top 5%</span> of my batch of 120
        students. Additionally, in secondary school, I was recognized for
        achieving a <span className="font-bold">perfect CGPA of 10.</span>{" "}
        Throughout my academic journey, I focused on developing my
        problem-solving, analytical, and programming skills, which have been
        valuable as I transition into the IT field. I'm now passionate about
        building efficient software solutions and working with new technologies.
      </p>
    </main>
  );
}
