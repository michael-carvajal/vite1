// @ts-ignore
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
    const text =
      "I drive close to 30 mins each way every weekend to Mt Kisco Smokehouse and it's worth it! My family loves their baked salmon salad, but i prefer their hand sliced nova and scotch salmon. Both smooth, silky and delicious, but the scotch has a bit more flavor which i prefer. And it's not salty like at some other place. If you are in a rush, the pre-sliced is among the best you'll find anywhere. If you are a bit more adventurous try the sable, baked salmon, or smoked tuna salad. They also have a nice selection of cheeses and usually a few veggies and lemons if you like to dress your bagel.";
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedText = isExpanded ? text : text.slice(0, 100) + "...";

  return (
    <section id='testimonials' className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
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
          loop={true}
          modules={[Autoplay, Pagination]}
          //   onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  “The best smoked salmon ever, period.. Friendly helpful staff
                  too !!”
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src="https://s3-media0.fl.yelpcdn.com/photo/NeJ6wgmu6J2HOae4BCz-Eg/60s.jpg"
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Steve Z.</div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">Boynton Beach, FL</div>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>{truncatedText}</p>
                {!isExpanded && (
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="text-blue-500"
                  >
                    Read more
                  </button>
                )}
              </blockquote>
              <figcaption className="mt-10">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src="https://s3-media0.fl.yelpcdn.com/photo/L9XkyPNdalYFZkMOx54Ucw/60s.jpg"
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Richard S.</div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">White Plains, NY</div>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  “The best smoked salmon you will ever taste. There is no
                  comparison between hand-sliced nova that literally melts in
                  your mouth and the stuff you buy in packages in the grocery
                  stores. Their prices are very reasonable and they usually have
                  an excellent selection of other smoked appetizers. They make
                  you feel very welcome and the fish is smoked on site.”
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src="https://s3-media0.fl.yelpcdn.com/photo/EmlkxPIgGnL6X91L_w-SIA/60s.jpg"
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Scott B.</div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">Stamford, CT</div>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
