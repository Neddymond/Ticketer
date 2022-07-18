import request from 'supertest';
import { app } from '../../app';

it ('clears cookie after signing out', async () => {
    await request(app)
        .post('api/users/signup')
        .send({ email: 'test@gmail.com', password: '1234567890' })
        .expect(201);

    const res = await request(app)
        .post('api/users/signout')
        .send({})
        .expect(200)
});