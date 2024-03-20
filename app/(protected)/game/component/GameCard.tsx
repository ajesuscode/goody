'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getSingleKid } from '@/utils/supabase/actions';
import { useEffect, useState } from 'react';

interface GameCardProps {
    goal: {
        goal_id: string | null;
        id: string;
        isdone: boolean | null;
        kid_id: string | null;
        goals: {
            title: string | null;
            rewards: number | null;
            time_allowed: number | null;
        } | null;
    };
    kid: string | null;
}

export default function GameCard({ goal, kid }: GameCardProps) {
    const [kidName, setKidName] = useState<string | null>(null);
    useEffect(() => {
        async function getKidName() {
            if (kid) {
                const kidName = await getSingleKid(kid);
                setKidName(kidName?.name ?? null);
            }
        }
        getKidName();
    }, []);
    return (
        <div className='border rounded-lg p-4 flex flex-col justify-between gap-2 items-center'>
            <div className='flex flex-row justify-between w-full items-center gap-4'>
                <Badge>{kidName}</Badge>
                <Badge
                    className={cn(goal.isdone ? 'bg-lime-400' : 'bg-red-400')}
                >
                    {goal.isdone ? <span>Done</span> : <span>Not Done</span>}
                </Badge>
            </div>
            <div>
                <h2 className='text-xl font-bold'>{goal.goals?.title}</h2>
            </div>
            <div>
                <p>Time Allowed: {goal.goals?.time_allowed} minutes</p>
                <p>Rewards: {goal.goals?.rewards} points</p>
            </div>
            <Button>Start Game</Button>
        </div>
    );
}
