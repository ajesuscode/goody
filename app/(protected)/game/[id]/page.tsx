import { AddGameModal } from '@/components/AddGameModal';
import { getKidGoals } from '@/utils/supabase/actions';

import { NoGames } from '../component/NoGames';

export default async function KidPage({ params }: { params: { id: string } }) {
    const kidId = params.id;
    const kidGoals = await getKidGoals(kidId);
    return (
        <div className='flex flex-col justify-center items-center border rounded-md w-full h-[calc(100vh-64px)]'>
            <div className='flex justify-center items-center'>
                {Array.isArray(kidGoals) && kidGoals.length > 0 ? (
                    <div>
                        {kidGoals.map((goal) => (
                            <div>Game component {goal.goals?.title}</div>
                        ))}
                    </div>
                ) : (
                    <NoGames />
                )}
            </div>
            <AddGameModal kidId={kidId} />
        </div>
    );
}
