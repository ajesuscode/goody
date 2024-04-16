'use client';

import { useModalStore } from '@/store/store';

import { Button } from '../ui/button';

export function NoKidsCard(): JSX.Element {
    const isAddKidOpen = useModalStore((state) => state.isAddKidOpen);
    const setIsAddKidOpen = useModalStore((state) => state.setIsAddKidOpen);
    console.log(isAddKidOpen, setIsAddKidOpen);

    function handleAddKidModalOpen(): void {
        setIsAddKidOpen(!isAddKidOpen);
    }
    return (
        <div className='flex flex-col p-24 justify-between items-center gap-12'>
            <div className='text-6xl font-bold text-center'>
                The are no kids o the game
            </div>
            <Button onClick={handleAddKidModalOpen}>Add Kid</Button>
            {/* <AddKidModal /> */}
        </div>
    );
}
