import { User } from 'src/app/model/user.model';

export const mockUsers: User[] | any = [
    {
        firstName: 'Naveen',
        lastName: 'Pisher',
        email: 'navin@test.com',
        id: 'u-1',
        password: 'test',
        username: 'naveen.pisher',
        access: {
            projectTrackerAccess: true,
            timeTrackerAccess: true
        },
        projectTracker: {
            projects: [
                {
                    id: 'p-1',
                    roll: 'dev'
                },
                {
                    id: 'p-2',
                    roll: 'dev'
                }
            ],
            workSpaces: [],
        },
        timeTracker: {
            tracker: true
        }
    },
    {
        firstName: 'Rahul',
        lastName: 'Pisher',
        email: 'rahul@test.com',
        id: 'u-2',
        password: 'test',
        username: 'rahul',
        access: {
            projectTrackerAccess: true,
        },
        projectTracker: {
            projects: [
                {
                    id: 'p-2',
                    roll: 'dev'
                },
            ],
            workSpaces: [],
        }
    },
];

export const mockProjects: any = [
    {
        id: 'p-1',
        name: 'Ecp Oao',
        Description: 'Online Account Opening',
        role: 'Dev',
        members: ['u-1', 'u-2']
    },
    {
        id: 'p-2',
        name: 'Ecp Mortgae',
        Description: 'Mortgage details online',
        role: 'Dev',
        members: ['u-1']
    }
];
export const mockStories = [
    {
        projectId: 'p-1',
        stories: [
            {
                id: '12',
                name: 'my first Story',
                description: 'To test detes part',
                owners: ['u-1'],
                level: {
                    currentIteration: false,
                    icebox: true
                }
            },
            {
                id: '13',
                name: 'my second Story',
                description: 'To comasasplease design part',
                owners: ['u-1'],
                level: {
                    currentIteration: false,
                    icebox: true
                }
            },
            {
                id: '13',
                name: 'my second Story',
                description: 'To comasasplease design part',
                owners: ['u-1,', 'u-2'],
                level: {
                    currentIteration: false,
                    icebox: true
                }
            },
            {
                id: '13',
                name: 'Icebox story',
                description: 'To comasasplease design part',
                owners: ['u-1,', 'u-2'],
                level: {
                    currentIteration: false,
                    icebox: true
                }
            },
            {
                id: '13',
                name: 'current iteration',
                description: 'To comasasplease design part',
                level: {
                    currentIteration: true
                }
            },
            {
                id: '13',
                name: 'my second Story',
                description: 'To comasasplease design part',
                owners: ['u-1,', 'u-2'],
                level: {
                    currentIteration: true
                }
            },
            {
                id: '13',
                name: 'my second Story',
                description: 'To comasasplease design part',
                owners: ['u-1,', 'u-2'],
                level: {
                    currentIteration: true
                }
            },
            {
                id: '13',
                name: 'my story Story',
                description: 'test \n test',
                owners: ['u-2'],
                level: {
                    currentIteration: true
                }
            }
        ]
    },
    {
        projectId: 'p-2',
        stories: [
            {
                id: '12',
                name: 'Project 2',
                description: 'To test detes part',
                owners: ['u-2'],
                level: {
                    currentIteration: false,
                    icebox: true
                }
            },
            {
                id: '13',
                name: 'my second Story',
                description: 'To comasasplease design part',
                owners: ['u-2'],
                level: {
                    currentIteration: false,
                    icebox: true
                }
            },
            {
                id: '13',
                name: 'my second Story',
                description: 'To comasasplease design part',
                owners: ['u-2,', 'u-2'],
                level: {
                    currentIteration: false,
                    icebox: true
                }
            },
            {
                id: '13',
                name: 'Icebox story',
                description: 'To comasasplease design part',
                owners: ['u-2,', 'u-2'],
                level: {
                    currentIteration: false,
                    icebox: true
                }
            },
            {
                id: '13',
                name: 'current iteration',
                description: 'To comasasplease design part',
                level: {
                    currentIteration: true
                }
            },
            {
                id: '13',
                name: 'my second Story',
                description: 'To comasasplease design part',
                owners: ['u-2,', 'u-2'],
                level: {
                    currentIteration: true
                }
            },
            {
                id: '13',
                name: 'my second Story',
                description: 'To comasasplease design part',
                owners: ['u-2,', 'u-2'],
                level: {
                    currentIteration: true
                }
            },
            {
                id: '13',
                name: 'my story Story',
                description: 'test \n test',
                owners: ['u-2'],
                level: {
                    currentIteration: true
                }
            }
        ]
    }
];
