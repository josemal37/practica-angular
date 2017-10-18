export interface User {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    location: {
        street: string,
        city: string,
        state: string
    },
    login: {
        username: string,
        password: string
    },
    email: string,
    dob: string,
    phone: string,
    cell: string,
    id: {
        name: string,
        value: string
    },
    picture: {
        large: string,
        medium: string,
        tumbnail: string
    },
    nat: string
}