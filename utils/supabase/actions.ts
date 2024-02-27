'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function getUser() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data } = await supabase.auth.getUser();

    return data.user;
}

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

export async function getSingleKid(kidId: string) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase
        .from('kids')
        .select('*')
        .eq('id', kidId)
        .single();
    if (error) {
        console.log(error);
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

export async function getKidGoals(kidId: string) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase
        .from('kidsgoals')
        .select(
            `
            *,
            goals!inner(title, rewards, time_allowed)
        `
        )
        .eq('kid_id', kidId);

    if (error) {
        console.log('THIS IS ERROR', error);
        return error;
    }

    revalidatePath(`/games/${kidId}`, 'layout');

    console.log('data', data);
    return data;
}

//ADDING A GOAL TO SPECIFIC KID
export async function addKidGoal(
    goalTitle: string,
    timeAllowed: number,
    kidId?: string
) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    // we need user id
    const {
        data: { user },
        error: err,
    } = await supabase.auth.getUser();
    if (err) {
        return err;
    }

    // creating a goal
    const { data, error } = await supabase
        .from('goals')
        .insert({
            time_allowed: timeAllowed,
            title: goalTitle,
            user_id: user?.id,
            rewards: 10,
        })
        .select('id');
    if (error) {
        return error;
    }

    if (data) {
        // assigning created goal to a kid

        const { data: kidGoal, error } = await supabase
            .from('kidsgoals')
            .insert([{ goal_id: data[0]?.id, kid_id: kidId, isdone: false }])
            .select();

        if (error) {
            console.log('Inserting error', error);
            return error;
        }
        //maybe return ok to handle it in the component

        revalidatePath(`/games/${kidId}`, 'layout');
    }
}
