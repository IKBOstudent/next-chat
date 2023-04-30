import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const twcx = (...inputs: ClassValue[]) => {
    return twMerge(clsx(...inputs));
};

export const twCVA = <T extends (props: any) => string>(cvaFn: T) => {
    return (variants?: Parameters<T>[0], ...classList: ClassValue[]) =>
        twcx(cvaFn(variants), ...classList);
};
