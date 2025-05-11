import Image from "next/image";
import React from "react";

export default function webProjectPage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1 className="text-center mb-2 text-lg font-Ovo">
        Banking API Development
      </h1>
      <h2 className="text-center text-5xl font-Ovo">Backend · Node.js</h2>

      <div
        style={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}
      >
        <Image
          src="work/api-creation.png"
          alt="backend screenshot"
          width={400}
          height={350}
        />
      </div>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I worked on the backend team for{" "}
        <span className="font-bold">Bank of Baroda</span> over a 3-month period,
        focusing on the development of robust and secure APIs using{" "}
        <span className="font-bold">Node.js.</span> The project involved
        building scalable endpoints to handle core banking functionalities such
        as transactions, user authentication, and data management. I ensured the
        APIs adhered to industry standards for performance, security, and error
        handling. My contributions supported seamless integration with the
        bank’s frontend systems and third-party services.
      </p>
    </main>
  );
}
