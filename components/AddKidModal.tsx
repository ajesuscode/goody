'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useModalStore } from '@/store/store';
import { addNewKid } from '@/utils/supabase/actions';
import { useState } from 'react';

export function AddKidModal(): JSX.Element {
    const isAddKidOpen = useModalStore((state) => state.isAddKidOpen);
    const setIsAddKidOpen = useModalStore((state) => state.setIsAddKidOpen);
    const [kidName, setKidName] = useState('');

    async function handleAddKid(): Promise<void> {
        if (!kidName || kidName === '') {
            setIsAddKidOpen(!isAddKidOpen);
            return;
        }
        const newKid = await addNewKid(kidName);
        console.log(newKid);
        setIsAddKidOpen(!isAddKidOpen);
        setKidName('');
    }

    return (
        <Dialog open={isAddKidOpen}>
            <DialogTrigger asChild></DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Add Kid to the Game</DialogTitle>
                    <DialogDescription>
                        Fill the form. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='name' className='text-right'>
                            Kid Name
                        </Label>
                        <Input
                            id='name'
                            value={kidName || ''}
                            className='col-span-3'
                            onChange={(e) => setKidName(e.target.value)}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type='submit' onClick={handleAddKid}>
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
