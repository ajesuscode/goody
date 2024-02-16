import GoodyHeader from '@/components/header/GoodyHeader';
import { getUser } from '@/utils/supabase/actions';
import { createClient } from '@/utils/supabase/server';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Goody',
    description: 'Interactive Stimulation for the KIDS',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={`${inter.className} overflow-hidden h-screen`}>
                <GoodyHeader />
                {children}
            </body>
        </html>
    );
}
