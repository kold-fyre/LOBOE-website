'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer'

const africanStores = [
    {
        name: "Accra Office",
        image: "/images/other/store-list-accra.png",
        address: "123 Independence Avenue, Accra, Ghana",
        openingHours: {
            weekdays: "08:00 - 17:00",
            weekends: "09:00 - 14:00"
        },
        contact: {
            phone: "+233 30 277 6666",
            email: "accra@africanstore.com"
        }
    },
    {
        name: "Nairobi Office",
        image: "/images/other/store-list-nairobi.png",
        address: "123 Kenyatta Avenue, Nairobi, Kenya",
        openingHours: {
            weekdays: "08:00 - 18:00",
            weekends: "10:00 - 16:00"
        },
        contact: {
            phone: "+254 20 123 4567",
            email: "nairobi@africanstore.com"
        }
    },
    {
        name: "Cairo Office",
        image: "/images/other/store-list-cairo.png",
        address: "456 El Tahrir Square, Cairo, Egypt",
        openingHours: {
            weekdays: "09:00 - 19:00",
            weekends: "11:00 - 17:00"
        },
        contact: {
            phone: "+20 2 987 6543",
            email: "cairo@africanstore.com"
        }
    },
    {
        name: "Lagos Office",
        image: "/images/other/store-list-lagos.png",
        address: "789 Victoria Island, Lagos, Nigeria",
        openingHours: {
            weekdays: "08:30 - 17:30",
            weekends: "10:00 - 15:00"
        },
        contact: {
            phone: "+234 1 234 5678",
            email: "lagos@africanstore.com"
        }
    }
];

const StoreList = () => {
    return (
        <>
            <div className='store-list md:py-20 py-10'>
                <div className="container">
                    {africanStores.map((store, index) => (
                        <div key={index} className={`item bg-surface overflow-hidden rounded-[20px] ${index > 0 ? 'md:mt-20 mt-10' : ''}`}>
                            <div className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : 'justify-start'} relative max-lg:flex-col${index % 2 !== 0 ? '-reverse' : ''}`}>
                                <Image
                                    src={store.image}
                                    width={3000}
                                    height={2000}
                                    alt={`${store.name} image`}
                                    className={`lg:absolute relative top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} lg:bottom-0 lg:w-1/2 w-full h-full object-cover`}
                                />
                                <div className={`text-content lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-20 lg:pl-[100px]' : 'lg:pl-20 lg:pr-[100px]'} lg:py-14 sm:py-10 py-6 max-lg:px-6`}>
                                    <div className="heading3">{store.name}</div>
                                    <div className="list-featrue lg:mt-10 mt-6">
                                        <div className="item flex lg:gap-10 gap-6">
                                            <div className='w-1/2'>
                                                <div className="heading6">Address:</div>
                                                <div className="text-secondary mt-2">{store.address}</div>
                                            </div>
                                            <div className='w-1/2'>
                                                <div className="heading6">Opentime:</div>
                                                <div className="text-secondary mt-2 whitespace-nowrap">Monday - Friday:</div>
                                                <div className='text-title text-black whitespace-nowrap'>{store.openingHours.weekdays}</div>
                                                <div className="text-secondary whitespace-nowrap">Saturday - Sunday:</div>
                                                <div className='text-title text-black whitespace-nowrap'>{store.openingHours.weekends}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-featrue mt-5">
                                        <div className="item flex lg:gap-10 gap-6">
                                            <div className='w-1/2'>
                                                <div className="heading6">Information:</div>
                                                <div className="text-secondary mt-2">{store.contact.phone}<br />
                                                    {store.contact.email}</div>
                                            </div>
                                            <div className='w-1/2'>
                                                <div className="heading6">Our social media:</div>
                                                <div className="flex items-center sm:gap-4 gap-2 mt-2">
                                                    <Link href={'https://www.facebook.com/'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
                                                        <div className="icon-facebook"></div>
                                                    </Link>
                                                    <Link href={'https://www.instagram.com/'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
                                                        <div className="icon-instagram"></div>
                                                    </Link>
                                                    <Link href={'https://www.youtube.com/'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
                                                        <div className="icon-youtube"></div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default StoreList