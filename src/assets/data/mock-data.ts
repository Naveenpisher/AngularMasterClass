import { User } from 'src/app/model/user.model';

export const mockUsers: User[] | any = [
    {
        firstName: 'Naveen',
        lastName: 'Pisher',
        email: 'navin@test.com',
        id: 1,
        password: 'test',
        username: 'naveen.pisher',
        access: {
            projectTrackerAccess: true,
        },
        projectTracker: {
            projects: [
                {
                    id: '1',
                    roll: 'dev'
                },
                {
                    id: '2',
                    roll: 'dev'
                }
            ],
            workSpaces: [],
        }
    },
    {
        firstName: 'Rahul',
        lastName: 'Pisher',
        email: 'rahul@test.com',
        id: 1,
        password: 'test',
        username: 'rahul',
    },
];

export const mockProjects: any = [
    {
        id: '1',
        name: 'Ecp Oao',
        Description: 'Online Account Opening',
        role: 'Dev'
    },
    {
        id: '2',
        name: 'Ecp Mortgae',
        Description: 'Mortgage details online',
        role: 'Dev'
    }
];
