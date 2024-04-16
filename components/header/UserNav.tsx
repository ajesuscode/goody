'use client';

import { logout } from '@/app/(auth)/login/actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useModalStore } from '@/store/store';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';

import { AddKidModal } from '../AddKidModal';

export function UserNav({ user }: { user: User | null }): JSX.Element {
    const isAddKidOpen = useModalStore((state) => state.isAddKidOpen);
    const setIsAddKidOpen = useModalStore((state) => state.setIsAddKidOpen);
    const handleAddKidModalOpen = (): void => {
        setIsAddKidOpen(!isAddKidOpen);
    };

    // //modal to add games to all kids
    // function handleAddGameModalOpen(): void {
    //     setIsAddGameOpen(true);
    // }

    const handleSignOut = async (): Promise<void> => {
        await logout();
    };

    return (
        <>
            {user ? (
                <>
                    <AddKidModal />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant='ghost'
                                className='relative h-8 w-8 rounded-full'
                            >
                                <Avatar className='h-8 w-8'>
                                    <AvatarImage
                                        src='/avatars/01.png'
                                        alt='@shadcn'
                                    />
                                    <AvatarFallback>
                                        {user?.email?.slice(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className='w-56'
                            align='end'
                            forceMount
                        >
                            <DropdownMenuLabel className='font-normal'>
                                <div className='flex flex-col space-y-1'>
                                    <p className='text-sm font-medium leading-none'>
                                        Welcome
                                    </p>
                                    <p className='text-xs leading-none text-muted-foreground'>
                                        {user?.email}
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem
                                    onClick={handleAddKidModalOpen}
                                >
                                    Add Kid
                                    <DropdownMenuShortcut></DropdownMenuShortcut>
                                </DropdownMenuItem>
                                {/* <DropdownMenuItem
                                    onClick={handleAddGameModalOpen}
                                >
                                    Add Game
                                    <DropdownMenuShortcut></DropdownMenuShortcut>
                                </DropdownMenuItem> */}
                                <DropdownMenuItem>
                                    Profile
                                    <DropdownMenuShortcut>
                                        ⇧⌘P
                                    </DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Billing
                                    <DropdownMenuShortcut>
                                        ⌘B
                                    </DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Settings
                                    <DropdownMenuShortcut>
                                        ⌘S
                                    </DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleSignOut}>
                                Log out
                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            ) : (
                <div>
                    <Link href='/login'>Login</Link>
                </div>
            )}
        </>
    );
}
