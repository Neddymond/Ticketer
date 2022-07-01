import request from 'supertest';
import { app } from '../../app';

it('fails when an email that does not exist is supplied', async () => {
    await request(app)
        .post('/api/users/signin')
        .send({ email: 'no-email@gmail.com', password: 'nothing' })
        .expect(400);
});

it ('fails when an incorrect password is suppled', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({ email: 'test@gmail.com', password: '1234567890' })
        .expect(201);

    await request(app)
        .post('/api/users/signin')
        .send({ email: 'test@gmail.com', password: 'password' })
        .expect(200)
});

it ('responds with a cookie when valid credentials are provided', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({ email: 'test@test.com', password: 'password' })
        .expect(201);

    const response = await request(app)
        .post('/api/users/signin')
        .send({ email: 'test@test.com', password: 'password' })
        .expect(200)
    expect(response.get('Set-Cookie')).toBeDefined();
})