import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500'>
            <main className='flex flex-col items-center justify-between p-24 text-center gap-4'>
                <h1 className='text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>
                    NEXT JS 14 Boilerplate
                </h1>
                <div className='grid lg:grid-flow-col md:grid-flow-row gap-4 text-2xl'>
                    <Link href='/login'>
                        <Button variant='outline'>Supabase Auth</Button>
                    </Link>
                    <p>TypeScript</p>
                    <p>ESLint</p>
                    <p>Prettier</p>
                    <p>Tailwind CSS</p>
                    <p>Husky</p>
                    <Button>
                        <a href='https://ui.shadcn.com/' target='_blank'>
                            Shadcn UI
                        </a>
                    </Button>
                </div>
            </main>
        </div>
    );
}
