import { createBrowserClient } from '@supabase/ssr';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createClient() {
    return createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
}
