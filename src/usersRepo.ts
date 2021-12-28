import { v4 as uuidv4 } from 'uuid';
import { IUser, users } from './models';

//funciones que operan en la bases de datos

function getUsers(): IUser[] {
    return users;
}

function getUserById(id: string): IUser | void {
    const foundUser = users.find(user => user.id === id);

    return foundUser;
}

function getUserByUsername(username: string): IUser | void {
    return users.find(user => user.username === username);
}

function createUser(user: { username: string }): IUser {
    const newUser = {
        id: uuidv4(),
        username: user.username,
    };

    users.push(newUser);

    return newUser;
}

function updateUser(userId: string, newUser: IUser): IUser | void {
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return undefined;
    }

    users[userIndex] = newUser;

    return newUser;
}

function deleteUser(userId: string): boolean {
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return false;
    }

    users.splice(userIndex, 1);

    return true;
}

export { getUsers, getUserById, getUserByUsername, createUser, updateUser, deleteUser };
