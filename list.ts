type Person = {
    avatar?: string;
    name: string;
    title?: string;
};

export const list: Person[] = [
    {
        name: 'Luc van Kampen',
        title: 'Lead Researcher',
        avatar: '/team/luc.png',
    },
    {
        name: 'Antonio Fran Štignjedec',
        title: 'Researcher',
        avatar: '/team/antony.png',
    },
    {
        name: 'Jakob Helgesson',
        title: 'Researcher',
        avatar: '/team/jakob.png',
    },
    {
        name: 'Elliot Lindberg',
        title: 'Researcher',
    },
    {
        name: 'Ana Howard',
        title: 'Researcher',
        avatar: '/team/ana.webp',
    },
    {
        name: 'Prokop Schield',
        title: 'Researcher',
    },
    {
        name: 'Harry Bairstow',
        title: 'Researcher',
        avatar: '/team/harry.png',
    },
    {
        name: 'Dercio Hoffman',
        title: 'Researcher',
        avatar: '/team/dercio.png',
    },
    {
        name: 'Jonatan Holmgren',
        title: 'Researcher',
        avatar: '/team/jonte.png',
    },
];

export const external_contributor: Person[] = [];
