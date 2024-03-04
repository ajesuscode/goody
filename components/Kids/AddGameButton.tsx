'use client';

import { useModalStore } from '@/store/store';
import { PlusCircleIcon } from 'lucide-react';

import { Button } from '../ui/button';

export function AddGameButton() {
    const setIsAddGameOpen = useModalStore((state) => state.setIsGameOpen);

    function handleAddGameModalOpen() {
        setIsAddGameOpen(true);
    }
    return (
        <Button
            variant='outline'
            size='icon'
            className='absolute top-2 right-2'
            onClick={handleAddGameModalOpen}
        >
            <PlusCircleIcon />
        </Button>
    );
}
