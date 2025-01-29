import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import Newsletter from '../Newsletter/Newsletter'

const Footer = () => {
    return (
        <>
            <div className='footer-block bg-black'>
                <div className="container">
                    <div className="content-footer py-[60px]">
                        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[30px]">
                            <div className="footer-item">
                                <Link href={'/'} className='logo inline-block'>
                                    <Image
                                        src={'/images/logo-white.png'}
                                        width={120}
                                        height={36}
                                        alt='LOBOE'
                                    />
                                </Link>
                                <p className='text-secondary mt-5'>LOBOE - Your African Fashion Destination</p>
                                <div className="list-social flex items-center gap-5 mt-6">
                                    <Link href={'https://www.facebook.com/'} target='_blank' className='text-white hover:text-primary duration-300'>
                                        <div className="icon-facebook text-xl"></div>
                                    </Link>
                                    <Link href={'https://www.instagram.com/'} target='_blank' className='text-white hover:text-primary duration-300'>
                                        <div className="icon-instagram text-xl"></div>
                                    </Link>
                                    <Link href={'https://www.twitter.com/'} target='_blank' className='text-white hover:text-primary duration-300'>
                                        <div className="icon-twitter text-xl"></div>
                                    </Link>
                                    <Link href={'https://www.youtube.com/'} target='_blank' className='text-white hover:text-primary duration-300'>
                                        <div className="icon-youtube text-xl"></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="footer-item">
                                <h3 className='text-white font-semibold text-xl'>Contact</h3>
                                <ul className='list-contact text-secondary mt-4'>
                                    <li className='flex items-center gap-2 mb-3'>
                                        <div className="icon-map-pin"></div>
                                        <p>123 Independence Avenue, Accra, Ghana</p>
                                    </li>
                                    <li className='flex items-center gap-2 mb-3'>
                                        <div className="icon-phone"></div>
                                        <p>+233 30 277 6153</p>
                                    </li>
                                    <li className='flex items-center gap-2 mb-3'>
                                        <div className="icon-mail"></div>
                                        <p>info@loboe.com</p>
                                    </li>
                                    <li className='flex items-center gap-2 mb-3'>
                                        <div className="icon-clock"></div>
                                        <p>Mon - Fri: 08:00 - 17:00</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-item">
                                <h3 className='text-white font-semibold text-xl'>Information</h3>
                                <ul className='list-contact text-secondary mt-4'>
                                    <li className='mb-3'>
                                        <Link href={'#!'} className='hover:text-primary duration-300'>About Us</Link>
                                    </li>
                                    <li className='mb-3'>
                                        <Link href={'#!'} className='hover:text-primary duration-300'>African Fashion</Link>
                                    </li>
                                    <li className='mb-3'>
                                        <Link href={'#!'} className='hover:text-primary duration-300'>Delivery Information</Link>
                                    </li>
                                    <li className='mb-3'>
                                        <Link href={'#!'} className='hover:text-primary duration-300'>Privacy Policy</Link>
                                    </li>
                                    <li className='mb-3'>
                                        <Link href={'#!'} className='hover:text-primary duration-300'>Terms & Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="footer-item">
                                <h3 className='text-white font-semibold text-xl'>Newsletter</h3>
                                <p className='text-secondary mt-4'>Subscribe to our newsletter and get 10% off your first purchase</p>
                                <Newsletter />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-block bg-black py-4 border-t border-line">
                <div className="container">
                    <div className="copyright-content flex items-center justify-between gap-5 max-sm:flex-col">
                        <p className='text-secondary text-sm'>© {new Date().getFullYear()} <span className='text-white'>LOBOE</span>. All rights reserved</p>
                        <div className="right-block flex items-center gap-5">
                            <Link href={'#!'} className='text-secondary text-sm hover:text-primary duration-300'>
                                Privacy Policy
                            </Link>
                            <Link href={'#!'} className='text-secondary text-sm hover:text-primary duration-300'>
                                Terms of Use
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer