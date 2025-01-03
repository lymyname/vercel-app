import React from 'react'
import Hero from '../../components/hero';
import homeSrc from '@/public/a1.jpg';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "prformance",
};
export default function Page() {
  return <Hero imgUrl={homeSrc} altTxt="prformance" content="prformance~~"></Hero>;
}
