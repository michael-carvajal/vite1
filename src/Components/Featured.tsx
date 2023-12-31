import React, { useEffect, useState } from "react";
import smokingSalmon3 from "../images/smoking_salmon3.jpg";
import plate from "../images/plate.jpg";
import platter2 from "../images/platter2.jpg";
import spread from "../images/spread.jpg";

const salmonImages = [smokingSalmon3, plate, platter2, spread];

const Featured = () => {
  const [salmonImage, setSalmonImage] = useState(0);

  useEffect(() => {
    const imagesArrayLength = salmonImages.length;
    const
      imageInterval = setInterval(() => {
      if (salmonImage === imagesArrayLength - 1) {
        setSalmonImage(0);
      } else {
        setSalmonImage((prev) => prev + 1);
      }
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(imageInterval);
  }, [salmonImage]);

  return (
    <div
      className="my-12  flex flex-col shadow-2xl md:flex-row  "
      id="featured"
    >
      <div className="flex flex-col gap-6 p-6">
        <img
          src={salmonImages[salmonImage]}
          className=" h-72 w-full rounded object-cover"
        />
        <h3 className="text-lg font-semibold">OUR SMOKED SALMON</h3>
        <p className="gothic-texts">
          Our smokehouse smokes fresh sustainably-raised Atlantic salmon onsite
          everyday. All of our smoked salmon varieties are all-natural, use no
          preservatives, and are never frozen before or after smoking. We don’t
          stock an inventory of smoked salmon—we receive our fish directly from
          the airport and after inspection it goes right into our smoking
          process and then out the door to be delivered to our customers.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-6 p-6">
        <img
          src={salmonImages[salmonImage]}
          className=" h-72 w-full rounded object-cover"
        />
        <h3 className="text-lg font-semibold">OUR SMOKED SALMON</h3>
        <p className="gothic-texts">
          Our smokehouse smokes fresh sustainably-raised Atlantic salmon onsite
          everyday. All of our smoked salmon varieties are all-natural, use no
          preservatives, and are never frozen before or after smoking. We don’t
          stock an inventory of smoked salmon—we receive our fish directly from
          the airport and after inspection it goes right into our smoking
          process and then out the door to be delivered to our customers.{" "}
        </p>
      </div>
    </div>
  );
};

export default Featured;
