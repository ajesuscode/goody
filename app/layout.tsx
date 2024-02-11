import GoodyHeader from '@/components/header/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Goody',
    description: 'Interactive Stimulation for the KIDS',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={`${inter.className} overflow-hidden`}>
                <GoodyHeader />
                {children}
            </body>
        </html>
    );
}
