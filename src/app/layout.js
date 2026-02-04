import './globals.css';
import Providers from "./provider";

import { Dancing_Script } from 'next/font/google';

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing',
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={dancing.variable}>
        <Providers>
          {children}   {/* Page content */}
         
        </Providers>
      </body>
    </html>
  );
}
