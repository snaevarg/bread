import './globals.css'
import { Inter } from 'next/font/google'
//import { Metadata } from "next";
import Providers from "./components/Themeprovider";
//import Themechanger from "./components/Themechanger";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bread Dough Calculator',
  description: 'Calculate the amount of ingredients needed for your bread dough.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Providers>
          <div className="overflow-x-hidden">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
