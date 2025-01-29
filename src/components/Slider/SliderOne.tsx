'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';

interface ISlide {
    cta?: string;
    title: string;
    ctaUrl?: string;
    subtitle: string;
    imageUrl: string;
}

const dummySlides: ISlide[] = [
    {
        subtitle: "experience the cultural mosaic",
        title: "Celebrating our Heritage in Style",
        imageUrl: "/images/clothes/heritage-dress.jpg"
    },
    {
        subtitle: "New cargo pants arrivals!",
        title: "Fashion for Every Occasion",
        imageUrl: "/images/clothes/cargo-pants-close.jpg"
    },
    {
        subtitle: "Blend of Contemporary and Traditional",
        title: "Modern Elegance Redefined",
        imageUrl: "/images/clothes/contemp-dress.jpg"
    },
    // {
    //     subtitle: "Vibrant African-inspired Fashion",
    //     title: "Bold Colors, Bold Statements",
    //     imageUrl: "/images/clothes/african-shirt-pink.jpg"
    // },
    // {
    //     subtitle: "Unique Patterns, Unique You",
    //     title: "Express Yourself with Tie and Dye",
    //     imageUrl: "/images/clothes/tie-and-dye-shirt.jpg"
    // }
];

const SliderOne = () => {
    return (
        <>
            <div className="slider-block style-one bg-linear xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
                <div className="slider-main h-full w-full">
                    <Swiper
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        className='h-full relative'
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        {dummySlides.map((slide, index) => (
                            <SwiperSlide key={index} >
                                <Slide {...slide} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

const Slide = ({ title, subtitle, imageUrl, cta, ctaUrl }: ISlide) => {
    return (
        <div className="slider-item h-full w-full relative">
            <div className="container w-full h-full flex items-center relative">
                <div className="text-content basis-1/2">
                    <div className="text-sub-display">{subtitle}</div>
                    <div className="text-display md:mt-5 mt-2">{title}</div>
                    {
                        cta && ctaUrl && (
                            <Link href={ctaUrl} className="button-main md:mt-8 mt-3">{cta}</Link>
                        )
                    }
                </div>
                <div className="sub-img absolute sm:w-1/2 w-3/5 2xl:-right-[60px] -right-[16px] bottom-0">
                    <Image
                        src={imageUrl}
                        width={670}
                        height={936}
                        alt='bg1-1'
                        priority={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default SliderOne