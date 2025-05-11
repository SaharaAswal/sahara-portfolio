import Image from "next/image";
import React from "react";
import { useRouter } from 'next/router';

const { basePath } = useRouter();


export default function webProjectPage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1 className="text-center mb-2 text-lg font-Ovo">
        Template website for demos
      </h1>
      <h2 className="text-center text-5xl font-Ovo">UI Design · Next.js</h2>
      <div
        style={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}
      >
        <Image
          src={`${basePath}/work/web-design.png`} 
          alt="web design screenshot"
          width={400}
          height={350}
        />
      </div>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I built a versatile and responsive{" "}
        <span className="font-bold">website</span> using{" "}
        <span className="font-bold">Next.js</span> that functions as a reusable
        template for delivering demos to clients. Designed with flexibility in
        mind, the site allows our team to quickly showcase different projects
        without starting from scratch each time. It features modular components,
        dynamic routing, and consistent visual styling, making it easy to adapt
        for various client needs. The goal was to streamline the demo process
        and maintain a polished presentation standard. This project highlights
        my front-end skills in creating scalable, maintainable UI systems
        optimized for performance and clarity.
      </p>
    </main>
  );
}
