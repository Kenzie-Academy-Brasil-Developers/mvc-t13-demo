import { v4 as uuid } from 'uuid';

interface IUser {
    id: string;
    name: string;
    email: string;
    age: number;
}

const users: IUser[] = [];

export const UserModel = {
    getAll() {
        return users;
    },
    getById(id: string) {
        return users.find(user => user.id === id)
    },
    create(data: Omit<IUser, 'id'>) {
        users.push({ ...data, id: uuid() })

        return users.at(-1);
    }
}

// servicePattern -> regra de negócio