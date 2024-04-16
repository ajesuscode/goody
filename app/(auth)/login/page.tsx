import { getUser } from '@/utils/supabase/actions';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { UserLoginForm } from './components/LoginForm';

export default async function LoginPage({
    searchParams,
}: {
    searchParams?: { success?: boolean };
}): Promise<JSX.Element> {
    const user = await getUser();
    if (user) {
        redirect('/game');
    }
    const success = searchParams?.success || false;
    console.log(success);
    return (
        <>
            <div className='container relative h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
                <div className='relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r'>
                    <div className='absolute inset-0 bg-zinc-900' />
                    <div className='relative z-20 flex items-center text-lg font-medium'>
                        {/* HERE CAN BE AN SVG LOGO */}
                        <Link href='/'>Goody</Link>
                    </div>
                    <div className='relative z-20 mt-auto'>
                        <blockquote className='space-y-2'>
                            <p className='text-lg'>
                                &ldquo;Motivational game for a family&rdquo;
                            </p>
                            <footer className='text-sm'>
                                <a
                                    href='https://github.com/ajesuscode'
                                    target='_blank'
                                ></a>
                                ajesuscode
                            </footer>
                        </blockquote>
                    </div>
                </div>
                <div className='lg:p-8 p-2'>
                    <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[360px]'>
                        <div className='flex flex-col space-y-2 text-center'>
                            <h1 className='text-2xl font-semibold tracking-tight'>
                                Create an account
                            </h1>
                            <p className='text-sm text-muted-foreground'>
                                Enter your email below to create your account
                            </p>
                        </div>
                        <UserLoginForm />
                        <p className='px-8 text-center text-sm text-muted-foreground'>
                            By clicking continue, you agree to our{' '}
                            <Link
                                href='/'
                                className='underline underline-offset-4 hover:text-primary'
                            >
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link
                                href='/'
                                className='underline underline-offset-4 hover:text-primary'
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
