'use client'
import React from 'react'
import Image from 'next/image';
import Benefit from '@/components/Home1/Benefit'
import Newsletter from '@/components/Home4/Newsletter'
import Instagram from '@/components/Home6/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

import img1 from '/public/images/clothes/african-shirt-pink-back.jpg'
import img2 from '/public/images/clothes/heritage-dress.jpg'
import img3 from '/public/images/clothes/cargo-pants.jpg'

const AboutUs = () => {
    return (
        <>
            {/* <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='About Us' subHeading='About Us' />
            </div> */}
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="heading3 text-center">Heritage Woven, Style Unleashed</div>
                                <div className="body1 text-center md:mt-7 mt-5">LOBOE is more than just fashion; it&apos;s a celebration of heritage, craftsmanship, and diversity. Born from a fervent desire to showcase and celebrate Africa&apos;s rich cultural tapestry, every stitch tells a story of tradition and innovation. We weave together the vibrant essence of African culture with contemporary elegance, creating pieces that empower you to embrace your heritage while making a bold fashion statement.</div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={img1.src}
                                    width={2000}
                                    height={3000}
                                    alt='African artisan craftsmanship'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={img2.src}
                                    width={2000}
                                    height={3000}
                                    alt='LOBOE contemporary collection'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={img3.src}
                                    width={2000}
                                    height={3000}
                                    alt='Sustainable fashion practices'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefit props="md:pt-20 pt-10" />
            <Newsletter props="bg-green md:mt-20 mt-10" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

export default AboutUs