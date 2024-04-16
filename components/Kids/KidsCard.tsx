import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function KidsCard({ kid }: { kid: Kids }): JSX.Element {
    return (
        <Card>
            <CardContent className='pt-4 relative'>
                <Badge
                    variant='outline'
                    className='absolute top-0 right-0 text-xl'
                >
                    {kid.totalrewards}
                </Badge>
                <Avatar className='h-36 w-36'>
                    <AvatarImage
                        src='https://github.com/shadcn.png'
                        alt='@shadcn'
                    />
                    <AvatarFallback>
                        {kid.name?.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <CardHeader>
                    <CardTitle className='text-center'>{kid.name}</CardTitle>
                </CardHeader>
            </CardContent>
        </Card>
    );
}
