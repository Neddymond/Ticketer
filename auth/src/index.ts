import { startMongo } from './config/mongodb';
import { app } from './app';

app.listen(4000, () => console.log('server is listening on port 4000!!!'));

startMongo();