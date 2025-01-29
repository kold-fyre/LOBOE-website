"use client"

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Brand from '@/components/Home1/Brand'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'
import SliderOne from '@/components/Slider/SliderOne'
import testimonialData from '@/data/Testimonial.json'
import MenuTwo from '@/components/Header/Menu/MenuTwo'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'

import Benefit from '@/components/Home1/Benefit'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Collection from '@/components/Home1/Collection';
import MenuYoga from '@/components/Header/Menu/MenuYoga'

const Banner = dynamic(() => import('@/components/Home1/Banner'));
const Instagram = dynamic(() => import('@/components/Home1/Instagram'));
const WhatNewOne = dynamic(() => import('@/components/Home1/WhatNewOne'));
const TabFeatures = dynamic(() => import('@/components/Home1/TabFeatures'));
const Testimonial = dynamic(() => import('@/components/Home1/Testimonial'));
const ModalNewsletter = dynamic(() => import('@/components/Modal/ModalNewsletter'));

export default function Home() {
  const [isRend, setIsRend] = useState<boolean>(false);

  useEffect(() => {
    setIsRend(true);
  }, [])

  return (
    <>
      
      {
        !!isRend && <>
          <SliderOne />
          <TabFeatures data={productData} start={0} limit={6} />
          <Collection />
          <Banner />
          <Benefit props="md:py-20 py-10" />
          <Testimonial data={testimonialData} limit={6} />
          <Footer />
          {/* 
          <Brand />
          <WhatNewOne data={productData} start={0} limit={4} />
          <ModalNewsletter /> 
          */}
        </>
      }
    </>
  )
}
