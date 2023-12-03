import React from "react";

const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="relative flex h-72 w-full flex-col items-center justify-center px-10"
    >
      {/* SVG background */}
      <svg
        id="visual"
        viewBox="0 0 100% 100%"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        className="svg-background"
      >
        {/* Your SVG content */}
        <rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect>
        <path
          d="M0 471L21.5 467.5C43 464 86 457 128.8 465.3C171.7 473.7 214.3 497.3 257.2 496C300 494.7 343 468.3 385.8 463.5C428.7 458.7 471.3 475.3 514.2 469.8C557 464.3 600 436.7 642.8 433.3C685.7 430 728.3 451 771.2 454.5C814 458 857 444 878.5 437L900 430L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
          fill="#f2f2f2"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>

      {/* Content */}
      <h1 className="mb-10 text-center text-3xl font-bold md:mb-16 md:text-4xl">
        WELCOME TO MT. KISCO SMOKEHOUSE{" "}
      </h1>
      <div className="flex flex-col items-center gap-2 rounded bg-[#F37624] px-10 py-8 font-semibold text-white md:flex-row md:text-lg">
        <p>520 Lexington Ave</p>
        <svg
          viewBox="0 0 2 2"
          width={3}
          height={3}
          aria-hidden="true"
          className="hidden fill-white md:block"
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
