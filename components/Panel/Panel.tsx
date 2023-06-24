import { FC, PropsWithChildren } from 'react';

export const Panel: FC<
    PropsWithChildren<{ title: string; loading?: boolean }>
> = ({ title, loading, children }) => {
    return (
        <div className="relative mt-4 flex w-full items-center justify-center border border-notblack p-4">
            <div className="absolute left-0 top-0 ml-4 -translate-y-1/2 bg-white px-2">
                {title}
            </div>
            {children}
        </div>
    );
};
