import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import * as React from 'react';

import { login, signup } from '../actions';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

export function UserLoginForm({
    className,
    ...props
}: UserAuthFormProps): JSX.Element {
    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <form>
                <div className='grid gap-2'>
                    <div className='grid gap-1'>
                        <Label className='sr-only' htmlFor='email'>
                            Email
                        </Label>
                        <Input
                            id='email'
                            name='email'
                            placeholder='name@example.com'
                            type='email'
                            autoCapitalize='none'
                            autoComplete='email'
                            autoCorrect='off'
                            required
                        />
                    </div>
                    <div className='grid gap-1'>
                        <Label className='sr-only' htmlFor='password'>
                            Password
                        </Label>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            autoCorrect='off'
                            required
                        />
                    </div>
                    <Button formAction={login}>Sign In</Button>
                    <Button variant='outline' formAction={signup}>
                        Sign Up
                    </Button>
                </div>
            </form>
            <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                    <span className='w-full border-t' />
                </div>
                <div className='relative flex justify-center text-xs uppercase'>
                    <span className='bg-background px-2 text-muted-foreground'>
                        Or continue with
                    </span>
                </div>
            </div>
            <Button variant='outline' type='button'>
                GitHub
            </Button>
        </div>
    );
}
