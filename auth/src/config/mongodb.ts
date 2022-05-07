import mongoose from "mongoose";

const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
        console.log('====> connected to mongodb successfully');
        
    } catch (err) {
        console.log(err);
    }
}

export { start as startMongo }