import { AddGameModal } from '@/components/AddGameModal';
import { AddGameButton } from '@/components/Kids/AddGameButton';
import { Button } from '@/components/ui/button';
import { getKidGoals, getSingleKid } from '@/utils/supabase/actions';
import { PlusCircleIcon } from 'lucide-react';

import GameCard from '../component/GameCard';
import { NoGames } from '../component/NoGames';

export default async function KidPage({ params }: { params: { id: string } }) {
    const kidId = params.id;
    const kid = await getSingleKid(kidId);
    const kidGoals = await getKidGoals(kidId);

    return (
        <div className='border rounded-md w-full h-[calc(100vh-64px)] relative p-4'>
            <AddGameButton />
            <div className='grid grid-cols-4 gap-4'>
                {Array.isArray(kidGoals) && kidGoals.length > 0 ? (
                    <>
                        {kidGoals.map((goal) => (
                            <GameCard
                                goal={goal}
                                kid={kid?.name ?? null}
                                key={goal.id}
                            />
                        ))}
                    </>
                ) : (
                    <div className='col-span-4 pt-24'>
                        <NoGames kid={kid?.name ?? null} />
                    </div>
                )}
            </div>
            <AddGameModal kidId={kidId} kidName={kid?.name ?? null} />
        </div>
    );
}
