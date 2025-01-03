import React from "react";
import Image, { StaticImageData } from "next/image";
import homeSrc from "../public/a0.png";
interface Iprops {
  imgUrl: StaticImageData;
  altTxt: string;
  content: string;
}
export default function Hero(props: Iprops) {

  
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imgUrl}
          fill
          style={{ objectFit: "cover" }}
          alt={props.altTxt}
        ></Image>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900"></div>
        <div className="flex justify-center pt-48 items-center">
          <h1 className="text-white text-8xl z-10 p-10">{props.content}</h1>
        </div>
      </div>
    </div>
  );
}
