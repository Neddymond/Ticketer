import mongoose from "mongoose";

const start = async () => {
    try {
        if (!process.env.JWT_KEY) {
            throw new Error('JWT_KEY must be defined');
        }

        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
        console.log('====> connected to mongodb successfully');
        
    } catch (err) {
        console.log(err);
    }
}

export { start as startMongo }