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
    const imageInterval = setInterval(() => {
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
    <div className="flex flex-col p-6">
      <div className="w-full">
        <img src={salmonImages[salmonImage]}  className="w-full rounded h-auto object-cover" />
        <h3>OUR SMOKED SALMON</h3>
        <p>
          Our smokehouse smokes fresh sustainably-raised Atlantic salmon onsite
          everyday. All of our smoked salmon varieties are all-natural, use no
          preservatives, and are never frozen before or after smoking. We don’t
          stock an inventory of smoked salmon—we receive our fish directly from
          the airport and after inspection it goes right into our smoking
          process and then out the door to be delivered to our customers.{" "}
        </p>
      </div>
      <div>
        <img />
        <h3>OUR SMOKED SALMON</h3>
        <p>
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
