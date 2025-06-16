import { Inter } from 'next/font/google';
import './globals.css';
import Header  from './header/header';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Udemy',
  description: 'A full-stack learning platform built with Next.js and Django',
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
