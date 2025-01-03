import React from 'react'
import Hero from '../../components/hero';
import homeSrc from '@/public/a3.jpg';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "scale",
};
export default function Page() {
  return <Hero imgUrl={homeSrc} altTxt="scale" content="scale~~"></Hero>;
}
