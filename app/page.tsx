import { general_contributors, list } from '../list';

export default function App() {
    return (
        <div className="mx-auto w-screen max-w-3xl flex items-center justify-center p-4 md:p-8">
            <div className="flex flex-col gap-4 w-full">
                <div className="whitespace-pre-wrap py-10 px-6">
                    &nbsp; &gt;&gt;&gt;&gt; We are a community of open-source
                    developers driven to make a difference. Here are some of our
                    recent contributors
                </div>

                <div className="mt-4">
                    <div>Team ✨</div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                        {list.map((member, index) => (
                            <div key={index} className="flex w-full">
                                <div className="w-24 h-24 aspect-square bg-neutral-300 relative overflow-hidden">
                                    {member.avatar && (
                                        <img
                                            src={member.avatar}
                                            alt=""
                                            className="w-full h-full object-cover grayscale"
                                        />
                                    )}
                                    {!member.avatar && (
                                        <div className="text-6xl grayscale left-1/2 -translate-x-1/2 absolute bottom-0">
                                            🤷‍♀️
                                        </div>
                                    )}
                                </div>
                                <div className="p-4 w-auto">
                                    <div>
                                        {member.name ?? 'Unknown Contributor'}
                                    </div>
                                    <div className="text-neutral-400">
                                        {member.title ?? 'Contributor'}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <div>Contributors 🤝</div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {general_contributors.map((member, index) => (
                            <a
                                href={member.url}
                                className="w-12 h-12 aspect-square bg-neutral-300 relative overflow-hidden"
                                key={index}
                            >
                                {member.avatar && (
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale"
                                    />
                                )}
                                {!member.avatar && (
                                    <div className="text-3xl grayscale left-1/2 -translate-x-1/2 absolute bottom-0">
                                        🤷‍♀️
                                    </div>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
