import { FC } from 'react';

export const Sidebar: FC = () => {
    return (
        <header className="flex w-auto flex-col gap-4 p-8">
            <div className="flex flex-col justify-center whitespace-nowrap">
                <div className="w-fit bg-notblack font-bold">
                    <span className="-1 mx-3 text-white">v3xlabs</span>
                </div>
                <div>Empowering open-source</div>
            </div>
            <nav className="flex">
                <ul className="">
                    {[
                        ['.company', 'https://v3x.company'],
                        ['.contact', 'https://v3x.contact'],
                        ['.domains', 'https://v3x.domains'],
                        ['.health', 'https://v3x.health'],
                        ['.team', 'https://v3x.team'],
                        ['.chat', 'https://v3x.chat'],
                        ['.wiki', 'https://v3x.wiki'],
                    ].map(([label, href]) => (
                        <li key={label}>
                            <a
                                href={href}
                                className={[
                                    'hover:text-blue-500 hover:underline',
                                    label == '.team'
                                        ? 'text-blue-500'
                                        : 'text-notblack',
                                ].join(' ')}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
