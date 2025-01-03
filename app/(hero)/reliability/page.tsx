import React from 'react'
import Hero from '../../components/hero';
import homeSrc from '@/public/a2.jpg';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "reliability",
};
export default function Page() {
  return <Hero imgUrl={homeSrc} altTxt="reliability" content="reliability~~"></Hero>;
}
