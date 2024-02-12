'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function getAllKids() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.from('kids').select('*');

    if (error) {
        console.log(error);
        return error;
    }

    return data;
}

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

    const { error } = await supabase.from('kids').insert([
        {
            user_id: newKid.user_id,
            name: newKid.name,
            totalrewards: newKid.totalRewards,
        },
    ]);

    if (error) {
        return error;
    }

    revalidatePath('/games', 'layout');
    redirect('/game');
}
