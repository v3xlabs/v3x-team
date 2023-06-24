import { list } from '../../list';

export default function Page({ params }: { params: { member: string } }) {
    const member = list.find((person) => person.slug === params.member);

    if (!member) return <div>This member does not exist 🤷‍♀️</div>;

    return (
        <div className="mx-auto flex w-screen max-w-3xl items-center justify-center p-4 md:p-8">
            <div className="flex w-full flex-col gap-4">
                <div className="whitespace-pre-wrap px-6 py-10">
                    &nbsp; &gt;&gt;&gt;&gt; This page is about {params.member}
                </div>
                <div>
                    <img src={member.avatar} alt="" className="h-64 w-64" />
                </div>
            </div>
        </div>
    );
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function generateStaticParams() {
    return list
        .filter((person) => person.slug)
        .map((person) => ({
            member: person.slug,
        }));
}
