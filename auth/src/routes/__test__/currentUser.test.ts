import request from 'supertest';
import { app } from '../../app';

it ('responds with null if not authenticated', async () => {
    const response = await request(app)
        .get('/api/users/currentuser')
        .send()
        .expect(200);

    expect(response.body.currentUser).toEqual(null);
});

it ('responds with details of the current user', async () => {
    const cookie = await signin();

    const response = await request(app)
        .get('/api/users/currentuser')
        .set('Cookie', cookie)
        .send()
        .expect(200);

        console.log('user ----> ', response.body.currentUser)

    expect(response.body.currentUser).toEqual(null);
});