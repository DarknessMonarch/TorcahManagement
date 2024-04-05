import '@/app/style/globals.css';
import { Manrope } from 'next/font/google';
import toast, { Toaster } from "react-hot-toast";


const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://torcah.com/'),
  title: 'Torcah - Management Webapp',
  applicationName: 'Torcah',
  author: 'Torcah',
  description: 'Webapp for managing properties, delivery, rentals, drivers, users.',
  keywords: ['buy land', 'sell land', 'rent property', 'lease property', 'sell property', 'buy property', 'buy car','sell car','get delivery','make delivery'],

  // OG meta tags
  openGraph: {
    title: 'Torcah - Management Webapp',
    description: 'Webapp for managing properties, delivery, rentals, drivers, users.',
    url: 'https://torcah.com/',
    siteName: 'Torcah',
    images: 'https://raw.githubusercontent.com/zero-stealth/torcah/master/public/assets/banner.png',

  },

  //  robots txt
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

};




export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <div className={manrope.className}>
          {children}
        </div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 8000,
            style: {
              background: '#ffffff',
              color: '#24233c',
            }}}
        />
      </body>
    </html>
  );
}
