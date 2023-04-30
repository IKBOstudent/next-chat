import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

interface IProps {
    children: ReactNode;
}

export default function Providers({ children }: IProps) {
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            {children}
        </>
    );
}
