import { KidsCard } from '@/components/Kids/KidsCard';
import { NoKidsCard } from '@/components/Kids/NoKidsCard';
import { getAllKids, getUser } from '@/utils/supabase/actions';
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Goody Game Page',
    description: 'This is where the Goody Game is happening',
};

export default async function GameLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await getUser();
    if (!user) {
        redirect('/login');
    }

    const kids = await getAllKids();

    return (
        <div className='p-4 flex flex-col justify-start items-center gap-8 h-[calc(100vh-64px)]'>
            {Array.isArray(kids) && kids.length > 0 ? (
                <div className='flex flex-row justify-between items-center gap-20'>
                    {kids.map((kid: Kids) => (
                        <Link key={kid.id} href={`/game/${kid.id}`}>
                            <KidsCard kid={kid} />
                        </Link>
                    ))}
                </div>
            ) : (
                <NoKidsCard />
            )}
            {children}
        </div>
    );
}
