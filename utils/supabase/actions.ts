'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function addNewKid(kidName: string) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const newKid = {
        user_id: user?.id,
        name: kidName,
        totalRewards: 0,
    };

    const { data, error } = await supabase.from('kids').insert([
        {
            user_id: newKid.user_id,
            name: newKid.name,
            totalrewards: newKid.totalRewards,
        },
    ]);

    if (error) {
        return error;
    }

    return data;
}
