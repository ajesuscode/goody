'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData): Promise<void> {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        console.log(error.cause);
        console.log(error.message);
        redirect('/error');
    }

    revalidatePath('layout');
    redirect('/game');
}

export async function signup(formData: FormData): Promise<void> {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    const { error } = await supabase.auth.signUp(data);

    if (error) {
        console.log(error);
        redirect('/error');
    }

    revalidatePath('/', 'layout');
    redirect('/login?success=true');
}

export async function logout(): Promise<void> {
    console.log('logging out');
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    await supabase.auth.signOut();

    revalidatePath('layout');
    redirect('/');
}
