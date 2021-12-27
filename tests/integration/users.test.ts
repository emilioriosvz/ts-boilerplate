import request from 'supertest';
import app from '../../src/app';
import * as usersRepo from '../../src/usersRepo';

describe('/users', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('GET /users', () => {
<<<<<<< HEAD
        it('should retrieve the list of users', async () => {
=======
        it('should retrive the list of users', async () => {
>>>>>>> 3b34e24cf0ec9cc28d9ab4a72ba4446529f78916
            const getUsersMock = jest.spyOn(usersRepo, 'getUsers').mockReturnValue([
                {
                    id: '1',
                    username: 'JaimeAmate'
                },
                {
                    id: '2',
                    username: 'RosaBerned'
                }
            ]);

            const { status, body } = await request(app).get('/users');

            expect({ status, body}).toEqual({status: 200, body: [
                {
                    id: '1',
                    username: 'JaimeAmate'
                },
                {
                    id: '2',
                    username: 'RosaBerned'
                }
            ]});
            expect(getUsersMock.mock.calls).toEqual([[]]);
        });

        it('should return a user by username', async () => {
<<<<<<< HEAD
            const getUserByUsernameMock = jest.spyOn(usersRepo, 'getUserByUsername').mockReturnValue( {id: '__ID__', username: '__USERNAME__'} )
    
            const { status, body } = await request(app).get('/users?username=__USERNAME__');
    
            expect({status, body}).toEqual({
                status: 200, 
                body: { id: '__ID__', username: '__USERNAME__' } 
            });
            expect(getUserByUsernameMock.mock.calls).toEqual( [ ['__USERNAME__'] ] );
=======
            const getUserByUsernameMock = jest.spyOn(usersRepo, 'getUserByUsername').mockReturnValue({id: '__ID__', username: '__USERNAME__'})
    
            const { status, body } = await request(app).get('/users?username=__USERNAME__');
    
            expect({status, body}).toEqual({status: 200, body: {id: '__ID__', username: '__USERNAME__'}});
            expect(getUserByUsernameMock.mock.calls).toEqual([['__USERNAME__']]);
>>>>>>> 3b34e24cf0ec9cc28d9ab4a72ba4446529f78916
        });

        it('should return a 404 status error if the username is not found', async () => {
            const getUserByUsernameMock = jest.spyOn(usersRepo, 'getUserByUsername').mockReturnValue(undefined);
            
            const { status, body } = await request(app).get('/users?username=__USERNAME__');
    
<<<<<<< HEAD
            expect({ status, body}).toEqual({
                status: 404, 
                body: { message: 'user not found' }
            });
            expect(getUserByUsernameMock.mock.calls).toEqual( [ ['__USERNAME__'] ] );
=======
            expect({ status, body}).toEqual({status: 404, body: { message: 'user not found'}});
            expect(getUserByUsernameMock.mock.calls).toEqual([['__USERNAME__']]);
>>>>>>> 3b34e24cf0ec9cc28d9ab4a72ba4446529f78916
        });
    });

    describe('GET /users/:id', () => {
        it('should return the user', async () => {
<<<<<<< HEAD
            const getUserByIdMock = jest.spyOn(usersRepo, 'getUserById').mockReturnValue({ id: '__ID__', username: '__USERNAME__' });

            const { status, body } = await request(app).get('/users/__ID__');

            expect({ status, body }).toEqual({
                status: 200, 
                body: { id: '__ID__', username: '__USERNAME__' }
            });
            expect(getUserByIdMock.mock.calls).toEqual( [ ['__ID__'] ] );
=======
            const getUserByIdMock = jest.spyOn(usersRepo, 'getUserById').mockReturnValue({id: '__ID__', username: '__USERNAME__'});

            const { status, body } = await request(app).get('/users/__ID__');

            expect({ status, body }).toEqual({status: 200, body: {id: '__ID__', username: '__USERNAME__'}})
            expect(getUserByIdMock.mock.calls).toEqual([['__ID__']]);
>>>>>>> 3b34e24cf0ec9cc28d9ab4a72ba4446529f78916
        });
        
        it('should return a 404 status code if the user is not found', async () => {
            const getUserByIdMock = jest.spyOn(usersRepo, 'getUserById').mockReturnValue(undefined);

            const { status, body } = await request(app).get('/users/__ID__');

<<<<<<< HEAD
            expect({ status, body }).toEqual({
                status: 404, 
                body: { message: 'user not found' }
            });
            expect(getUserByIdMock.mock.calls).toEqual( [ ['__ID__'] ] );
=======
            expect({ status, body}).toEqual({status: 404, body: { message: 'user not found'}});
            expect(getUserByIdMock.mock.calls).toEqual([['__ID__']]);
>>>>>>> 3b34e24cf0ec9cc28d9ab4a72ba4446529f78916
        });
    });

    describe('POST /users', () => {
        it('should create a new user', async () => {
<<<<<<< HEAD
            const createUserMock = jest.spyOn(usersRepo, 'createUser').mockReturnValue( {id: '__ID__', username: '__USERNAME__'} );

            const { status, body } = await request(app).post('/users').send( {username: '__USERNAME__'} );

            expect( {status, body} ).toEqual({
                status: 200, 
                body: { id: '__ID__', username: '__USERNAME__' }
            });
            expect(createUserMock.mock.calls).toEqual([ [ {username: '__USERNAME__'} ] ]);
=======
            const createUserMock = jest.spyOn(usersRepo, 'createUser').mockReturnValue({id: '__ID__', username: '__USERNAME__'});

            const { status, body } = await request(app).post('/users').send({username: '__USERNAME__'});

            expect({status, body}).toEqual({status: 200, body: {id: '__ID__', username: '__USERNAME__'}});
            expect(createUserMock.mock.calls).toEqual([[{username: '__USERNAME__'}]]);
>>>>>>> 3b34e24cf0ec9cc28d9ab4a72ba4446529f78916
        });
    });

    describe('PUT /users/:id', () => {
        it('should update an existing user', async () => {
<<<<<<< HEAD
            const updateUserMock = jest.spyOn(usersRepo, 'updateUser').mockReturnValue({ id: '__ID__', username: '__USERNAME__' });

            const { status, body } = await request(app).put('/users/__ID__').send( { username: '__USERNAME__' } );

            expect({ status, body }).toEqual({
                status: 200,
                body: { id: '__ID__', username: '__USERNAME__' },
            })
            expect(updateUserMock.mock.calls).toEqual([['__ID__', { id: '__ID__', username: '__USERNAME__' }]]);
=======
            const updateUserMock = jest.spyOn(usersRepo, 'updateUser').mockReturnValue({id: '__ID__', username: '__USERNAME__'});

            const { status, body } = await request(app).put('/users/1').send({username: '__USERNAME__'});

            expect({status, body}).toEqual({status: 200, body: {id: '__ID__', username: '__USERNAME__'}})
            expect(updateUserMock.mock.calls).toEqual([['__ID__', {username: '__USERNAME__'}]]);
>>>>>>> 3b34e24cf0ec9cc28d9ab4a72ba4446529f78916
        });

        it('should return a 404 error if the user is not found', async () => {
            const updateUserMock = jest.spyOn(usersRepo, 'updateUser').mockReturnValue(undefined);

<<<<<<< HEAD
            const { status, body } = await request(app).put('/users/__ID__').send( {username: '__USERNAME__'} );

            expect({ status, body}).toEqual({
                status: 404, 
                body: { message: 'user not found' }
            });
            expect(updateUserMock.mock.calls).toEqual([ [ '__ID__', { id: '__ID__', username: '__USERNAME__' } ] ]);
=======
            const { status, body } = await request(app).put('/users/__ID__').send({username: '__USERNAME__'});

            expect({ status, body}).toEqual({status: 404, body: { message: 'user not found'}});
            expect(updateUserMock.mock.calls).toEqual([['__ID__', {username: '__USERNAME__'}]]);
>>>>>>> 3b34e24cf0ec9cc28d9ab4a72ba4446529f78916
        });
    });

    describe('DELETE /users/:id', () => {
        it('should delete an existing user', async () => {
            const deleteUserMock = jest.spyOn(usersRepo, 'deleteUser').mockReturnValue(true);

<<<<<<< HEAD
            const { status, body } = await request(app).delete('/users/__ID__').send();

            expect({ status, body }).toEqual({ 
                status: 204, 
                body: {}
            });
            expect(deleteUserMock.mock.calls).toEqual( [ ['__ID__'] ] );
=======
            const { status, body } = await request(app).delete('/users/__ID__').send({username: '__USERNAME__'});

            expect({status, body}).toEqual({ status: 204, body: {}});
            expect(deleteUserMock.mock.calls).toEqual([['__ID__']]);
>>>>>>> 3b34e24cf0ec9cc28d9ab4a72ba4446529f78916
        });

        it('should return a 404 error if the user is not found', async () => {
            const deleteUserMock = jest.spyOn(usersRepo, 'deleteUser').mockReturnValue(false);

<<<<<<< HEAD
            const { status, body } = await request(app).delete('/users/__ID__').send();

            expect({ status, body}).toEqual({
                status: 404, 
                body: { message: 'user not found' }
            });
            expect(deleteUserMock.mock.calls).toEqual( [ ['__ID__'] ] );
=======
            const { status, body } = await request(app).delete('/users/__ID__').send({username: '__USERNAME__'});

            expect({ status, body}).toEqual({status: 404, body: { message: 'user not found'}});
            expect(deleteUserMock.mock.calls).toEqual([['__ID__']]);
>>>>>>> 3b34e24cf0ec9cc28d9ab4a72ba4446529f78916
        });
    });
});