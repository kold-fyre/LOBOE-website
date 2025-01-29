'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import productData from '../../data/Product.json'

const Banner = () => {
    const [bannerImages, setBannerImages] = useState({
        bestSellers: '/images/banner/1.png',
        newArrivals: '/images/banner/2.png'
    })

    useEffect(() => {
        const findBannerImage = (property: 'sale' | 'new') => {
            const product = productData.find(p => p[property] === true)
            return product ? product.images[0] : ''
        }

        setBannerImages({
            bestSellers: findBannerImage('sale') || '/images/banner/1.png',
            newArrivals: findBannerImage('new') || '/images/banner/2.png'
        })
    }, [])

    return (
        <>
            <div className="banner-block style-one grid sm:grid-cols-2 gap-5 md:pt-20 pt-10">
                <Link href={'/shop/breadcrumb-img'} className="banner-item relative block overflow-hidden duration-500 rounded-xl">
                    <div className="banner-img">
                        <Image
                            src={bannerImages.bestSellers}
                            width={2000}
                            height={1200}
                            alt='banner1'
                            priority={true}
                            className='duration-1000'
                        />
                    </div>
                    <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <div className="heading2 text-white">Best Sellers</div>
                        <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">Shop Now</div>
                    </div>
                </Link>
                
                <Link href={'/shop/breadcrumb-img'} className="banner-item relative block overflow-hidden duration-500 rounded-xl">
                    <div className="banner-img">
                        <Image
                            src={bannerImages.newArrivals}
                            width={2000}
                            height={1200}
                            alt='banner2'
                            priority={true}
                            className='duration-1000'
                        />
                    </div>
                    <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <div className="heading2 text-white">New Arrivals</div>
                        <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">Shop Now</div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Banner