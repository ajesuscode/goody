'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { useModalStore } from '@/store/store';
import { addKidGoal } from '@/utils/supabase/actions';
import { useState } from 'react';

export function AddGameModal({ kidId }: { kidId: string }) {
    const isAddGameOpen = useModalStore((state) => state.isGameOpen);
    const setIsAddGameOpen = useModalStore((state) => state.setIsGameOpen);
    const [gameName, setGameName] = useState('');
    const [timeToPlay, setTimeToPlay] = useState<number[]>([0]);

    async function handleAddGame() {
        if (!gameName || gameName === '' || timeToPlay[0] === 0) {
            setIsAddGameOpen(!isAddGameOpen);
            return;
        }
        await addKidGoal(gameName, timeToPlay[0], kidId);
        setIsAddGameOpen(!isAddGameOpen);
        setGameName('');
        setTimeToPlay([0]);
    }

    console.log(timeToPlay);

    return (
        <Dialog open={isAddGameOpen}>
            <DialogTrigger asChild></DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Add Game for Kid</DialogTitle>
                    <DialogDescription>
                        Fill the form. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='name' className=''>
                            Game Name
                        </Label>
                        <Input
                            id='name'
                            value={gameName || ''}
                            className='col-span-3'
                            onChange={(e) => setGameName(e.target.value)}
                        />
                    </div>
                    <Label htmlFor='name' className=''>
                        Time to play
                    </Label>
                    <Slider
                        defaultValue={timeToPlay}
                        max={100}
                        step={5}
                        className={cn('')}
                        onValueChange={(value) => setTimeToPlay(value)}
                    />
                </div>
                <DialogFooter>
                    <Button type='submit' onClick={handleAddGame}>
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
