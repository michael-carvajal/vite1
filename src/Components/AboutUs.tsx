import React from "react";

const AboutUs = () => {
  return (
    <section className="flex h-72 w-full flex-col items-center justify-center px-10">
      <h1 className="mb-10 text-center text-3xl font-bold md:mb-16 md:text-4xl">
        WELCOME TO MT. KISCO SMOKEHOUSE{" "}
      </h1>
      <div className="flex flex-col items-center gap-2 font-semibold md:flex-row md:text-lg py-8 px-10 rounded text-white bg-[#F37624]">
        <p>520 Lexington Ave</p>
        <svg
          viewBox="0 0 2 2"
          width={3}
          height={3}
          aria-hidden="true"
          className="hidden  fill-white md:block"
        >
          <circle cx={1} cy={1} r={1} />
        </svg>{" "}
        <p>Mt Kisco, NY</p>
        <svg
          viewBox="0 0 2 2"
          width={3}
          height={3}
          aria-hidden="true"
          className="hidden fill-white md:block"
        >
          <circle cx={1} cy={1} r={1} />
        </svg>
        <a href="tel:9142440702">914-244-0702</a>
      </div>
    </section>
  );
};

export default AboutUs;
