import request from 'supertest';
import app from '../../src/app';
import * as usersRepo from '../../src/usersRepo';

describe('/users', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('GET /users', () => {
        it('should retrieve the list of users', async () => {
            const getUsersMock = jest.spyOn(usersRepo, 'getUsers').mockReturnValue([
                {
                    id: '1',
                    username: 'JaimeAmate',
                },
                {
                    id: '2',
                    username: 'RosaBerned',
                },
            ]);

            const { status, body } = await request(app).get('/users');

            expect({ status, body }).toEqual({
                status: 200,
                body: [
                    {
                        id: '1',
                        username: 'JaimeAmate',
                    },
                    {
                        id: '2',
                        username: 'RosaBerned',
                    },
                ],
            });
            expect(getUsersMock.mock.calls).toEqual([[]]);
        });

        it('should return a user by username', async () => {
            const getUserByUsernameMock = jest
                .spyOn(usersRepo, 'getUserByUsername')
                .mockReturnValue({ id: '__ID__', username: '__USERNAME__' });

            const { status, body } = await request(app).get('/users?username=__USERNAME__');

            expect({ status, body }).toEqual({
                status: 200,
                body: { id: '__ID__', username: '__USERNAME__' },
            });
            expect(getUserByUsernameMock.mock.calls).toEqual([['__USERNAME__']]);
        });

        it('should return a 404 status error if the username is not found', async () => {
            const getUserByUsernameMock = jest.spyOn(usersRepo, 'getUserByUsername').mockReturnValue(undefined);

            const { status, body } = await request(app).get('/users?username=__USERNAME__');

            expect({ status, body }).toEqual({
                status: 404,
                body: { message: 'user not found' },
            });
            expect(getUserByUsernameMock.mock.calls).toEqual([['__USERNAME__']]);
        });
    });

    describe('GET /users/:id', () => {
        it('should return the user', async () => {
            const getUserByIdMock = jest
                .spyOn(usersRepo, 'getUserById')
                .mockReturnValue({ id: '__ID__', username: '__USERNAME__' });

            const { status, body } = await request(app).get('/users/__ID__');

            expect({ status, body }).toEqual({
                status: 200,
                body: { id: '__ID__', username: '__USERNAME__' },
            });
            expect(getUserByIdMock.mock.calls).toEqual([['__ID__']]);
        });

        it('should return a 404 status code if the user is not found', async () => {
            const getUserByIdMock = jest.spyOn(usersRepo, 'getUserById').mockReturnValue(undefined);

            const { status, body } = await request(app).get('/users/__ID__');

            expect({ status, body }).toEqual({
                status: 404,
                body: { message: 'user not found' },
            });
            expect(getUserByIdMock.mock.calls).toEqual([['__ID__']]);
        });
    });

    describe('POST /users', () => {
        it('should create a new user', async () => {
            const createUserMock = jest
                .spyOn(usersRepo, 'createUser')
                .mockReturnValue({ id: '__ID__', username: '__USERNAME__' });

            const { status, body } = await request(app).post('/users').send({ username: '__USERNAME__' });

            expect({ status, body }).toEqual({
                status: 200,
                body: { id: '__ID__', username: '__USERNAME__' },
            });
            expect(createUserMock.mock.calls).toEqual([[{ username: '__USERNAME__' }]]);
        });
    });

    describe('PUT /users/:id', () => {
        it('should update an existing user', async () => {
            const updateUserMock = jest
                .spyOn(usersRepo, 'updateUser')
                .mockReturnValue({ id: '__ID__', username: '__USERNAME__' });

            const { status, body } = await request(app).put('/users/__ID__').send({ username: '__USERNAME__' });

            expect({ status, body }).toEqual({
                status: 200,
                body: { id: '__ID__', username: '__USERNAME__' },
            });
            expect(updateUserMock.mock.calls).toEqual([['__ID__', { id: '__ID__', username: '__USERNAME__' }]]);
        });

        it('should return a 404 error if the user is not found', async () => {
            const updateUserMock = jest.spyOn(usersRepo, 'updateUser').mockReturnValue(undefined);

            const { status, body } = await request(app).put('/users/__ID__').send({ username: '__USERNAME__' });

            expect({ status, body }).toEqual({
                status: 404,
                body: { message: 'user not found' },
            });
            expect(updateUserMock.mock.calls).toEqual([['__ID__', { id: '__ID__', username: '__USERNAME__' }]]);
        });
    });

    describe('DELETE /users/:id', () => {
        it('should delete an existing user', async () => {
            const deleteUserMock = jest.spyOn(usersRepo, 'deleteUser').mockReturnValue(true);

            const { status, body } = await request(app).delete('/users/__ID__').send();

            expect({ status, body }).toEqual({
                status: 204,
                body: {},
            });
            expect(deleteUserMock.mock.calls).toEqual([['__ID__']]);
        });

        it('should return a 404 error if the user is not found', async () => {
            const deleteUserMock = jest.spyOn(usersRepo, 'deleteUser').mockReturnValue(false);

            const { status, body } = await request(app).delete('/users/__ID__').send();

            expect({ status, body }).toEqual({
                status: 404,
                body: { message: 'user not found' },
            });
            expect(deleteUserMock.mock.calls).toEqual([['__ID__']]);
        });
    });
});
