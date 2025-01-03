import React from "react";
import Hero from "../components/hero";
import homeSrc from "@/public/a0.png";
export default function Page() {
  return <Hero imgUrl={homeSrc} altTxt="home" content="Welcome to my app"></Hero>;
}
