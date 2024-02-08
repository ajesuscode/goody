import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login and Sign Up',
    description: 'This is authentication page of your web app',
};

export default function AuthenticationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen p-12 overflow-hidden'>
            {children}
        </div>
    );
}
