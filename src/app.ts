import express from 'express';
import * as usersRepo from './usersRepo';

// Create Express server
const app = express();

// Express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
    const username = req.query.username as string;

    if (!username) {
        const users = usersRepo.getUsers();
        return res.send(users);
    }

    const user = usersRepo.getUserByUsername(username);

    if (user === undefined) {
        return res.status(404).send({ message: 'user not found' });
    }

    return res.send(user);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = usersRepo.getUserById(userId);

    if (!user) {
        return res.status(404).send({ message: 'user not found' });
    }

    return res.send(user);
});

app.post('/users', (req, res) => {
    const user = {
        id: req.body.id,
        username: req.body.username,
    };

    const newUser = usersRepo.createUser(user);

    return res.send(newUser);
});

app.put('/users/:id', (req, res) => {
    const newUser = {
        id: req.params.id,
        username: req.body.username,
    };

    const user = usersRepo.updateUser(req.params.id, newUser);

    if (!user) {
        return res.status(404).send({ message: 'user not found' });
    }

    return res.send(user);
});

app.delete('/users/:id', (req, res) => {
    const userDeleted = usersRepo.deleteUser(req.params.id);

    if (!userDeleted) {
        return res.status(404).send({ message: 'user not found' });
    }

    return res.status(204).send();
});

export default app;
