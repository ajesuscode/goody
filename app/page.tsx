import { getUser } from '@/utils/supabase/actions';
import { redirect } from 'next/navigation';

export default async function Home() {
    const user = await getUser();
    console.log(user);
    if (user) {
        redirect('/game');
    }
    return (
        <div className='flex items-center justify-center bg-foreground '>
            <main className='flex flex-col items-center justify-between p-24 text-center gap-4'></main>
        </div>
    );
}
