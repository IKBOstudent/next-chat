import Button from '@/app/components/ui/Button';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react';

interface IProps {}

export default async function Dashboard({}: IProps) {
    const data = await getServerSession(authOptions);

    return (
        <div className="p-4 flex flex-col gap-4">
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <Button>Button2</Button>
            <Button size="sm">Button4</Button>

            <Button size="lg" isLoading>
                Button5
            </Button>

            <Button variant="ghost" isLoading>
                Button6
            </Button>

            <Button size="sm" variant="ghost" isLoading>
                Button8
            </Button>

            <Button size="lg" variant="ghost" isLoading>
                Button9
            </Button>
        </div>
    );
}
