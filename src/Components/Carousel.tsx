import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import platter from '../images/platter.jpg'
import salmonCut from '../images/salmon_cut.jpg'
import smokedTrout from '../images/smoked_trout.jpg'
import packed2 from '../images/packed2.jpg'

const Carousel = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLElement>(null!);
  const onAutoplayTimeLeft = (s: any, time: number, progress: any) => {
    progressCircle.current?.style.setProperty(
      "--progress",
      (1 - progress).toString()
    );
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      speed={900}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
        stopOnLastSlide: true,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      //   onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper -z-10"
    >
      <SwiperSlide>
        <div className="w-full rounded-lg border p-4 text-center shadow sm:p-8">
          <img
            src={platter}
            alt="app screenshot"
            className="mx-auto rounded-lg"
            style={{ width: "100%", maxWidth: "50%" }}
            loading="lazy"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full rounded-lg border p-4 text-center shadow sm:p-8">
          <img
            src={salmonCut}
            alt="app screenshot"
            className="mx-auto rounded-lg"
            style={{ width: "100%", maxWidth: "50%" }}
            loading="lazy"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full rounded-lg border p-4 text-center shadow sm:p-8">
          <img
            src={smokedTrout}
            alt="app screenshot"
            className="mx-auto rounded-lg"
            style={{ width: "100%", maxWidth: "50%" }}
            loading="lazy"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full rounded-lg border p-4 text-center shadow sm:p-8">
          <img
            src={packed2}
            alt="app screenshot"
            className="mx-auto rounded-lg"
            style={{ width: "100%", maxWidth: "50%" }}
            loading="lazy"
          />
        </div>
      </SwiperSlide>
      {/* <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div> */}
    </Swiper>
  );
};

export default Carousel;
