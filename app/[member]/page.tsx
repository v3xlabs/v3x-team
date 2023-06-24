import { general_contributors, list } from '../../list';

export default function Page({ params }: { params: { member: string } }) {
    return (
        <div className="mx-auto flex w-screen max-w-3xl items-center justify-center p-4 md:p-8">
            <div className="flex w-full flex-col gap-4">
                <div className="whitespace-pre-wrap px-6 py-10">
                    &nbsp; &gt;&gt;&gt;&gt; This page is about {params.member}
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
