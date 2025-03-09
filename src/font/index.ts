import { DM_Sans, Montserrat, Nunito, Poppins } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'],
  display: 'auto',
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  display: 'auto',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const dm_sans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  display: 'auto',
  variable: '--font-dm-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const nunito = Nunito({
  subsets: [
    'latin',
    'cyrillic',
    'cyrillic-ext',
    'latin',
    'vietnamese',
    'latin-ext',
  ],
  display: 'swap',
  variable: '--font-nunito',
})
