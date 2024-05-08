import { getUndoneGoals } from '@/utils/supabase/actions';

import GameCard from './component/GameCard';

export default async function GamePage(): Promise<JSX.Element> {
    const undoneGoals = await getUndoneGoals();

    return (
        <div className='w-full px-12 overflow-y-auto'>
            {Array.isArray(undoneGoals) && undoneGoals.length > 0 ? (
                <div className=' grid grid-cols-4 gap-4'>
                    {undoneGoals.map((uGoal) => (
                        <GameCard
                            goal={uGoal}
                            kid={uGoal.kid_id}
                            key={uGoal.id}
                        />
                    ))}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}
