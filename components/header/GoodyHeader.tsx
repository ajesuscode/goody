import { getUser } from '@/utils/supabase/actions';
import Link from 'next/link';

import { UserNav } from './UserNav';

export default async function GoodyHeader() {
    const user = await getUser();
    return (
        <div className='sticky flex justify-between items-center p-4 top-0 border-b h-64px'>
            <Link href='/'>
                <h1 className='text-2xl font-bold'>Goody</h1>
            </Link>
            <UserNav user={user} />
        </div>
    );
}
