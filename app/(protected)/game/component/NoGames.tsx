'use client';

import { Button } from '@/components/ui/button';
import { useModalStore } from '@/store/store';

export function NoGames({ kid }: { kid: string | null }) {
    const setIsAddGameOpen = useModalStore((state) => state.setIsGameOpen);

    function handleAddGameModalOpen() {
        setIsAddGameOpen(true);
    }

    return (
        <div className='flex flex-col justify-center items-center gap-12'>
            <div className='text-4xl'>There are no games for {kid} yet</div>
            <Button onClick={handleAddGameModalOpen}>Add Game</Button>
        </div>
    );
}
