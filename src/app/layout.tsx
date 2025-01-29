import '@/styles/styles.scss'
import type { Metadata } from 'next'
import GlobalProvider from './GlobalProvider'
import { Instrument_Sans } from 'next/font/google'
import ModalCart from '@/components/Modal/ModalCart'
import CountdownTimeType from '@/type/CountdownType'
import { countdownTime } from '@/store/countdownTime'
import ModalSearch from '@/components/Modal/ModalSearch'
import ModalCompare from '@/components/Modal/ModalCompare'
import ModalWishlist from '@/components/Modal/ModalWishlist'
import ModalQuickview from '@/components/Modal/ModalQuickview'
import QueryProvider from '@/providers/QueryProvider'

import MenuTwo from '@/components/Header/Menu/MenuTwo'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'

const serverTimeLeft: CountdownTimeType = countdownTime();

const instrument = Instrument_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LOBOE',
  description: 'Fashion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalProvider>
      <html lang="en">
        <body className={instrument.className}>
          <QueryProvider>
            <div id="header" className='relative w-full'>
              <TopNavOne props="style-one bg-black" slogan="" />
              {/* <MenuOne props="bg-transparent" /> */}
              <MenuTwo />
              {/* <MenuYoga  />  */}
            </div>
            {children}
            <ModalCart serverTimeLeft={serverTimeLeft} />
            <ModalWishlist />
            <ModalSearch />
            <ModalQuickview />
            <ModalCompare />
          </QueryProvider>
        </body>
      </html>
    </GlobalProvider>
  )
}
