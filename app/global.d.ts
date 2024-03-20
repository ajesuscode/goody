import type { Database as DB } from '@/utils/supabase/database.types';

declare global {
    type Database = DB;
    type Kids = DB['public']['Tables']['kids']['Row'];
    type Goals = DB['public']['Tables']['goals']['Row'];
    type KidsGoals = DB['public']['Tables']['kidsgoals']['Row'];
}
