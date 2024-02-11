import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { UserNav } from './UserNav';

export default async function GoodyHeader() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.auth.getUser();
    if (error) {
        console.log('ERROR', error);
        console.log('DATA', data);
        //handle with toast better
        console.log('no user');
    }
    return (
        <div className='sticky flex justify-between items-center p-4 top-0 border-b'>
            <Link href='/'>
                <h1 className='text-2xl font-bold'>Goody</h1>
            </Link>
            <UserNav user={data?.user ?? null} />
        </div>
    );
}
