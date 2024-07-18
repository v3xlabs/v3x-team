'use client';

type Person = string;

export default async function App() {
    const { contributors } = await fetch(
        'https://raw.githubusercontent.com/v3xlabs/v3x-data/master/team/contributors.json'
    ).then(
        async (response) =>
            (await response.json()) as { contributors: Person[] }
    );
    const { core } = await fetch(
        'https://raw.githubusercontent.com/v3xlabs/v3x-data/master/team/core.json'
    ).then(
        async (response) =>
            (await response.json()) as {
                core: {
                    name: string;
                    title: string;
                    avatar: string;
                    url?: string;
                }[];
            }
    );

    return (
        <div className="mx-auto flex w-screen max-w-3xl items-center justify-center p-4 md:p-8">
            <div className="flex w-full flex-col gap-4">
                <div className="whitespace-pre-wrap px-6 py-10">
                    &nbsp; &gt;&gt;&gt;&gt; We are a community of open-source
                    developers driven to make a difference. Here are some of our
                    recent contributors
                </div>

                <div className="mt-4">
                    <div>Team ✨</div>
                    <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                        {core.map((member, index) => (
                            <a
                                href={member.url}
                                target="_blank"
                                key={index}
                                className="group flex w-full"
                            >
                                <div className="w-24">
                                    <div className="relative aspect-square h-24 w-24 overflow-hidden bg-neutral-300">
                                        {member.avatar && (
                                            <img
                                                src={member.avatar}
                                                alt=""
                                                className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0"
                                            />
                                        )}
                                        {!member.avatar && (
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-6xl grayscale transition-all group-hover:grayscale-0">
                                                🤷‍♀️
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="w-auto grow p-4 pr-0 group-hover:bg-neutral-200/10 group-hover:font-bold">
                                    <div className="">
                                        {member.name ?? 'Unknown Contributor'}
                                    </div>
                                    <div className="text-neutral-400">
                                        {member.title ?? 'Contributor'}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <div>Contributors 🤝</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {contributors.map((member, index) => (
                            <a
                                href={`https://github.com/${member}`}
                                rel="nofollow"
                                target="_blank"
                                className="group relative aspect-square h-12 w-12 overflow-hidden bg-neutral-300"
                                key={index}
                                title={member}
                            >
                                <img
                                    src={`https://github.com/${member}.png`}
                                    alt={member}
                                    loading="lazy"
                                    className="h-full w-full object-cover grayscale group-hover:grayscale-0"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
